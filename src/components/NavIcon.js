import styled from "styled-components";

const Icon = ({ icon, className, type, title }) => {
  return (
    <section className={`icon icon-${type} ${className}`} title={title}>
      {icon}
    </section>
  );
};

const NavIcon = styled(Icon).attrs((props) => ({
  color: "#666060",
}))`
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
    background-color: ${(props) => props.color};
    outline-color: ${(props) => props.color};
  }
`;

export default NavIcon;
