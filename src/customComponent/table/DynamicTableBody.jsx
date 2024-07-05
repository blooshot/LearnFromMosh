import React, { Component } from "react";
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
        ))}
      </TableBody>
    );
  }
}

export default DtableBody;
