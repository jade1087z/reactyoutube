import React from "react";
import { Link, useLocation } from "react-router-dom";

import { menuText, keywordText } from "../../data/header";

const Menu = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <nav className="header__menu">
            <ul>
                {menuText.map((menu, key) => (
                    <li
                        key={key}
                        className={
                            location.pathname === menu.src ? "active" : ""
                        }
                    >
                        <Link to={menu.src}>
                            {menu.icon} {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul>
                {keywordText.map((menu, key) => (
                    <li
                        key={key}
                        className={
                            decodeURIComponent(location.pathname) === menu.src
                                ? "active"
                                : ""
                        }
                    >
                        <Link to={menu.src}>
                            {menu.icon} {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
