import React from "react";
import * as S from "./Pagination.style";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()];

  return (
    <S.PaginationWrapper>
      <S.ArrowButton
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowBackIosNewRoundedIcon />
      </S.ArrowButton>
      {pages.map((page) => (
        <S.PageButton
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page + 1}
        </S.PageButton>
      ))}
      <S.ArrowButton
        disabled={currentPage === totalPages - 1}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowForwardIosRoundedIcon />
      </S.ArrowButton>
    </S.PaginationWrapper>
  );
};

export default Pagination;
