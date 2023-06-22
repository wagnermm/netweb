import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Featured from "./Components/Featured/Featured";
import Market from "./Components/Market/Market";
import Products from "./Components/Products/Products";

function App() {

  return (
    <div>
      <Header/>
      <Navbar/>
      <Banner/>
      <Featured/>
      <Market/>
      <Products/>
    </div>
  )
}

export default App
