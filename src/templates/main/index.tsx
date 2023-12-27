import styles from "./main-template.module.scss";
import Side from "./components/Side";
import Experiences from "./components/Experiences";

const MainTemplate = () => {
  return (
    <div className={`${styles["_"]}`}>
      <main className={`${styles["container"]}`}>
        <header>
          <h1 className={`${styles["_name"]}`}>Milad Karandish</h1>
          <h3 className={`${styles["_field"]}`}>Front End Developer</h3>

          <p className={`${styles["_about-me"]}`}>
            front-end web developer with more than 3 years of experience.
          </p>
        </header>

        {/* Experient */}
        <section>
          <Experiences />
        </section>

        {/* Projects */}
      </main>
      <Side />
    </div>
  );
};

export default MainTemplate;
