import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import "./Blogs.css";

import { useLocation } from "react-router";
import Header from "../components/Header";
import Posts from "../components/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";

export default function Blogs() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      {/* <h1 className="blogs"> BLOGS </h1> */}
      <Posts />

      <Footer />
    </>
  );
}
