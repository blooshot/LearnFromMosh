import _ from "lodash";

export function paginateUtil(items, pageNumber, pageSize) {
  const stateIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(stateIndex).take(pageSize).value();
}
