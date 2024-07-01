import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddtoWatchList = (movieObj) => {
    let updatedWatchlist = [...watchlist, movieObj];
    setWatchlist(updatedWatchlist);
    localStorage.setItem("movies", JSON.stringify(updatedWatchlist));
    console.log(updatedWatchlist);
  };



  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('movies')
    if(!moviesFromLocalStorage){
      return 
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
} , [])

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies handleAddtoWatchList={handleAddtoWatchList} watchlist={watchlist} />
              </>
            }
          />

          <Route path="/WatchList" element={<WatchList watchList={watchlist} setWatchList={setWatchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
