import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../foodie logo.png";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("abc"));

root.render(<AppLayout />);
