import { createGlobalStyle } from "styled-components";
import Roboto from "../assets/RobotoVariable.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: "Roboto";
        src: url(${Roboto});
    }
`;
