// import { Table } from "@/components/ui/table";
import React, { Component } from "react";
/* import DtableHeader from "./DynamicTableHeader";
import DtableBody from "./DynamicTableBody"; */
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import Dtable from "./table/DynamicTableLayout";

class MoviesTable extends Component {
  columns = [
    { path: "id", label: "ID" },
    { path: "title", label: "Title" },
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
            <FontAwesomeIcon icon={heartSolid} />
          </span>
        ) : (
          <span
            onClick={() => {
              this.props.likeHandler(movie);
            }}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={heartRegular} />{" "}
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
    const { moviesList, likeHandler, deleteHandler, sortColumn, onSort } =
      this.props;
    return (
      <Dtable
        onSort={onSort}
        columns={this.columns}
        sortColumn={sortColumn}
        data={moviesList}
      />
    );
  }
}

export default MoviesTable;
