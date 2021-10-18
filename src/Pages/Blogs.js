import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import "./Blogs.css";

// export default function Blogs() {
//   return(
//     <>
//   <h1 className="blogs"> BLOGS </h1>

//   <Footer />
//   </>
//   );
// }
import { useLocation } from "react-router";
// import Header from "../../components/header/Header";
import Posts from "../components/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";

export default function Blogs() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1 className="blogs"> BLOGS </h1>
      <Posts />

      <Footer />
    </>
  );
}
