import React from "react";
import { LuCat } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Logo = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: "TOGGLE_SHOW" });
    };
    return (
        <h1 className="header__logo" onClick={handleClick}>
            <Link to="/" className="box">
                <em className="box">
                    <LuCat />
                </em>
                <span>
                    FESSION
                    <br />
                    YOUTUBER
                </span>
            </Link>
        </h1>
    );
};

export default Logo;
