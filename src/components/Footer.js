import { RiCopyrightLine } from "react-icons/ri";
import SocialIconContainer from "./SocialIconContainer";

const Footer = () => {
  return (
    <section className="footer">
      <SocialIconContainer />
      <div className="copyright">
        <RiCopyrightLine size={20} />
        <span>2022 Andrew Bernklau</span>
      </div>
    </section>
  );
};

export default Footer;
