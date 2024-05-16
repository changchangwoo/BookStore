import React, { useEffect, useState } from "react";
import LargeCard from "../../Card/LargeCard";
import { useDispatch } from "react-redux";
import { getRecentCategoryBook } from "../../../reduces/recentBookSlice";

const RecentContents = ({hold}) => {
    const [recentBook, setrecentBook] = useState('')
    const dispatch = useDispatch();

    useEffect(()=>{
    setrecentBook(JSON.parse(localStorage.getItem('recentBook')))
    }, [])

    console.log(recentBook)

  return (
    <>
    {hold ?
      <LargeCard 
        id = {recentBook.id}
        title = {recentBook.title}
        author= {recentBook.author}
        detail = {recentBook.detail}
        img = {recentBook.img}
      />
      :
    <LargeCard/>
    }
    </>
  );
};

export default RecentContents;
