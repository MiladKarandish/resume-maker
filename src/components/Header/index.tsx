import styles from "../../app.module.scss";

const Header = () => {
  return (
    <>
      <h1 className={`${styles["_name"]}`}>Milad Karandish</h1>
      <h3 className={`${styles["_field"]}`}>Front End Developer</h3>

      {/* front-end web developer with nearly 4 years of experience. */}
      <p className={`${styles["_about-me"]}`}>
        Skilled Frontend Web Developer with nearly 4 years of experience
        specializing in JavaScript, React, and Next.js. Proficient in Redux,
        Node.js, and various CSS frameworks. Experienced in building responsive
        and user-friendly web applications. Strong understanding of frontend
        development best practices and trends.
      </p>
    </>
  );
};

export default Header;
