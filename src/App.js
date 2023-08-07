import styles from "./App.module.css";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import LinksContact from "./components/LinksContact/LinksContact";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main id="main">
        <Main />
      </main>
      <LinksContact />
      <div className={styles.backgroundSections}>
        <section className={styles.section1} >
          <SectionOne/>
        </section>
        <section className={styles.section2}>
          <SectionTwo />
        </section>
        <section className={styles.section3} id="section3">
          <SectionThree />
        </section>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
