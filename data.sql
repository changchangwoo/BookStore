/* 이창우 */

INSERT INTO delivery (address, receiver, contact) VALUES ('서울시 노원구', '남지우', '010-5555-2067')

INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id) 
VALUES ("어린왕자들", 3, 60000, 1, 1)

INSERT INTO orderdBook (order_id, book_id, quantity) VALUES (1, 1, 1)

SELECT last_insert_id();
