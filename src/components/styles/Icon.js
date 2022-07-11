import styled from "styled-components";

const Icon = styled.section.attrs((props) => ({
  color: props.color || "#620099",
  iconColor: props.color === "white" ? "black" : "white",
}))`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  color: #b3b3b3;
  border-radius: 50%;
  outline: 2px solid #b3b3b3;
  transition-property: outline-offset, outline-color, background-color;
  transition-duration: 0.25s;

  &:hover {
    outline-offset: 4px;
    background-color: ${(props) => props.color};
    outline-color: ${(props) => props.color};
    color: ${(props) => props.iconColor};
  }
`;

export default Icon;
