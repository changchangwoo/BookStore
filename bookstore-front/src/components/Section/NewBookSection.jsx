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
              limit : 10,
              currentPage : 1
            }
          }).then((response) => {
            console.log(response.data)
            setNewBooks(response.data.books)
    })
          .catch((err)=>console.log(err))
    }, [])

    return (
        <>
            {newBooks.map((book)=> (
                <SmallCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    summary={book.summary}
                    price={book.price}
                    img={book.img}
                    // 다른 책 정보도 필요한 대로 전달
                />
            ))}
        </>
    );
}

export default NewBookSection