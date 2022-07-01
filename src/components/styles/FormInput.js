import styled from "styled-components";

const FormInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  value: props.value,
}))``;

export default FormInput;
