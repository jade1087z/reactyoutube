import React from "react";
import { todayText } from "../data/today";
import { Link } from "react-router-dom";

const Today = () => {
    return (
        <section id="todayPage">
            <div className="today__pick">
                <h2>🤞 오늘의 인기 급상승 동영상 🤞</h2>
            </div>
            <div className="today__inner">
                <div className="today__thumb">
                    <div className="thumb__img"></div>
                </div>
                <div className="today__text">
                    <div className="today">
                        <h2># 오늘의 인기 급상승 동영상 #</h2>
                    </div>
                    <div className="text__wrap">
                        <h3 className="title">
                            <Link To="#">{todayText[0].title}</Link>
                        </h3>
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
