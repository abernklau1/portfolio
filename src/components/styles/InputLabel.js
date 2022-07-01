import styled from "styled-components";

const InputLabel = styled.label.attrs((props) => ({
  type: props.type || "text",
  value: props.value,
}))``;

export default InputLabel;
