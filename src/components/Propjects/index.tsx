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
      title: "NFT Indexing Website",
      source: "",
      demo: "",
      hilights: [
        "Developed React-based frontend for NFT platform with wallet integration.",
        "Created custom components to enhance the platform's uniqueness.",
        "Optimized data rendering for smooth performance.",
        "Coordinated extensive API calls, dynamically updating select options based on user input for comprehensive real-time data synchronization.",
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
                <li key={hilight}>{hilight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Propjects;
