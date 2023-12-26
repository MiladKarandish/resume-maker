import styles from "./main-template.module.scss";

export interface Props {}

const MainTemplate = () => {
  // Links
  interface IContactLinks {
    title: string;
    href: string;
  }
  const contactLinks: IContactLinks[] = [
    {
      title: "miladkaarandish@gmail.com",
      href: "https://miladkaarandish@gmail.com",
    },
    {
      title: "+98 917 685 6577",
      href: "https://miladkaarandish@gmail.com",
    },
    {
      title: "github.com/MiladKarandish",
      href: "https://github.com/MiladKarandish",
    },
    {
      title: "linkedin.com/in/milad-karandish",
      href: "https://www.linkedin.com/in/milad-karandish",
    },
  ];

  // Skills
  interface ISkills {
    title: string;
    items: string[];
  }
  const skills: ISkills[] = [
    {
      title: "Languages",
      items: ["JavaScript", "Typescript"],
    },
    {
      title: "API",
      items: ["REST", "GraphQL"],
    },
  ];

  return (
    <div className={`${styles["_"]}`}>
      <main className={`${styles["container"]}`}>
        <header>
          <h1 className={`${styles["_name"]}`}>Milad Karandish</h1>
          <h3 className={`${styles["_field"]}`}>Front End Developer</h3>
        </header>

        {/* Experient */}
        <section></section>

        {/* Projects */}
      </main>

      {/* Side */}
      <aside className={`${styles["container"]}`}>
        {/* Links */}
        <div className={`${styles["_contact-links"]}`}>
          {contactLinks.map((contact) => (
            <a href={contact.href} target="_blank" key={contact.title}>
              {contact.title}
            </a>
          ))}
        </div>

        {/* Skills */}
        <div className={`${styles["_skills"]}`}>
          <h2 className={`${styles["title"]}`}>Skills</h2>

          <div className={`${styles["sub-container"]}`}>
            {skills.map((skill) => (
              <div>
                <h3 className={`${styles["sub-title"]}`}>{skill.title}</h3>
                {skill.items.map((item, i) => (
                  <span className={`${styles["light-text"]}`}>
                    {item} {i + 1 < skill.items.length && ", "}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MainTemplate;
