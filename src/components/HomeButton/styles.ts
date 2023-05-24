import styled from "styled-components"
import { buttonBlue } from "../../styles/colors"

const Button = styled.button`
  position: absolute;
  width: 55px;
  height: 55px;
  left: 25px;
  top: 25px;

  background-color: ${buttonBlue};
  border-radius: 50px;
  outline: 0;
  border: 0;

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }

  svg {
    width: 67.5%;
  }
`

export default Button
