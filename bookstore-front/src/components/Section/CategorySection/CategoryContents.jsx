import React, { useEffect } from 'react'
import SmallCard from "../../Card/SmallCard";
import { useSelector } from 'react-redux';

const CategoryContents = () => {
    const categoryBooks = useSelector((state) => state.categoryBook.books)
  return (
    <>
    {categoryBooks.map((book)=> (
        <SmallCard
            key={book.id}
            id={book.id}
            category_id={book.category_id}
            title={book.title}
            author={book.author}
            summary={book.summary}
            price={book.price}
            img={book.img}
        />
    ))}
</>
  )
}

export default CategoryContents