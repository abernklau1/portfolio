import { GrDocumentText } from "react-icons/gr";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineCopyrightCircle,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer">
      <div className="icons">
        <AiOutlineLinkedin />
        <AiOutlineMail />
        <AiFillGithub />
        <GrDocumentText />
      </div>
      <div className="copyright">
        <AiOutlineCopyrightCircle /> 2022 Andrew Bernklau
      </div>
    </section>
  );
};

export default Footer;
