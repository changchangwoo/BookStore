const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const pool = require("./mariadb");



const categoryID = [
    "001001046011", "001001019001001", "001001011008", "001001003031", "001001047005", "001001026008", "001001046014"
];

/*
0	소설
1	인문
2	건강
3	IT
4	에세이
5	자기계발
6	시
*/

const getHtml = async (categoryURL, categoryId) => {
    console.time(`getHtml-${categoryId}`);
    const data = [];
    try {
        for (let i = 1; i <= 2; i++) {
            const pageNumber = i === 1 ? "" : `&PageNumber=${i}`;
            const url = `https://www.yes24.com/24/Category/Display/${categoryURL}?FetchSize=40${pageNumber}`;
            const html = await axios.get(url, {
                responseType: 'arraybuffer'
            });
            const decodeData = iconv.decode(html.data, "EUC-KR").toString();
            const $ = cheerio.load(decodeData);
            const bodyList = $(".cCont_goodsSet").toArray();

            const promises = bodyList.map(async (element) => {
                const title = $(element).find(".goods_info .goods_name a").text().trim();
                const price = $(element).find(".goods_info .goods_price .yes_b").text().trim().replace(/[^\d]/g, '');;
                const author = $(element).find(".goods_info .goods_auth").text().trim();
                let pub_date = $(element).find(".goods_info .goods_date").text().trim();
                const id = $(element).closest('li').attr("data-goods-no").replace(/[^\d]/g, '');;;
                const { img, contents, detail } = await getDetail(id);
                pub_date = new Date(pub_date.replace('년 ', '-').replace('월', ''));

                return {
                    id,
                    title,
                    price,
                    author,
                    pub_date,
                    category_id: categoryId,
                    img,
                    contents,
                    detail
                };
            });

            const pageData = await Promise.all(promises);
            data.push(...pageData);
        }
    } catch (error) {
        console.error(error);
    }
    try {
        const conn = await pool.getConnection();

        if (data.length > 0) {
            const sql = `
                INSERT INTO books (id, title, price, author, pub_date, category_id, img, contents, detail)
                VALUES ?
                ON DUPLICATE KEY UPDATE
                    title=VALUES(title),
                    price=VALUES(price),
                    author=VALUES(author),
                    pub_date=DATE_FORMAT(VALUES(pub_date), '%Y-%m'),
                    category_id=VALUES(category_id),
                    img=VALUES(img),
                    contents=VALUES(contents),
                    detail=VALUES(detail)
            `;
            const values = data.map(book => [
                book.id, book.title, book.price, book.author, book.pub_date,
                book.category_id, book.img, book.contents, book.detail
            ]);
            await conn.query(sql, [values]);
        }

        conn.release();
    } catch (err) {
        console.error(err);
    }

    console.timeEnd(`getHtml-${categoryId}`);
};

const getDetail = async (id) => {
    const URL = "https://www.yes24.com/Product/Goods/" + id;
    try {
        const html = await axios.get(URL, {
            responseType: 'arraybuffer'
        });
        const decodeData = iconv.decode(html.data, "UTF-8").toString();
        const $ = cheerio.load(decodeData);
        const img = $("#yDetailTopWrap img.gImg").attr("src");
        const contents = $("#infoset_toc .txtContentText").text().trim();
        const detail = $('#infoset_introduce .infoWrap_txtInner').text().trim().replace(/<iframe[^>]*>.*?<\/iframe>/g, '');
        return { img, contents, detail };

    } catch (err) {
        console.error(err);
        return { img: "", contents: "", detail: "" };
    }
};

const fetchAllCategories = async () => {
    const promises = categoryID.map((categoryURL, i) => getHtml(categoryURL, i));
    await Promise.all(promises);
};

fetchAllCategories();
