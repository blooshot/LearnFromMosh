import React, { Component } from "react";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
// columns: arr
// sortColumn: obj
// onSort: fn()

class DtableHeader extends Component {
  raiseSort = (sortOn) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === sortOn) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = sortOn;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const sortColumn = this.props.sortColumn;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <FontAwesomeIcon icon={faSortUp} />;
    return <FontAwesomeIcon icon={faSortDown} />;
  };

  render() {
    return (
      <TableHeader>
        <TableRow>
          {this.props.columns.map((column) => (
            <TableHead
              onClick={() => this.raiseSort(column.path)}
              key={column.path || column.key}
            >
              {column.label || column.key}
              {column.path ? this.renderSortIcon(column) : ""}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
    );
  }
}

export default DtableHeader;
