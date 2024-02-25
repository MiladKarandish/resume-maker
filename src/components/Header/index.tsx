import styles from "../../app.module.scss";

const Header = () => {
  return (
    <>
      <h1 className={`${styles["_name"]}`}>Milad Karandish</h1>
      <h3 className={`${styles["_field"]}`}>Front End Developer</h3>

      {/* front-end web developer with nearly 4 years of experience. */}
      <p className={`${styles["_about-me"]}`}>
        Specializing in React, Next.js, Vue, Nuxt, and TypeScript. Dedicated to
        crafting intuitive user interfaces for enhanced user experience
      </p>
    </>
  );
};

export default Header;
