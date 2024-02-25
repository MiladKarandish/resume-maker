import styles from "../../app.module.scss";

const Header = () => {
  return (
    <>
      <h1 className={`${styles["_name"]}`}>Milad Karandish</h1>
      <h3 className={`${styles["_field"]}`}>Front End Developer</h3>

      {/* front-end web developer with nearly 4 years of experience. */}
      <p className={`${styles["_about-me"]}`}>
        Experienced Frontend Developer proficient in React, Next.js, Vue, Nuxt,
        and TypeScript. Skilled in crafting intuitive user interfaces to enhance
        user experience. Dedicated team player with a passion for staying
        updated with the latest web development trends and technologies.
      </p>
    </>
  );
};

export default Header;
