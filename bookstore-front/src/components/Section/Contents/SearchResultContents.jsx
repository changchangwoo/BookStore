import { css } from "@emotion/react";
import React from "react";
import SmallCard from "../../Card/SmallCard";

const sectionContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
`;
const SearchResultContents = ({ searchBooks, query }) => {
  return (
    <div css={sectionContainer}>
      {searchBooks &&
        searchBooks.map((book) => {
          return (
            <li key={book.id}>
              <SmallCard
              query={query}
              title={book.title}
              author={book.author}
              summary={book.summary}
              price={book.price}
              category_id={book.category_id}
              img={book.img}
              id={book.id}
               />
            </li>
          );
        })}
    </div>
  );
};

export default SearchResultContents;
