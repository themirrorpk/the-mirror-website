import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({ img, title, id }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <span className="postTitle">
          <Link to={`/${id}`} className="link">
            {title}
          </Link>
        </span>
        <hr />
      </div>
      {/* <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p> */}
    </div>
  );
}
