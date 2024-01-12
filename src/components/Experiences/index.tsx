import styles from "../../app.module.scss";

const Experiences = () => {
  interface IExperiences {
    title: string;
    at: {
      title: string;
      href: string;
    };
    date: string;
    hilights: string[];
  }
  const experiences: IExperiences[] = [
    {
      title: "Front End Developer",
      at: {
        title: "@Pishgamanasia Agency",
        href: "",
      },
      date: "Oct 2022, May 2023",
      hilights: [
        "Teamed up with developers to deliver a seamless user experience using HTML, CSS, Sass, JavaScript, and TypeScript.",
        "Utilized React, Next.js, Redux, React Leaflet, and WebSocket (Socket.io) tobuild scalable and maintainable applications",
        "Demonstrated strong debugging skills in resolving issues within existingcodebases that utilized Bootstrap and jQuery.",
        "Improved performance and maintained code standards through effectiveproblem solving",
        "Mentored and assisted junior developers, providing guidance and support throughout the development process",
        "Collaborated closely with the backend development team to optimize processes, improve performance, and enhance overall application efficiency.",
      ],
    },
    {
      title: "Front End Developer",
      at: {
        title: "@Fortune Web Works Agency",
        href: "",
      },
      date: "Jun 2020, Aug 2022 ______ May 2023, Sept 2023",
      hilights: [
        "Successfully engaged with diverse team members, including designersand backend developers, to create cohesive and high-quality websites.",
        "Actively sought opportunities to expand knowledge and expertise andtackled technical challenges to find innovative solutions",
        "Cultivated a deep understanding of client needs through direct interaction, ensuring effective communication and a tailored approach to website development.",
        "Enhanced precision in prioritizing pixel-perfect designs, and executed rigorous quality control for seamless user experiences.",
      ],
    },
    {
      title: "Front End Developer",
      at: {
        title: "@Ragham Agency",
        href: "",
      },
      date: "Dec 2023, Present",
      hilights: [
        "Successfully engaged with diverse team members, including designersand backend developers, to create cohesive and high-quality websites.",
      ],
    },
  ];

  return (
    <div className={`${styles["sections_container"]}`}>
      <h2 className={`${styles["title"]}`}>Relevant Experience</h2>

      <div className={`${styles["container"]}`}>
        {experiences.map(({ title, at, date, hilights }) => (
          <div key={at.title}>
            <div className={`${styles["_experience-title"]}`}>
              <h3 className={`${styles["sub-title"]}`}>{title}</h3>
              <a href={at.href} target="_blank">
                {at.title}
              </a>
            </div>

            <span className={`${styles["light-text"]} ${styles["_date"]}`}>
              {date}
            </span>

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

export default Experiences;
