import Slider from "react-slick";
import SmallCard from "../Card/SmallCard";
import React, { useEffect, useState } from "react";
import API from "../../utils/api";

function NewBookContents () {
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
                    book={book}
                />
            ))}
        </>
    );
}

export default NewBookContents