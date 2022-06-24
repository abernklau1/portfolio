import LinkIcon from "./LinkIcon";
import {
  RiLinkedinFill,
  RiMailLine,
  RiGithubLine,
  RiFileList2Line,
} from "react-icons/ri";

const socials = {
  linkedin: {
    icon: <RiLinkedinFill />,
    link: "https://www.linkedin.com/in/andrew-bernklau-22737a21b/",
    color: "#0077b5",
    title: "LinkedIn",
  },
  mail: {
    icon: <RiMailLine />,
    link: "/contact",
    color: "#ff4f4f",
    title: "Email",
  },
  github: {
    icon: <RiGithubLine />,
    link: "https://github.com/abernklau1",
    color: "#2ea44f",
    title: "GitHub",
  },
  resume: {
    icon: <RiFileList2Line />,
    link: "https://docs.google.com/document/d/1JMGF2PX841CKjbVdCYA8x65hpAdeRwTuFjs2l9AZlCg",
    color: "#2155cd",
    title: "Resume",
  },
};

const SocialIconContainer = () => {
  return (
    <section className="icons">
      {Object.entries(socials).map((social, index) => {
        console.log(social[1].color);
        return (
          <LinkIcon
            key={index}
            icon={social[1].icon}
            color={social[1].color}
            link={social[1].link}
            title={social[1].title}
          />
        );
      })}
    </section>
  );
};

export default SocialIconContainer;
