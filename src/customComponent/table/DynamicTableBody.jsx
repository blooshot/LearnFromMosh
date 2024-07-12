import React, { Component } from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import queryString from "query-string";
import _ from "lodash";

class DtableBody extends Component {
  renderCell = (item, column) => {
    // console.log("rcDATA>>", item);
    // console.log("rcCOL>>", column);
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  createkey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  /* extractDataWithLodash = (sourceObject, comparisonArray) => {
    const extractedData = {};

    // Loop through the comparison array
    for (const comparisonObject of comparisonArray) {
      const comparisonKey = comparisonObject.path; // Assuming "key" property in comparison objects
      const targetKey = comparisonKey; // Default: match source and comparison key names

      // Optional transformation of comparisonKey
      // if (comparisonObject.transformKey) {
      //   targetKey = comparisonObject.transformKey(comparisonKey);
      // }

      if (sourceObject.hasOwnProperty(targetKey)) {
        extractedData[comparisonKey] = sourceObject[targetKey];
      }
    }
    console.log("==>>", extractedData);
    return extractedData;
  }; */

  getDataInQueryParam = (item, columns) => {
    // const extractedData = this.extractDataWithLodash(item, columns);
    /*  const extractedData = {};

    // Loop through the comparison array
    for (const comparisonObject of columns) {
      const comparisonKey = comparisonObject.path; // Assuming "key" property in comparison objects
      const targetKey = comparisonKey; // Default: match source and comparison key names

      if (item.hasOwnProperty(targetKey)) {
        extractedData[targetKey] = item[targetKey];
      }
    }

    console.log(extractedData); */
    /* const person = new Object();
    const sa = columns.map((col, person) => {
      if (col.path) {
        let path1 = col.path;
        let item1 = item[col.path];
        console.log(">>", path1, item1);
      }
    }); */
    // const sdc = _.get(item, columns);
    /*  console.log("col", columns);
      console.log("item", item); */
    // console.log("==============", extractedData);
    // const stringified = queryString.stringify(item);
    // return stringified;
  };

  render() {
    const { data, columns } = this.props;

    // console.log("dtbDATA>>", data);
    // console.log("dtbCOL>>", columns);
    return (
      <TableBody>
        {data.map((item) => (
          <TableRow key={item._id}>
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
