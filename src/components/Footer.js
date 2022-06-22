import {
  RiLinkedinFill,
  RiMailLine,
  RiCopyrightLine,
  RiGithubLine,
  RiFileList2Line,
} from "react-icons/ri";

import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <section className="footer">
      <div className="icons">
        <SocialIcon
          icon={<RiLinkedinFill />}
          link="https://www.linkedin.com/in/andrew-bernklau-22737a21b/"
          type="linkedin"
          title="LinkedIn"
        />
        <SocialIcon
          icon={<RiMailLine />}
          link="/contact"
          type="mail"
          title="Email"
        />
        <SocialIcon
          icon={<RiGithubLine />}
          link="https://github.com/abernklau1"
          type="github"
          title="GitHub"
        />
        <SocialIcon
          icon={<RiFileList2Line />}
          link="https://docs.google.com/document/d/1JMGF2PX841CKjbVdCYA8x65hpAdeRwTuFjs2l9AZlCg"
          type="resume"
          title="Resume"
        />
      </div>
      <div className="copyright">
        <RiCopyrightLine size={20} />
        <span>2022 Andrew Bernklau</span>
      </div>
    </section>
  );
};

export default Footer;
