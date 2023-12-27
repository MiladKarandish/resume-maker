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
    items?: string[];
  }
  const skills: ISkills[] = [
    {
      title: "Languages",
      items: [
        "React,",
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
        <div className={`${styles["_skills"]}`}>
          <h2 className={`${styles["title"]}`}>Skills</h2>

          <div className={`${styles["sub-container"]}`}>
            {skills.map((skill) => (
              <div>
                <h3 className={`${styles["sub-title"]}`}>{skill.title}</h3>
                {skill.items &&
                  skill.items.map((item, i) => (
                    <span className={`${styles["light-text"]}`}>
                      {item} {i + 1 < skill.items!.length && ", "}
                    </span>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className={`${styles["_languages"]}`}>
          <h2 className={`${styles["title"]}`}>Languages</h2>

          <div className={`${styles["sub-container"]}`}>
            {languages.map((skill) => (
              <div>
                <h3 className={`${styles["sub-title"]}`}>{skill.title}</h3>
                <span className={`${styles["light-text"]}`}>{skill.items}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={`${styles["_education"]}`}>
          <h2 className={`${styles["title"]}`}>Education</h2>

          <div className={`${styles["sub-container"]}`}>
            <span className={`${styles["light-text"]}`}>{education.title}</span>
            <span className={`${styles["light-text"]}`}>{education.date}</span>
          </div>
        </div>

        {/* Address */}
        <div className={`${styles["_address"]}`}>
          <h2 className={`${styles["title"]}`}>Address</h2>

          <div className={`${styles["sub-container"]}`}>
            <span className={`${styles["light-text"]}`}>{address.title}</span>
            <span className={`${styles["light-text"]}`}>{address.extra}</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MainTemplate;
