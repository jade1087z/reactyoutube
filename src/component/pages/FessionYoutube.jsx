import React from "react";
import { fessionData } from "../data/fession";
import { Link } from "react-router-dom";
import Main from "../section/Main";

const FessionYoutube = () => {
    return (
        <Main title="패션 유튜버" description="패션 유튜버 영상 모음입니다.">
            <section id="fessionPage">
                <h2>🤞패션 유튜버 모음</h2>
                <div className="fession__wrap">
                    {fessionData.map((data, key) => (
                        <div className="fession__inner" key={key}>
                            <div className="fession">
                                <div className="fession__img">
                                    <Link to={`/channel/${data.channelId}`}>
                                        <img src={data.img} alt={data.author} />
                                    </Link>
                                </div>
                                <div className="fession__info">
                                    {data.author}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    );
};

export default FessionYoutube;
