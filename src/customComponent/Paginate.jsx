import React, { Component } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import _ from "lodash";
import PropTypes from "prop-types";

const Paginate = (props) => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount == 1) {
    return null;
  }
  const pages = _.range(1, pageCount + 1);
  //   console.log(pageCount);
  const activePageAction = (page) =>
    currentPage === page ? (
      <PaginationLink
        isActive
        href="#"
        onClick={() => {
          onPageChange(page);
        }}
      >
        {page}
      </PaginationLink>
    ) : (
      <PaginationLink
        href="#"
        onClick={() => {
          onPageChange(page);
        }}
      >
        {page}
      </PaginationLink>
    );
  return (
    <Pagination>
      <PaginationContent>
        {pages.map((page) => (
          <PaginationItem key={page}>{activePageAction(page)}</PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

Paginate.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Paginate;
