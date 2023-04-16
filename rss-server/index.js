import cors from "cors";
import express from "express";
import RSSParser from "rss-parser";

const feedURLs = [
    "https://yaleclimateconnections.org/feed/",

  ];

  /*"https://rss2.feedspot.com/https://www.climatelinks.org/blog?context=3710842201",
  "https://www.climategen.org/feed/",
  "https://rss2.feedspot.com/https://climate.nasa.gov/blog/",
  "https://blogs.shell.com/feed/",
  */
  
  const parser = new RSSParser();
  const feedsPromise = Promise.all(feedURLs.map((url) => parser.parseURL(url)));

let articles = [];


let app = express();
app.use(cors());

app.get("/", async (_req, res, next) => {
    try {
      res.send(
        (await feedsPromise).flatMap(({ items }) =>
          items.map((item) => ({ item }))
        )
      );
    } catch (err) {
      next(err); // pass any errors to the error handler
    }
  });

const server = app.listen("4000", () => {
    console.log("App is listening at http://localhost:4000");
})

export default server;