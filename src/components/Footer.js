import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineCopyrightCircle,
  AiFillGithub,
  AiOutlineFileText,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer">
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/andrew-bernklau-22737a21b/"
          title="LinkedIn"
        >
          <AiOutlineLinkedin size={36} />
        </a>
        <a href="/contact" title="Email">
          <AiOutlineMail size={36} />
        </a>
        <a href="https://github.com/abernklau1" title="Github">
          <AiFillGithub size={36} />
        </a>
        <a
          href="https://docs.google.com/document/d/1JMGF2PX841CKjbVdCYA8x65hpAdeRwTuFjs2l9AZlCg"
          title="Resume"
        >
          <AiOutlineFileText size={36} />
        </a>
      </div>
      <div className="copyright">
        <AiOutlineCopyrightCircle size={20} />
        <span>2022 Andrew Bernklau</span>
      </div>
    </section>
  );
};

export default Footer;
