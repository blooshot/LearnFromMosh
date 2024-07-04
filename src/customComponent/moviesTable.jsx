// import { Table } from "@/components/ui/table";
import React, { Component } from "react";
/* import DtableHeader from "./DynamicTableHeader";
import DtableBody from "./DynamicTableBody"; */
import { Button } from "@/components/ui/button";
import Dtable from "./table/DynamicTableLayout";

class MoviesTable extends Component {
  columns = [
    { path: "id", label: "ID" },
    { path: "title", label: "Title" },
    { path: "genre", label: "Genre" },
    { path: "rating", label: "Rating" },
    { path: "boxOffice", label: "Box Office Price" },
    { key: "Likes" },
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
