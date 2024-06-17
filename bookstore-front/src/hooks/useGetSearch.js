import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSearchCategory } from '../reduces/searchBookSlice';

const useGetSearch = () => {
  const searchBooks = useSelector((state) => state.searchBook.books);
  const totalCount = useSelector((state) => state.searchBook.totalCount);
  const category = useSelector((state)=> state.category.category)
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();

  const [resultKeyword, setResultKeyword] = useState("");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    const categoryId = parseInt(searchParams.get("categoryId"));
    const page = searchParams.get("page");

    if (query) {
      setResultKeyword(query);      
    }

    if (categoryId !== null && !isNaN(categoryId)) {
      const categoryName = category.find(item => item.category_id === categoryId)?.category_name;
      setResultKeyword(null);
      setCategoryName(categoryName);
      if (!page) {
        dispatch(
          getSearchCategory({
            categoryId: categoryId,
            currentPage: 1,
            totalCount: true,
          })
        );
      } 
    }
  }, [location.search]);

  return [resultKeyword, searchBooks, totalCount, categoryName]

}

export default useGetSearch