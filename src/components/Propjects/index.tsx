import styles from "../../app.module.scss";

const Propjects = () => {
  interface IProjects {
    title: string;
    source: string;
    demo: string;
    hilights: string[];
  }
  const projects: IProjects[] = [
    {
      title: "Front End Developer",
      source: "",
      demo: "",
      hilights: [
        "Teamed up with developers to deliver a seamless user experience using HTML, CSS, Sass, JavaScript, and TypeScript.",
        "Utilized React, Next.js, Redux, React Leaflet, and WebSocket (Socket.io) tobuild scalable and maintainable applications",
        "Demonstrated strong debugging skills in resolving issues within existingcodebases that utilized Bootstrap and jQuery.",
        "Improved performance and maintained code standards through effectiveproblem solving",
        "Mentored and assisted junior developers, providing guidance and support throughout the development process",
        "Collaborated closely with the backend development team to optimize processes, improve performance, and enhance overall application efficiency.",
      ],
    },
  ];

  return (
    <div className={`${styles["sections_container"]}`}>
      <h2 className={`${styles["title"]}`}>Projects</h2>

      <div className={`${styles["container"]}`}>
        {projects.map(({ title, source, demo, hilights }) => (
          <div key={title}>
            <div className={`${styles["_projects-title"]}`}>
              <h3 className={`${styles["sub-title"]}`}>{title}</h3>

              <div>
                <a href={source} target="_blank">
                  Github
                </a>
                <span>/</span>
                <a href={demo} target="_blank">
                  Demo
                </a>
              </div>
            </div>

            <ul>
              {hilights.map((hilight) => (
                <li className={`${styles["light-text"]}`} key={hilight}>
                  {hilight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Propjects;
