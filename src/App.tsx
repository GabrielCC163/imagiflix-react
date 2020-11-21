import React from "react";

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="bg-black text-white m-auto antialised font-sans">
      <Hero />
      <NavBar />
    </div>
  );
};

export default App;
