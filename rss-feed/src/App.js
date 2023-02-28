import axios from "axios";
import { useEffect, useState } from "react";

import Feed from './Feed'

function App() {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/")
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArticles();
  }, [])

  console.log(articles);
  return (
    <>
      <h1 className="text-xl font-semibold text-center mt-5">World Space - RSS-Feed</h1>
      <h2 className="text-3xl font-semibold text-center mt-2 mb-4">Eco News</h2>
      {articles.map((item, i) =>
        <Feed 
          key={i}
          title={item.item.title}
          link={item.item.link}
          date={item.item.pubDate}
        />
      )}
    </>
  );
}

export default App;
