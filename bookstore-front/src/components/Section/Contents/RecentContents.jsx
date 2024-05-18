import React, { useEffect, useState } from "react";
import LargeCard from "../../Card/LargeCard";
import { useSelector } from "react-redux";
import SmallCard from "../../Card/SmallCard";

const RecentContents = ({ hold, type }) => {
  const relateBooks = useSelector((state) => state.recentBook.books.books);
  const [recentBook, setRecentBook] = useState(null);
  const ranNum = Math.floor(Math.random() * 5);

  useEffect(() => {
    const storedRecentBook = localStorage.getItem("recentBook");
    if (storedRecentBook) {
      setRecentBook(JSON.parse(storedRecentBook));
    }
  }, []);

  if (type === "big") {
    return (
      <>
        {hold && recentBook && (
          <LargeCard
            id={recentBook.id}
            category_id={recentBook.category_id}
            title={recentBook.title}
            author={recentBook.author}
            detail={recentBook.detail}
            img={recentBook.img}
          />
        )}
        {!hold && (
          <LargeCard
          />
        )}
      </>
    );
  } else if (type === "small" && relateBooks) {
    return (
      <>
        {relateBooks.map((book) => (
          <SmallCard
            key={book.id}
            id={book.id}
            category_id={book.category_id}
            title={book.title}
            author={book.author}
            detail={book.detail}
            img={book.img}
          />
        ))}
      </>
    );
  }
  return null;
};

export default RecentContents;
