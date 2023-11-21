import React from "react";
import Logo from "./header/Logo";
import Menu from "./header/Menu";
import Sns from "./header/Sns";
import { useSelector } from "react-redux";
const Header = () => {
    const { isShow } = useSelector((state) => state);

    return (
        <header id="header" role="banner" className={isShow ? "" : "show"}>
            <Logo />
            <Menu />
            <Sns />
        </header>
    );
};

export default Header;
