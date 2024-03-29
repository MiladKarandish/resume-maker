import styles from '../../app.module.scss';

const Experiences = () => {
  interface IExperiences {
    title: string;
    at: {
      name: string;
      title: string;
      type: string;
      description: string;
      href: string;
    };
    date: string;
    hilights: string[];
  }
  const experiences: IExperiences[] = [
    {
      title: 'Front End Developer',
      at: {
        name: '@Ragham',
        title: 'Accounting Application',
        type: 'Startup',
        description: `Ragham is an startup company with 10 employes providing an <b>accounting application</b> for Android, Ios and Web with over 10k active users.`,
        href: 'https://www.linkedin.com/company/ragham',
      },
      date: 'Dec 2023, Present',
      hilights: [
        'Led the implementation of Vue.js, Nuxt.js, Next.js, and React, showcasing a profound understanding of these frameworks to create responsive and user-friendly web applications.',

        'Collaborated closely with the backend team to ensure seamless integration between the frontend and backend components, optimizing overall system performance.',

        "Leveraged Tailwind CSS, Pinia, and Redux Toolkit to enhance the app's visual appeal, streamline the user interface, and manage state effectively, contributing to an improved user experience.",

        "Actively engaged with the design team, translating user feedback and preferences into actionable development tasks to enhance the application's usability.",

        'Demonstrated adaptability and proficiency in utilizing Figma for effective communication and collaboration with the design team, resulting in a cohesive and aesthetically pleasing web application.',
      ],
    },
    {
      title: 'Front End Developer',
      at: {
        name: '@Pishgamanasia',
        title: 'Integrated Software Solutions',
        type: 'Established Enterprise',
        description: `Ragham is an startup company with 10 employes providing an <b>accounting application</b> for Android, Ios and Web with over 10k active users.`,
        href: 'https://en.pishgamanasia.com',
      },
      date: 'Oct 2022, Nov 2023 . 1 yr 2 mos',
      hilights: [
        'Teamed up with developers to deliver a seamless user experience using HTML, CSS, Sass, JavaScript, and TypeScript.',

        'Utilized React, Next.js, Redux, React Leaflet, and WebSocket (Socket.io) tobuild scalable and maintainable applications.',

        'Demonstrated strong debugging skills in resolving issues within existingcodebases that utilized Bootstrap and jQuery.',

        'Enhanced system efficiency and upheld coding standards through strategic and effective problem-solving.',

        'Mentored and assisted junior developers, providing guidance and support throughout the development process.',

        'Coordinated closely with the backend development team to optimize processes, improve performance, and enhance overall application efficiency.',
      ],
    },
    {
      title: 'Front End Developer',
      at: {
        name: '@Fortune Web Works',
        title: '',
        type: 'Freelance Partnership',
        description: '',
        href: 'https://fortune-new.vercel.app',
      },
      date: 'May 2020, Oct 2022 . 2 yr 6 mos',
      hilights: [
        'Successfully engaged with diverse team members, including designersand backend developers, to create cohesive and high-quality websites.',

        'Vigorously sought opportunities to expand knowledge and expertise, tackled technical challenges, and found innovative solutions, including working with Vue.js and Nuxt.js.',

        'Cultivated a deep understanding of client needs through direct interaction, ensuring effective communication and a tailored approach to website development.',

        'Enhanced precision in prioritizing pixel-perfect designs, and executed rigorous quality control for seamless user experiences.',
      ],
    },
  ];

  return (
    <div className={`${styles['sections_container']}`}>
      <h2 className={`${styles['title']}`}>Relevant Experience</h2>

      <div className={`${styles['container']}`}>
        {experiences.map(({ title, at, date, hilights }) => (
          <div key={at.title}>
            <div className="flex items-center gap-2">
              <h3 className={`${styles['sub-title']}`}>{title}</h3>

              <div>
                <a href={at.href} target="_blank">
                  {at.name}
                </a>
                <span className="font-bold">, {at.type}</span>
              </div>
            </div>

            <span className={`${styles['light-text']} ${styles['_date']}`}>
              {date}
            </span>

            <p dangerouslySetInnerHTML={{ __html: at.description }}></p>

            <ul>
              {hilights.map((hilight) => (
                <li className={`${styles['light-text']}`} key={hilight}>
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
