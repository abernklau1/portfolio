import ProjectCard from "./ProjectCard";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const webdev = [
  {
    title: "Banking App",
    images: [
      "/images/webdev/bankapp/bank-app-home.png",
      "/images/webdev/bankapp/bank-app-register.png",
      "/images/webdev/bankapp/bank-app-accounts.png",
    ],
    desc: "Very wonderful and beautifully made banking app",
    link: "https://github.com/abernklau1/Banking-App",
    techs: [<SiMongodb />, <SiExpress />, <SiReact />, <SiNodedotjs />],
  },
];

const WebDev = () => {
  return (
    <section className="projects-container">
      {webdev.map((project, index) => {
        return (
          <ProjectCard
            title={project.title}
            images={project.images}
            desc={project.desc}
            link={project.link}
            techs={project.techs}
          />
        );
      })}
    </section>
  );
};

export default WebDev;
