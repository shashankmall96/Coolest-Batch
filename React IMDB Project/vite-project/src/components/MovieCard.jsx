import React from "react";

function MovieCard({name, posterPath, movieObject, handleAddtoWatchList}) {
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage:
          `URL(https://image.tmdb.org/t/p/original/${posterPath})`,
      }}
    >
      {/* Button */}
      <div onClick={handleAddtoWatchList(movieObject)} className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">&#128525;</div> 

      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
