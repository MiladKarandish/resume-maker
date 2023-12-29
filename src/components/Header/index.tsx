import styles from "../../app.module.scss";

const Header = () => {
  return (
    <>
      <h1 className={`${styles["_name"]}`}>Milad Karandish</h1>
      <h3 className={`${styles["_field"]}`}>Front End Developer</h3>

      <p className={`${styles["_about-me"]}`}>
        front-end web developer with more than 3 years of experience.
      </p>
    </>
  );
};

export default Header;
