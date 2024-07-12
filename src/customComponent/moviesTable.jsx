// import { Table } from "@/components/ui/table";
import React, { Component } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dtable from "./table/DynamicTableLayout";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    { path: "id", label: "ID" },
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre", label: "Genre" },
    { path: "rating", label: "Rating" },
    { path: "boxOffice", label: "Box Office Price" },
    {
      key: "Likes",
      content: (movie) => {
        return movie.like ? (
          <span
            onClick={() => {
              this.props.likeHandler(movie);
            }}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon="fa-solid fa-heart" />
          </span>
        ) : (
          <span
            onClick={() => {
              this.props.likeHandler(movie);
            }}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon="fa-regular fa-heart" />{" "}
          </span>
        );
      },
    },
    {
      key: "Action",
      content: (movie) => (
        <Button
          onClick={() => {
            this.props.deleteHandler(movie);
          }}
        >
          Delete
        </Button>
      ),
    },
  ];
  columns2 = [
    // { path: "_id", label: "ID" },
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "dailyRentalRate", label: "Rental Rate" },
    { path: "numberInStock", label: "Number In Stocks" },
    {
      key: "Likes",
      content: (movie) => {
        return movie.like ? (
          <span
            onClick={() => {
              this.props.likeHandler(movie);
            }}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon="fa-solid fa-heart" />
          </span>
        ) : (
          <span
            onClick={() => {
              this.props.likeHandler(movie);
            }}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon="fa-regular fa-heart" />{" "}
          </span>
        );
      },
    },
    {
      key: "Action",
      content: (movie) => (
        <Button
          onClick={() => {
            this.props.deleteHandler(movie);
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  render() {
    const { moviesList, sortColumn, onSort } = this.props;
    return (
      <Dtable
        onSort={onSort}
        columns={this.columns2}
        sortColumn={sortColumn}
        data={moviesList}
      />
    );
  }
}

export default MoviesTable;
