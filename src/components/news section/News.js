import axios from "axios";
import {useEffect ,useState} from "react";
import Feed from "./Feed";
import "./news.css";
import {HiOutlineSearch} from 'react-icons/hi';

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
  <div className="newsContainer">
    <div className="head__text">
        <h1>Eco News</h1>
        <a className="link" href="/home">Return to Home</a>
        <div className="searchBar">
            <input type="text" placeholder="Search Eco News..." />
            <HiOutlineSearch className="icon"/>
        </div>
    </div>
    <div className="articles"> 
      {articles.map((item, i) =>
        <Feed 
        key = {i}
        title = {item.item.title}
        link = {item.item.link}
        date = {item.item.pubDate}
        content = {item.item.contentSnippet}
        />
      )}
    </div>
  </div>
  );
}

export default News;
