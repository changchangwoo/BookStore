import { css } from "@emotion/react";
import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import { Link, useLocation } from "react-router-dom";

const container = css`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  li {
    margin: 5px;
  }
`;

const SearchCategory = () => {
  const location = useLocation();
  const category = useSelector((state) => state.category.category);
  const searchParams = new URLSearchParams(location.search);
  const categoryId = parseInt(searchParams.get("categoryId"));
  return (
    <>
      <div css={container}>
        {category.map((item, index) => (
          <li key={item.category_id}>
            <Link to={`/search?categoryId=${item.category_id}`}>
              <Button
                color={categoryId === item.category_id ? "hover" : "blue"}
                title={item.category_name}
                active={true}
              ></Button>
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default SearchCategory;
