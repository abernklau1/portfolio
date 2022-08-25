import ProjectCard from "./ProjectCard";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const webdev = [
  {
    title: "Banking App",
    images: [
      "images/webdev/bankapp/bank-app-home.png",
      "images/webdev/bankapp/bank-app-register.png",
      "images/webdev/bankapp/bank-app-accounts.png",
    ],
    desc: "A banking application that allows users to create a user account with a main banking account, and loan accounts; with simple CRUD operations to create accounts, read balances, update account balances, and delete accounts.",
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
            key={index}
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
