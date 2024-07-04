import { Table } from "@/components/ui/table";
import React, { Component } from "react";
import DtableHeader from "./DynamicTableHeader";
import DtableBody from "./DynamicTableBody";

const Dtable = ({ sortColumn, columns, data, onSort }) => {
  //   const { sortColumn, columns, data, onSort } = props;
  return (
    <Table>
      {/* <TableHeader>
          <TableRow>
            <TableHead onClick={() => this.raiseSort("id")}>ID</TableHead>
            <TableHead onClick={() => this.raiseSort("title")}>Title</TableHead>
            <TableHead onClick={() => this.raiseSort("genre.name")}>
              Genre
            </TableHead>
            <TableHead onClick={() => this.raiseSort("rating")}>
              Rating
            </TableHead>
            <TableHead onClick={() => this.raiseSort("boxOffice")}>
              Box Office Price
            </TableHead>
            <TableHead>Likes</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader> */}
      <DtableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <DtableBody columns={columns} data={data} />
    </Table>
  );
};

export default Dtable;
