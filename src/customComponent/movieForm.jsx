import React from "react";
import { useLocation, useMatches } from "react-router-dom";
import queryString from "query-string";

const MovieForm = () => {
  const location = useLocation();
  const matches = useMatches();
  const result = queryString.parseUrl(location.search);
  /*   const result = JSON.stringify(queryString.parseUrl(location.search));
  const { query } = JSON.parse(result);
  const { id, title, genre, boxOffice, rating } = query; */
  //   console.log(matches[1].params.id);
  return (
    <div>
      I in movie form page Id: {matches[1].params.id}
      <br></br>
    </div>
  );
};

export default MovieForm;
