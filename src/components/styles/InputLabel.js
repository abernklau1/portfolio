import styled from "styled-components";

const InputLabel = styled.label.attrs((props) => ({
  for: props.name,
  value: props.value,
}))`
  content: ${(props) => props.name};
`;

export default InputLabel;
