import axios from "axios";
import {useEffect ,useState} from "react";
import Feed from "./Feed";
import "./news.css";

function News() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    }catch (error) {
      console.log(error);
    }
  }

  useEffect (()=> {
    getArticles();
  }, [])

  console.log(articles);
  return (
    <>
      <div className="newsContainer">
        <div className="head__text">
              <h1>Eco News</h1>
              <a href="/home">Return to Home</a>
        </div>
        <div className="articles">
            <div className="pics">
              <img src = "https://i0.wp.com/yaleclimateconnections.org/wp-content/uploads/2021/03/YCC-Logo-website-1.png?resize=2048%2C612&ssl=1" />
            </div>
            {articles.map((item, i) =>
            <Feed 
              key = {i}
              title = {item.item.title}
              link = {item.item.link}
              date = {item.item.pubDate}
              picture = {item.item.content}
              content = {item.item.contentSnippet}
            />
            )}
        </div>
      </div>
    </>
  );
}

export default News;
