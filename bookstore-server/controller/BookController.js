/* 이창우 */
const { conn, asynConn } = require("../mariadb");
const { StatusCodes } = require("http-status-codes");
const ensureAuthorization = require("../auth.js");
const jwt = require("jsonwebtoken");
const allBooks = async (req, res) => {
    try {
        let allBooksRes = {};
        let { category_id, news, limit, currentPage } = req.query;

        let offset = limit * (currentPage - 1);

        let sql = "SELECT SQL_CALC_FOUND_ROWS *, (SELECT count(*) FROM likes WHERE books.id=liked_book_id) AS likes FROM books";
        let values = [];

        if (category_id && news) {
            sql += " WHERE category_id=? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";
            values = [category_id];
        } else if (category_id) {
            sql += " WHERE category_id=?";
            values = [category_id];
        } else if (news) {
            sql += " WHERE STR_TO_DATE(CONCAT(pub_date, '-01'), '%Y-%m-%d') BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";
            // sql += " WHERE STR_TO_DATE(pub_date, '%Y-%m') BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";
        }

        sql += " LIMIT ? OFFSET ?";
        values.push(parseInt(limit), offset);

        const [booksResults] = await asynConn.query(sql, values);
        if (booksResults.length) {
            booksResults.map(result => {
                result.pubDate = result.pub_date;
                delete result.pub_date;
            });

            allBooksRes.books = booksResults;
        } else {
            return res.status(StatusCodes.NOT_FOUND).end();
        }

        const [[paginationResult]] = await asynConn.query("SELECT found_rows()");

        let pagination = {};
        pagination.currentPage = parseInt(currentPage);
        pagination.totalCount = paginationResult["found_rows()"];

        allBooksRes.pagination = pagination;

        return res.status(StatusCodes.OK).json(allBooksRes);
    } catch (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
};


const bookDetail = (req, res) => {

    // 로그인 상태가 아니면 => liked 빼고 보내주면 되고
    // 로그인 상태이면 => liked 추가해서
    let authorization = ensureAuthorization(req, res);
    if (authorization instanceof ReferenceError ||
        authorization instanceof jwt.TokenExpiredError ||
        authorization instanceof jwt.JsonWebTokenError
    ) {
        let book_id = req.params.id;

        let sql = `SELECT *,
                      (SELECT count(*) FROM likes WHERE liked_book_id=books.id) AS likes
                  FROM books 
                  LEFT JOIN category 
                  ON books.category_id = category.category_id 
                  WHERE books.id=?;`;

        let values = [book_id];
        conn.query(sql, values,
            (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(StatusCodes.BAD_REQUEST).end();
                }

                let result = results[0];
                if (result) {
                    result.pubDate = result.pub_date;
                    result.categoryName = result.category_name;
                    delete result.pub_date;
                    delete result.category_name;
                    return res.status(StatusCodes.OK).json(result);
                }
                else
                    return res.status(StatusCodes.NOT_FOUND).end();
            })
    } else {
        let book_id = req.params.id;

        let sql = `SELECT *,
                      (SELECT count(*) FROM likes WHERE liked_book_id=books.id) AS likes,
                      (SELECT EXISTS (SELECT * FROM likes WHERE user_id=? AND liked_book_id=?)) AS liked
                  FROM books 
                  LEFT JOIN category 
                  ON books.category_id = category.category_id 
                  WHERE books.id=?;`;
        let values = [authorization.id, book_id, book_id];
        conn.query(sql, values,
            (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(StatusCodes.BAD_REQUEST).end();
                }

                let result = results[0];
                if (result) {
                    result.pubDate = result.pub_date;
                    result.categoryName = result.category_name;
                    delete result.pub_date;
                    delete result.category_name;
                    return res.status(StatusCodes.OK).json(result);
                }
                else
                    return res.status(StatusCodes.NOT_FOUND).end();
            })
    }
};

const bestBooks = async (req, res) => {
    try {
        const sql = `SELECT liked_book_id, COUNT(liked_book_id) AS count
    FROM likes
    GROUP BY liked_book_id
    ORDER BY count DESC
    LIMIT 6;`;

        const [results] = await asynConn.query(sql)
        const likedBookIds = results.map(book => book.liked_book_id)
        const bestSQL = `SELECT * FROM books WHERE id IN (${likedBookIds.join(',')})`;
        const [bestResults] = await asynConn.query(bestSQL)
        if (bestResults.length > 0) {
            return res.status(StatusCodes.OK).json(bestResults)
        }
    } catch (err) {
        return res.status(StatusCodes.BAD_REQUEST).end()
    }
};

const searchBooks = (req, res) => {
    const query = req.query.query;
    if (!query) {
        return res.status(StatusCodes.BAD_REQUEST).end();
    }

    const searchTerm = `%${query}%`;
    const sql = "SELECT * FROM books WHERE title LIKE ?";
    conn.query(sql, [searchTerm], (err, results) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "An internal server error occurred." });
        }
        return res.status(StatusCodes.OK).json(results);
    });
};
module.exports = {
    allBooks,
    bookDetail,
    bestBooks,
    searchBooks
};