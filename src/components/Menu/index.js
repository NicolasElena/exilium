import React from "react";
import Logo from "../../assets/img/Logo.png";
//import "./Menu.css";
import { LogoImage, MenuWrapper } from "./style.js";
import Button from "../Button";

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <a href="/">
        <LogoImage className="Logo" src={Logo} alt="PathFlix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
