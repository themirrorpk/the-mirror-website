import { Link } from "react-router-dom";
import "./Post.css";
import nextId from "react-id-generator";

export default function Post({ img }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <span className="postTitle">
          <Link to={`/post/${nextId()}`} className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}