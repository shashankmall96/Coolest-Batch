import React from "react";
import Logo from "../movieLogo.jpg";

function NavBar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <img className="w-[50px] rounded-full" src={Logo} />
      <a href="/" className="text-blue-500 text-3xl font-bold">
        Movies
      </a>
      <a href="/Watchlist" className="text-blue-500 text-3xl font-bold">
        WatchList
      </a>
    </div>
  );
}

export default NavBar;
