import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getBestBooks} from "../../reduces/bestBookSlice"
import LargeCard from "../Card/LargeCard"

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
                    book={book}
                    /></li>
        ))
    }
    </>
  )
}

export default BestBookContents