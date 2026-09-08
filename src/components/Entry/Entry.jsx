import { useEffect, useRef, useState } from "react";
import styles from "./Entry.module.css";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * One changelog entry: a left meta rail (date + version tag) beside its body.
 * On first scroll into view the version tag "commits" — it sharpens from a
 * loose, blurred state and the row settles up a few pixels. One authored
 * moment, shared by every entry; disabled under prefers-reduced-motion.
 */
export const Entry = ({ date, version, note, children }) => {
  const ref = useRef(null);
  const [committed, setCommitted] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion || committed) return;
    const el = ref.current;
    if (!el) return;

    const commit = () => setCommitted(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          commit();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );
    io.observe(el);
    const fallback = setTimeout(commit, 1400);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [committed]);

  return (
    <article
      ref={ref}
      className={`${styles.entry} ${committed ? styles.committed : styles.pending}`}
    >
      <div className={styles.rail}>
        <span className={styles.commitDot} aria-hidden="true" />
        {date ? <time className={styles.date}>{date}</time> : null}
        {note ? <span className={styles.note}>{note}</span> : null}
        {version ? <span className={styles.version}>{version}</span> : null}
      </div>
      <div className={styles.body}>{children}</div>
    </article>
  );
};
