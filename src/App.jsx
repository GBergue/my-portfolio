import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import Articles from "./components/Articles/Articles";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Education />
        <Articles />
      </main>
      <Contact />
    </div>
  );
}

export default App;
