import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getRecentCategoryBook } from '../reduces/recentBookSlice';
import { getDetailBook } from '../reduces/detailBookSlice';

const useGetDetail = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const loginCheck = useSelector((state) => state.user.loginCheck);
    const detailBook = useSelector((state) => state.detailBook.books);
    const category = useSelector((state)=> state.category.category)
    const [categoryName, setCategoryName] = useState(null)
  
    useEffect(() => {
      const categoryId = parseInt(searchParams.get('category_id'));
      const bookId = parseInt(searchParams.get('book_id'));
      category.map((item)=>{
        if(item.category_id === categoryId) setCategoryName(item.category_name)
      })
      dispatch(getDetailBook(bookId));
      dispatch(getRecentCategoryBook(categoryId));
      window.scrollTo(0, 0);
    }, [searchParams]);


  return [detailBook, categoryName, loginCheck]
}

export default useGetDetail