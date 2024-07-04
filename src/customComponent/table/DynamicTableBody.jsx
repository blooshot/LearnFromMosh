import React, { Component } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import _ from "lodash";

class DtableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  createkey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            {columns.map((column) => (
              <TableCell key={this.createkey(item, column)}>
                {this.renderCell(item, column)}
              </TableCell>
            ))}
          </TableRow>

          /*  <TableRow key={movie.id}>
            <TableCell>{movie.id}</TableCell>
            <TableCell>{movie.title}</TableCell>
            <TableCell>{movie.genre.join(", ")}</TableCell>
            <TableCell>{movie.rating}</TableCell>
            <TableCell>{movie.boxOffice}</TableCell>
            <TableCell
              onClick={() => {
                likeHandler(movie);
              }}
              style={{ cursor: "pointer" }}
            >
              {movie.like ? (
                <FontAwesomeIcon icon={heartSolid} />
              ) : (
                <FontAwesomeIcon icon={heartRegular} />
              )}
            </TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  //this.handleDelete(movie.id);
                  deleteHandler(movie);
                }}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow> */
        ))}
      </TableBody>
    );
  }
}

export default DtableBody;
