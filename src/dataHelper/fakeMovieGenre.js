import { func } from "prop-types";

export const genre = [
  {
    id: 1,
    name: "Drama",
    selected: false,
  },
  {
    id: 12,
    name: "Crime",
    selected: false,
  },
  {
    id: 11,
    name: "Action",
    selected: false,
  },
  {
    id: 14,
    name: "Romance",
    selected: false,
  },
  {
    id: 31,
    name: "Adventure",
    selected: false,
  },
  {
    id: 231,
    name: "Sci-Fi",
    selected: false,
  },
  {
    id: 143,
    name: "Fantasy",
    selected: false,
  },
  {
    id: 431,
    name: "Thriller",
    selected: false,
  },
  {
    id: 176,
    name: "War",
    selected: false,
  },
  {
    id: 18,
    name: "Mystery",
    selected: false,
  },
  {
    id: 108,
    name: "History",
    selected: false,
  },
  {
    id: 541,
    name: "Animation",
    selected: false,
  },
];

export function getGenre() {
  return genre.filter((g) => g);
}
export function getGenreJ() {
  return genre.filter((g) => JSON.stringify(g));
}

export function getGenreNames() {
  return genre.map((g) => g.name);
}
