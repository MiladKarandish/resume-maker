import Experiences from "../../components/Experiences";
import Header from "../../components/Header";
import Propjects from "../../components/Propjects";
import Side from "../../components/Side";
import styles from "../../app.module.scss";

const Home = () => {
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
};

export default Home;
