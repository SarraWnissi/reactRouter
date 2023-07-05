import "./App.css";
import MoviesList from "./components/MoviesList";
import Navigation from "./components/Navigation";
import { moviesInitial } from "./data";
import MovieCarousel from "./components/MovieCarousel";
import { useState } from "react";
import ReactDOM from "react-dom";
import FilterByRate from "./components/FilterByRate";
import { Routes, Route } from "react-router-dom";
import Series from "./pages/Series";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [movies, setMovies] = useState(moviesInitial);
  const [searchValue, setSearchValue] = useState("");
  const [searchByRating, setSearchByRating] = useState(0);
  return (
    <div className="App">
      <Navigation
        movies={movies}
        setMovies={setMovies}
        setSearchValue={setSearchValue}
      />

      <div className="mt">
        <Routes>
          <Route
            path="/"
            element={<MovieCarousel movies={movies.slice(0, 10)} />}
          />

          <Route
            path="/movies"
            element={
              <MoviesList
                title="All movies"
                movies={movies.filter(
                  (el) =>
                    el.title
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) &&
                    el.rate >= searchByRating
                )}
              />
            }
          />

          <Route path="/series" element={<Series />} />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />

          <Route path="/*" element={<h1>404 Not found</h1>} />
        </Routes>{" "}
      </div>
      {/*    
 
<FilterByRate setSearchByRating={setSearchByRating}/>
<MoviesList title="upcoming movies" movies = {movies.filter ((el)=> el.releaseDate < "May 15, 2006" && el.title.toLowerCase().includes(searchValue.toLowerCase()))}/>
<MoviesList title="latest movies" movies = {movies.filter ((el)=> el.releaseDate > "May 15, 2006" && el.title.toLowerCase().includes(searchValue.toLowerCase()))}/>
<MoviesList title="all movies" movies = {movies.filter ((el)=>el.title.toLowerCase().includes(searchValue.toLowerCase())&& el.rate>=searchByRating)}/>
    
   */}
    </div>
  );
}

export default App;
