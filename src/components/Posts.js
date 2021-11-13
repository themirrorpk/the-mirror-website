import Post from "./Post";
import "./Posts.css";
// import img from "../../public/images/childmarriage.jpeg";
export default function Posts() {
  return (
    <div className="posts">
      <Post
        img={
          "https://im.idiva.com/content/2020/Apr/Rajasthan-child-marriage-0-cases-iDiva-2_5ea69be1d2f06.jpg"
        }
        title="Child Marriages in Pakistan"
      />
      <Post
        img={
          "http://blogs.dunyanews.tv/wp-content/uploads/2021/03/aurat-march.jpg"
        }
        title="From Zainab till Meesha Shafi - The Rise of #MeToo"
      />
      <Post
        img={
          "https://kursiv.kz/sites/default/files/styles/_xlarge_1280x720/public/2021-08/image.jpg?itok=sAprLRcb"
        }
        title="Threats to Children"
      />
      <Post
        img={
          "https://alertpak.files.wordpress.com/2011/03/peshawarpolice-reut543-11.jpg?w=584"
        }
        title="Pakistani Policemen and the Case of Failed Protection"
      />
      
      </div>
  );
}
