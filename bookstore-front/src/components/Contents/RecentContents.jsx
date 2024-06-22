import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LargeCard from "../Card/LargeCard";
import SmallCard from "../Card/SmallCard";

const RecentContents = ({ hold, type }) => {
  const relateBooks = useSelector((state) => state.recentBook.books.books);
  const [recentBook, setRecentBook] = useState(null);
  const [randNum, setRandNum] = useState(Math.floor(Math.random() * 10));

  useEffect(() => {
    const storedRecentBook = localStorage.getItem("recentBook");
    if (storedRecentBook) {
      setRecentBook(JSON.parse(storedRecentBook));
    }
  }, []);

  if (type === "big") {
    return (
      <>
        {hold && recentBook && <LargeCard book={recentBook} />}
        {!hold && relateBooks && <LargeCard book={relateBooks[randNum]} />}
        {!hold && !relateBooks && (
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
            book={book}
          />
        ))}
      </>
    );
  }
  return null;
};

export default RecentContents;
