import React from "react";
import { todayText } from "../data/today";
import Main from "../section/Main";

const Today = () => {
    return (
        <Main title="패션 유튜버" description="패션 유튜버 영상 모음입니다.">
            <section id="fessionPage">
                <h2># 오늘의 인기 급상승 동영상 #</h2>
                {todayText.map((today, key) => (
                    <div className="today__inner" key={key}>
                        <div className="today__thumb"></div>
                        <div className="today__text">
                            <div className="text__wrap">
                                <span className="today">
                                    # 오늘의 인기 급상승 동영상 #
                                </span>
                                <h3 className="title">{today.title}</h3>
                                <p className="desc">{today.desc}</p>
                            </div>
                            <div className="info">
                                <span className="author">{today.author}</span>
                                <span className="data">{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    );
};

export default Today;
