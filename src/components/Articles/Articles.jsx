import { useEffect, useState } from "react";
import styles from "./Articles.module.css";
import { Entry } from "../Entry/Entry";

const MEDIUM_PROFILE = "https://medium.com/@bergueeg";
const MEDIUM_RSS_FEED =
  "https://api.allorigins.win/get?url=" +
  encodeURIComponent("https://medium.com/feed/@bergueeg");

const fmtDate = (raw) => {
  const d = new Date(raw);
  return isNaN(d)
    ? ""
    : d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(MEDIUM_RSS_FEED);
        const data = await response.json();
        const xml = new DOMParser().parseFromString(data.contents, "text/xml");

        const items = Array.from(xml.querySelectorAll("item")).map((item) => ({
          title: item.querySelector("title")?.textContent || "Untitled",
          link: item.querySelector("link")?.textContent || MEDIUM_PROFILE,
          pubDate: item.querySelector("pubDate")?.textContent || "",
        }));

        setArticles(items);
      } catch (error) {
        console.error("Could not load articles:", error);
      } finally {
        setLoaded(true);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="section" id="articles">
      <h2 className="sectionHead">writing</h2>
      <p className="sectionNote">Notes from the build, on Medium.</p>

      {articles.map((article, index) => (
        <Entry key={index} date={fmtDate(article.pubDate)}>
          <a
            className={styles.link}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {article.title}
            <span aria-hidden="true">&nbsp;→</span>
          </a>
        </Entry>
      ))}

      {!loaded ? (
        <Entry>
          <span className={styles.pending}>Loading from Medium&hellip;</span>
        </Entry>
      ) : null}

      {loaded && articles.length === 0 ? (
        <Entry>
          <a
            className={styles.link}
            href={MEDIUM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the latest on Medium
            <span aria-hidden="true">&nbsp;→</span>
          </a>
        </Entry>
      ) : null}
    </section>
  );
};

export default Articles;
