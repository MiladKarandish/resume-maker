import Experiences from "./components/Experiences";
import Side from "./components/Side";
import Header from "./components/Header";
import styles from "./app.module.scss";
import Propjects from "./components/Propjects";

function App() {
  return (
    <div className={`${styles["_"]}`}>
      <main className={`${styles["container"]}`}>
        {/* Header */}
        <header>
          <Header />
        </header>

        {/* Experient */}
        <section>
          <Experiences />
        </section>

        {/* Projects */}
        <section>
          <Propjects />
        </section>
      </main>

      <Side />
    </div>
  );
}

export default App;
