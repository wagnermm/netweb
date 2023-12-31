import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Featured from "./Components/Featured/Featured";
import Market from "./Components/Market/Market";
import Products from "./Components/Products/Products";
import Bags from "./Components/Bags/Bag";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <div>
      <Header/>
      <Navbar/>
      <Banner/>
      <Featured/>
      <Market/>
      <Products/>
      <Bags/>
      <Footer/>
    </div>
  )
}

export default App
