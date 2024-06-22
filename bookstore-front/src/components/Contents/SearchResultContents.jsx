import { css } from "@emotion/react";
import React from "react";
import SmallCard from "../Card/SmallCard";


const SearchResultContents = ({ searchBooks, query }) => {
  return (
    <>
      {searchBooks &&
        searchBooks.map((book) => {
          return (
            <li key={book.id}>
              <SmallCard
              book={book}
               />
            </li>
          );
        })}
    </>
  );
};

export default SearchResultContents;
