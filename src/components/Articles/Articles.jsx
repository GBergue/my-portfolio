import { useEffect, useState } from "react";
import styles from "./Articles.module.css";

const MEDIUM_RSS_FEED = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://medium.com/feed/@bergueeg");

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(MEDIUM_RSS_FEED);
        const data = await response.json();
        
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        
        const items = Array.from(xml.querySelectorAll("item")).map((item) => {
         const contentEncoded = item.getElementsByTagName("content:encoded")[0]?.textContent || "";

          const imgMatch = contentEncoded.match(/<img.*?src=["'](.*?)["']/);
        
          const imageUrl = imgMatch ? imgMatch[1] : "https://via.placeholder.com/150";

          return {
            title: item.querySelector("title")?.textContent || "Sem título",
            link: item.querySelector("link")?.textContent || "#",
            pubDate: item.querySelector("pubDate")?.textContent || "Data desconhecida",
            imageUrl,
          };
        });

        setArticles(items);
      } catch (error) {
        console.error("Erro ao buscar artigos:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className={styles.container} id="articles">
      <h2 className={styles.title}>Articles</h2>
      <div className={styles.content}>
        {articles.map((article, index) => (
          <div key={index} className={styles.articleCard}>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.articleLink}
            >
              <div className={styles.articleRow}>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className={styles.articleImage}
                />
                <div>
                  <h3>{article.title}</h3>
                  <p>{new Date(article.pubDate).toLocaleDateString()}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
