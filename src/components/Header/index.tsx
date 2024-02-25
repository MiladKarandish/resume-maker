import styles from "../../app.module.scss";

const Header = () => {
  return (
    <>
      <h1 className={`${styles["_name"]}`}>Milad Karandish</h1>
      <h3 className={`${styles["_field"]}`}>Front End Developer</h3>

      {/* front-end web developer with nearly 4 years of experience. */}
      <p className={`${styles["_about-me"]}`}>
        Experienced Frontend Developer proficient in JavaScript and TypeScript,
        with a strong foundation in React and Next.js frameworks. Skilled in
        Redux, Node.js, and various libraries such as jQuery and Express.js.
        Proficient in modern CSS methodologies including Sass, Bootstrap, and
        Tailwind CSS. Well-versed in GraphQL and REST APIs, MongoDB, and CMS
        platforms like Contentful and Strapi. Demonstrated ability in optimizing
        UX/UI, implementing SEO best practices, and adhering to industry
        standards. Committed to continuous learning and staying updated with the
        latest technologies.
      </p>
    </>
  );
};

export default Header;
