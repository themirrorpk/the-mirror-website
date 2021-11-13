import "./Header.css";
import image from "../images/Pages/Blogs.png";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">BLOGS</span>
      </div >
      <img className="headerImg" src={image} alt="" />
    </div>
  );
}