import React, { useEffect } from 'react'
import LargeCard from '../../Card/LargeCard'
import { useDispatch, useSelector } from 'react-redux'
import { getBestBooks } from '../../../reduces/bestBookSlice'

const BestBookContents = () => {
    const BestBooks = useSelector((state) => state.bestBook.books)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBestBooks())
    }, [])
  return (
    <>
    {
        BestBooks.map((book)=> (
                <li key={book.id}>
                    <LargeCard
                    id={book.id}
                    category_id={book.category_id}
                    title={book.title}
                    author={book.author}
                    bookPrice={book.price}
                    detail={book.detail}
                    img={book.img}
                    /></li>
        ))
    }
    </>
  )
}

export default BestBookContents