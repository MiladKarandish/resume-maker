import styles from "./main-template.module.scss";

export interface Props {}

const MainTemplate = () => {
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

  return (
    <div className={`${styles["_"]}`}>
      <main>
        <header>
          <h1 className={`${styles["_name"]}`}>Milad Karandish</h1>
          <h3 className={`${styles["_field"]}`}>Front End Developer</h3>
        </header>

        {/* Experient */}
        <section></section>

        {/* Projects */}
      </main>

      {/* Side */}
      <aside>
        {/* Links */}
        <div className={`${styles["_contact-links"]}`}>
          {contactLinks.map((contact) => (
            <a href={contact.href} target="_blank" key={contact.title}>
              {contact.title}
            </a>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default MainTemplate;
