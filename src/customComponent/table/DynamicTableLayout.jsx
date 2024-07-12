// import { Table } from "@/components/ui/table";
import React, { Component } from "react";
import DtableHeader from "./DynamicTableHeader";
import DtableBody from "./DynamicTableBody";

const Dtable = ({ sortColumn, columns, data, onSort }) => {
  //   const { sortColumn, columns, data, onSort } = props;
  // console.log("dtble->", data);
  return (
    <table>
      <DtableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <DtableBody columns={columns} data={data} />
    </table>
  );
};

export default Dtable;
