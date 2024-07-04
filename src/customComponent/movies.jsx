import React, { Component } from "react";
import { getMovies } from "@/dataHelper/fakeMovies";
import Paginate from "./Paginate";
import { paginateUtil } from "@/dataHelper/paginateUtil";
import "bootstrap/dist/css/bootstrap.min.css";
import { getGenre } from "@/dataHelper/fakeMovieGenre";
import SideGroupList from "./sideListGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

/* No Prop, Only State used simple class component */

class MovieLister extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genre: [],
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genre = [{ id: "", name: "All Genres" }, ...getGenre()];
    this.setState({ movies: getMovies(), genre });
  }

  handleDelete = function (deleteId) {
    // console.log(currentState);
    /* deleteId === 1
      ? currentState.splice(0, 1)
      : currentState.splice(deleteId, 1); */
    /*  console.log(deleteId);
    let currentState = this.state.movies;
    let i = 0;
    currentState.forEach((movie) => {
      if (movie.id === deleteId) {
        currentState.splice(i, 1);
      }
      i++;
    });
    console.log("thI:", i);
    this.setState(currentState); */
  };

  handleDeleteMosh = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    /*  if (movie.like == true) {
      movie.like = false;
    } else {
      movie.like = true;
    } */

    const moviesArr = [...this.state.movies];
    const index = moviesArr.indexOf(movie);
    moviesArr[index] = { ...movie };
    moviesArr[index].like = !moviesArr[index].like;

    /* this.state.movies.map((m)=>{

    }) */
    // console.log(movie);
    this.setState({ movies: moviesArr });
  };

  handlePageChange = (page) => {
    // console.log(page);
    this.setState({ currentPage: page });
  };

  handleGenre = (genre) => {
    /* const genreArr = [...this.state.genre];
    const index = genreArr.indexOf(genre);
    genreArr[index] = { ...genre };
    genreArr[index].selected = !genreArr[index].selected;
    this.setState({ genre: genreArr }); */
    this.setState({ seletedGenre: genre, currentPage: 1 });
    // console.log(genre);
  };

  handlMovieSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { pageSize, currentPage, movies, seletedGenre, sortColumn } =
      this.state;

    const filterMovies =
      seletedGenre && seletedGenre.id
        ? movies.filter((m) => {
            /* m.genre.forEach((gen) => {
          if (gen == seletedGenre.name) {
            return;
          }
        }); */
            for (let gen of m.genre) {
              // code block to be executed
              if (gen == seletedGenre.name) {
                return m;
              }
            }
            // console.log(m.genre.map((mg) => mg == seletedGenre.name));
          })
        : movies;

    const sorted = _.orderBy(
      filterMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    /*  console.log(sortColumn); */
    const PaginatedMovies = paginateUtil(sorted, currentPage, pageSize);
    // const PaginatedMovies = paginateUtil(movies, currentPage, pageSize);

    return { Movies: PaginatedMovies, totalCount: filterMovies.length };
  };

  render() {
    const { length: count } = this.state.movies; //GIVING ALIAS NAME count TO LENGTH() METHOD OF MOVIES ARRAY( destructring )
    const { pageSize, currentPage, movies, genre, seletedGenre, sortColumn } =
      this.state;
    const { totalCount, Movies } = this.getPagedData();

    /* var MvoeGenre = [];
    movies.map((movie) => {
      MvoeGenre.push(movie.genre);
    });
    let fuMo = [...new Set(MvoeGenre.flat())];
    console.log(getGenre()); */
    /* console.log(PaginatedMovies); */

    return (
      <div className="container">
        {count == 0 ? (
          <h1>No More Movies Available</h1>
        ) : (
          <h1>Here are total {totalCount} Movies</h1>
        )}
        <div className="row">
          <div className="col-3">
            {/* {genre.map((genre) => ( */}
            <SideGroupList
              /* key={genre} */
              genre={genre}
              onSeletGenre={this.handleGenre}
              selectedGenre={seletedGenre}
              textProperty="name"
              valueProperty="id"
            />
            {/* ))} */}
          </div>

          <div className="col-9">
            <MoviesTable
              moviesList={Movies}
              likeHandler={this.handleLike}
              deleteHandler={this.handleDeleteMosh}
              onSort={this.handlMovieSort}
              sortColumn={sortColumn}
            />
            <Paginate
              itemCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieLister;
