import styles from "../../app.module.scss";

const Header = () => {
  return (
    <>
      <h1 className={`${styles["_name"]}`}>Milad Karandish</h1>
      <h3 className={`${styles["_field"]}`}>Front End Developer</h3>

      {/* front-end web developer with nearly 4 years of experience. */}
      <p className={`${styles["_about-me"]}`}>
        Frontend Developer skilled in JavaScript, React, and Next.js, with
        experience in Redux, Node.js, and CSS frameworks. Proficient in GraphQL,
        REST APIs, and MongoDB. Focused on UX/UI optimization and SEO best
        practices.
      </p>
    </>
  );
};

export default Header;
