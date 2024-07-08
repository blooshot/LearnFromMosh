import React, { Component } from "react";
import { redirect, useLocation, useMatches } from "react-router-dom";
import { getMovies, getMovieById, saveMovie } from "@/dataHelper/fakeMovies";
import {
  getGenre,
  getGenreNames,
  getGenreJ,
} from "@/dataHelper/fakeMovieGenre";
import queryString from "query-string";
import Joi from "joi-browser";
import MasterForm from "./common/MasterForm";

class MovieForm extends MasterForm {
  state = {
    data: { title: "", genreID: "", rating: "", boxOffice: "" },
    errors: {},
    genre: [],
  };

  componentDidMount() {
    const genre = getGenre();
    this.setState({ genre });
  }

  schema = {
    title: Joi.string().max(50).required().label("Movie Title"),
    genreID: Joi.string().max(15).required().label("Movie GenreID"),
    // genre: Joi.any()
    //   .valid(this.retStatewa())
    //   .custom((value, helper) => {
    //     console.log("cus", value, helper);
    //     const found = this.retStatewa().find(
    //       (option) => option.value === value
    //     );
    //     if (!found) {
    //       return helper.error("Invalid selection");
    //     }
    //     return value;
    //   })
    //   .required()
    //   .label("Movie Genre"),
    rating: Joi.number()
      .integer()
      .min(1)
      .max(5)
      .required()
      .label("Movie Rating"),
    boxOffice: Joi.string().required().label("Movie Box Office Price"),
  };

  doSubmit = () => {
    const savedDATa = saveMovie(this.state.data);
    redirect("/movies");
    //call the server
    console.log("submitted", savedDATa);
  };

  mapToViewModel(movie) {
    return {
      id: movie.id,
      title: movie.title,
      genreID: movie.genre.id,
      rating: movie.rating,
      boxOffice: movie.boxOffice,
    };
  }

  // console.log(movie);
  render() {
    // console.log("GN", getGenreNames());

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <form onSubmit={this.handleSubmit}>
              {this.renderInputField("title", "Movie Title")}
              {this.renderInputSelect(
                "genreID",
                "Movie GenreID",
                this.state.genre
              )}
              {/* {this.renderInputOption("genreID", "Movie Genre")} */}
              {this.renderInputField("rating", "Movie Rating")}
              {this.renderInputField("boxOffice", "Movie Box Office Price")}
              {this.renderButton("Save Movie")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieForm;

// const MovieForm = () => {
//   const location = useLocation();
//   const matches = useMatches();
//   const result = queryString.parseUrl(location.search);
//   const movie = getMovieById(matches[1].params.id);
//   console.log(!matches);
//   /*   const result = JSON.stringify(queryString.parseUrl(location.search));
//   const { query } = JSON.parse(result);
//   const { id, title, genre, boxOffice, rating } = query; */
//   //   console.log(matches[1].params.id);
//   return (
//     <div>
//       I in movie form page Id: {matches[1].params.id}
//       <br></br>
//     </div>
//   );
// };

// export default MovieForm;
