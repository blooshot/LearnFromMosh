import React, { Component } from "react";
import { getMovies } from "@/dataHelper/fakeMovies";
import Paginate from "./Paginate";
import { paginateUtil } from "@/dataHelper/paginateUtil";
import { getGenre } from "@/dataHelper/fakeMovieGenre";
import SideGroupList from "./sideListGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link, Outlet } from "react-router-dom";

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
    const moviesArr = [...this.state.movies];
    const index = moviesArr.indexOf(movie);
    moviesArr[index] = { ...movie };
    moviesArr[index].like = !moviesArr[index].like;

    this.setState({ movies: moviesArr });
  };

  handlePageChange = (page) => {
    // console.log(page);
    this.setState({ currentPage: page });
  };

  handleGenre = (genre) => {
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

    const PaginatedMovies = paginateUtil(sorted, currentPage, pageSize);

    return { Movies: PaginatedMovies, totalCount: filterMovies.length };
  };

  handleOnSearch = ({ currentTarget: input }) => {
    const movies = this.state.movies;
    const filtered = movies.filter((m) =>
      m.title.toLowerCase().startsWith(input.value.toLowerCase())
    );
    let finalMvo = movies;
    // console.log(filtered  );
    if (filtered) {
      finalMvo = filtered;
    }
    this.setState({ seletedGenre: null, currentPage: 1, movies: finalMvo });
  };

  render() {
    const { length: count } = this.state.movies; //GIVING ALIAS NAME count TO LENGTH() METHOD OF MOVIES ARRAY( destructring )
    const { pageSize, currentPage, movies, genre, seletedGenre, sortColumn } =
      this.state;
    const { totalCount, Movies } = this.getPagedData();
    return (
      <div>
        <div className="row">
          <div className="justify-right">
            {count == 0 ? (
              <h1 className="py-3">
                No Morconsole.log(input.value);e Movies Available
              </h1>
            ) : (
              <h1 className="py-3 text-center h2 border-2 border-lime-400">
                Here are total {totalCount} Movies
              </h1>
            )}
            <button className="btn btn-primary justify-content-end">
              <Link to="/movies/new">Add New Movie</Link>
            </button>
            <div className="py3">
              <input
                className="form-control me-2"
                type="search"
                name="searchmovies"
                placeholder="Search Movies"
                aria-label="Search"
                onChange={this.handleOnSearch}
              />
            </div>
          </div>
          <div className="col-3">
            <SideGroupList
              genre={genre}
              onSeletGenre={this.handleGenre}
              selectedGenre={seletedGenre}
              textProperty="name"
              valueProperty="id"
            />
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
