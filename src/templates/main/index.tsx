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
        <div>
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
