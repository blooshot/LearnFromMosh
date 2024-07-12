import React, { Component } from "react";
import { Link, redirect, useLocation, useMatches } from "react-router-dom";
// import { getMovies, getMovieById, saveMovie } from "@/dataHelper/fakeMovies";
import { getMovie, saveMovie } from "@/services/movieService";
import { getGenre } from "@/services/genreService";
import queryString from "query-string";
import Joi from "joi-browser";
import MasterForm from "./common/MasterForm";
import { func } from "prop-types";
import { toast } from "react-toastify";

class MovieForm extends MasterForm {
  state = {
    data: {
      title: "",
      genreId: "",
      dailyRentalRate: "",
      numberInStock: "",
    },
    errors: {},
    genre: [],
  };

  async populateGenre() {
    const { data: genre } = await getGenre();
    this.setState({ genre });
  }

  async populateMovies() {
    const searchString = window.location.pathname.split("/");
    // const movieID = this.props.match.params.id;
    const movieID = searchString[searchString.length - 1];
    if (movieID === "new") return;

    const { data: movie } = await getMovie(movieID);
    // console.log("mv", this.mapToViewModel(movie));
    // if (!movie) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(movie) });
  }

  componentDidMount() {
    this.populateGenre();
    this.populateMovies();
  }

  schema = {
    title: Joi.string().max(50).required().label("Movie Title"),
    genreId: Joi.string().required().label("Movie GenreID"),
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
    dailyRentalRate: Joi.number()
      .integer()
      .min(1)
      .max(1000)
      .required()
      .label("Movie rental rates"),
    numberInStock: Joi.number()
      .min(1)
      .max(50)
      .required()
      .label("Movies in stock"),
    _id: Joi.string().alphanum().min(3).max(30).label("Movie ID"),
    // gen: Joi.string().max(50).required().label("Movie gen"),
  };

  doSubmit = async () => {
    // const { data } = await saveMovie(this.state.data);
    // const savedDATa = saveMovie(this.state.data);
    // redirect("/movies");
    //call the server
    try {
      await saveMovie(this.state.data);
      toast.success(<Link to="/movies">Movie Saved Successfully</Link>);
    } catch (ex) {
      toast.error("Abhi kuch to chuda");
    }
    // console.log("submitted", data);
  };

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
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
                "genreId",
                "Movie GenreId",
                this.state.genre
              )}
              {/* {this.renderInputOption("genreID", "Movie Genre")} */}
              {this.renderInputField("numberInStock", "Movie Number In Stocks")}
              {this.renderInputField(
                "dailyRentalRate",
                "Movie Daily Rental Rates"
              )}
              {this.renderButton("Save Movie")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
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

export default MovieForm;
