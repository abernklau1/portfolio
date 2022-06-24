import Icon from "./styles/Icon";

const LinkIcon = ({ icon, link, color, title }) => {
  return (
    <a
      href={link}
      target={link === "/contact" ? "_self" : "_blank"}
      rel="noreferrer"
      title={title}
    >
      <Icon color={color}>{icon}</Icon>
    </a>
  );
};

export default LinkIcon;
