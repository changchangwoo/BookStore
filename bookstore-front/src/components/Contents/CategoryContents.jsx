import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import SmallCard from '../Card/SmallCard';

const CategoryContents = () => {
    const categoryBooks = useSelector((state) => state.categoryBook.books)
  return (
    <>
    {categoryBooks.map((book)=> (
        <SmallCard
            key={book.id}
            book={book}
        />
    ))}
</>
  )
}

export default CategoryContents