import Slider from "react-slick";
import SmallCard from "../Card/SmallCard";
import React, { useEffect, useState } from "react";
import API from "../../utils/api";

function NewBookSection () {
    const [newBooks, setNewBooks] = useState([]);

    useEffect(()=>{
        API.get("books/", {
            params: {
              news : 1,
              limit : 12,
              currentPage : 1
            }
          }).then((response) => {
            setNewBooks(response.data.books)
    })
          .catch((err)=>console.log(err))
    }, [])

    return (
        <>
            {newBooks.map((book)=> (
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
    );
}

export default NewBookSection