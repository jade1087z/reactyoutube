import React from "react";
import Today from "../contents/Today";
import Fession from "../contents/Fession";
import Main from "../section/Main";

const Home = () => {
    return (
        <Main title="패션 유튜버" description="패션 유튜버 영상 모음입니다.">
            <Today />
            <Fession />
        </Main>
    );
};

export default Home;
