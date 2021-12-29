import Post from "./Post";
import "./Posts.css";


export default function Posts() {
  return (
    <div className="posts">
      <Post
        img={
          "https://im.idiva.com/content/2020/Apr/Rajasthan-child-marriage-0-cases-iDiva-2_5ea69be1d2f06.jpg"
        }
        title="Child Marriages in Pakistan"
        id = "ChildMarriage"
      />
      <Post
        img={
          "http://blogs.dunyanews.tv/wp-content/uploads/2021/03/aurat-march.jpg"
        }
        title="From Zainab till Meesha Shafi - The Rise of #MeToo"
        id = "MeToo"
      />
      <Post
        img={
          "https://kursiv.kz/sites/default/files/styles/_xlarge_1280x720/public/2021-08/image.jpg?itok=sAprLRcb"
        }
        title="Threats to Children"
        id = "ThreatsChildren"
      />
      <Post
        img={
          "https://alertpak.files.wordpress.com/2011/03/peshawarpolice-reut543-11.jpg?w=584"
        }
        title="Pakistani Policemen and the Case of Failed Protection"
        id = "PakPolice"
      />
      <Post
        img={
          "https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/75392805_1639346192867839_1952570232446910464_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeHCxV0I45o6ozhw6LG7pys3q3hmV01hDYqreGZXTWENipIyJ-VGtZRSNX85PKwYF8c7LB8AL7OSOxXWJyaNTYb7&_nc_ohc=USUVsESSOWYAX9mi4E4&_nc_ht=scontent.fkhi17-1.fna&oh=00_AT_ZH4KjoifcF-EOFDaYaLTI3kcCADEVJaOglTKM0dKaZA&oe=61F19355"
        }
        title="Khalil ur Rehman Qamar: The face of blatant misogyny"
        id = "Misogyny"
      />

      
      </div>
  );
}
