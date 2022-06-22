import styled from "styled-components";

const Icon = ({ icon, link, type, title, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      title={title}
      className={`icon icon-${type} ${className}`}
    >
      {icon}
    </a>
  );
};

const SocialIcon = styled(Icon)`
  &.icon {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 18px;
    color: #fff;
    border-radius: 50%;
    outline: 2px solid #fff;
    transition-property: outline-offset, outline-color, background-color;
    transition-duration: 0.25s;
  }

  &.icon:hover {
    outline-offset: 4px;
  }
`;

export default SocialIcon;
