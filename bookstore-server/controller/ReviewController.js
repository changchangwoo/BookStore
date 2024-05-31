const ensureAuthorization = require("../auth");
const { conn } = require("../mariadb");
const { StatusCodes } = require("http-status-codes");

const getReview = (req, res) => {
    let { bookId } = req.query
    let sql = 
    `
        SELECT r.*, u.email 
        FROM reviews r
        JOIN users u ON r.user_id = u.id
        WHERE r.book_id = ?
        ORDER BY r.date;
    `;
        
    conn.query(sql, [bookId], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        if (results) {
            return res.status(StatusCodes.OK).json(results);
        }
    });
};

const addReview = (req, res) => {
    let authorization = ensureAuthorization(req, res);
    let userId = authorization.id; 
    let { bookId, comment } = req.body; 

    const randomValue = () => Math.floor(Math.random() * 256);
    const r = randomValue();
    const g = randomValue();
    const b = randomValue();
    const rgb = `rgb(${r}, ${g}, ${b})`;

    let sql = `INSERT INTO reviews (user_id, book_id, comment, rgb) VALUES (?, ?, ?, ?)`;
    let values = [userId, bookId, comment, rgb];

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        return res.status(StatusCodes.CREATED).json({ message: 'Review added successfully', reviewId: results.insertId });
    });
};

module.exports = {getReview, addReview};
