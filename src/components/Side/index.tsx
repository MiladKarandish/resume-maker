import styles from "../../app.module.scss";

const Side = () => {
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
    items?: string[];
  }
  const skills: ISkills[] = [
    {
      title: "Languages",
      items: [
        "React",
        "Next.js(SSR, SSG, ISR)",
        "Vue.js",
        "Nuxt.js",
        "Redux",
        "jQuery",
        "Node.js",
        "Express.js",
        "Sass",
        "Bootstrap",
        "PostCSS",
        "MaterialUI",
        "TailwindCSS",
      ],
    },
    {
      title: "Libraries & Frameworks",
      items: ["JavaScript", "Typescript"],
    },
    {
      title: "API",
      items: ["REST", "GraphQL"],
    },
    {
      title: "Databases",
      items: ["MongoDB"],
    },
    {
      title: "CMS",
      items: ["Strapi", "Contentful"],
    },
    {
      title: "Excellent understanding of UX and UI, SEO and best practices",
    },
  ];

  // Languages
  interface ILanguage {
    title: string;
    items: string;
  }
  const languages: ILanguage[] = [
    {
      title: "Persian",
      items: "Native",
    },
    {
      title: "English",
      items: "Conversational",
    },
  ];

  // Education
  interface IEducation {
    title: string;
    date: string;
  }
  const education: IEducation = {
    title: "Diploma, Electronic Engineering",
    date: "Sept 2017, Jun 2020",
  };

  // Address
  interface IAddress {
    title: string;
    extra: string;
  }
  const address: IAddress = {
    title: "Shiraz, Iran",
    extra: "open to remote work",
  };

  return (
    <aside className={`${styles["_aside"]} ${styles["container"]}`}>
      {/* Links */}
      <div className={`${styles["_contact-links"]}`}>
        {contactLinks.map((contact) => (
          <a href={contact.href} target="_blank" key={contact.title}>
            {contact.title}
          </a>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h2 className={`${styles["title"]}`}>Skills</h2>

        <div className={`${styles["sub-container"]}`}>
          {skills.map((skill) => (
            <div key={skill.title}>
              <h3
                className={`${styles["sub-title"]}`}
                style={{ marginBottom: "7px" }}
              >
                {skill.title}
              </h3>
              <div className={`${styles["_skill-items"]}`}>
                {skill.items &&
                  skill.items.map((item, i) => (
                    <span key={item} className={`${styles["light-text"]}`}>
                      {item} {i + 1 < skill.items!.length && ", "}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <h2 className={`${styles["title"]}`}>Languages</h2>

        <div className={`${styles["sub-container"]}`}>
          {languages.map((skill) => (
            <div key={skill.title}>
              <h3 className={`${styles["sub-title"]}`}>{skill.title}</h3>
              <span className={`${styles["light-text"]}`}>{skill.items}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className={`${styles["title"]}`}>Education</h2>

        <p className={`${styles["light-text"]}`}>{education.title}</p>
        <p className={`${styles["light-text"]}`}>{education.date}</p>
      </div>

      {/* Address */}
      <div>
        <h2 className={`${styles["title"]}`}>Address</h2>

        <p className={`${styles["light-text"]}`}>{address.title}</p>
        <p className={`${styles["light-text"]}`}>{address.extra}</p>
      </div>
    </aside>
  );
};

export default Side;
