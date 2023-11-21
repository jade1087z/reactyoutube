import React from "react";
import { todayText } from "../data/today";

const Today = () => {
    return (
        <section id="todayPage">
            <h2># 오늘의 인기 급상승 동영상</h2>
            <div className="today__inner">
                <div className="today__thumb"></div>
                <div className="today__text">
                    <div className="text__wrap">
                        <span className="today">
                            # 오늘의 인기 급상승 동영상
                        </span>
                        <h3 className="title">{todayText[0].title}</h3>
                        <p className="desc">{todayText[0].desc}</p>
                    </div>
                    <div className="info">
                        <span className="author">{todayText[0].author}</span>
                        <span className="data">{todayText[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Today;
