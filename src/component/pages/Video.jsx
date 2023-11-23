import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/api";
import ReactPlayer from "react-player";
import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import Main from "../section/Main";

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [commentDetail, setCommentDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then(
            (data) => {
                console.log(data);
                setVideoDetail(data.items[0]);
            }
        );
        fetchFromAPI(
            `commentThreads?part=snippet,statistics&videoId=${videoId}`
        )
            .then((data) => {
                console.log(data);
                setCommentDetail(data.items[0]);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            });
    }, [videoId]);

    const channelPageClass = loading ? "isLoading" : "isLoaded";

    return (
        <Main title="패션 유튜버" description="패션 유튜버 영상 모음입니다.">
            <section id="videoPage" className={channelPageClass}>
                {videoDetail && (
                    <div className="video__view">
                        <div className="video__play">
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width="85%"
                                height="85%"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    padding: 20,
                                }}
                            />
                        </div>
                        <div className="video__info">
                            <h2 className="video__title">
                                {videoDetail.snippet.title}
                            </h2>
                            <div className="video__channel">
                                <div className="id">
                                    <Link
                                        to={`/channel/${videoDetail.snippet.channelId}`}
                                    >
                                        {videoDetail.snippet.channelTitle}
                                    </Link>
                                </div>
                                <div className="count">
                                    <span className="view">
                                        <CiRead />
                                        {videoDetail.statistics.viewCount}
                                    </span>
                                    <span className="like">
                                        <CiStar />
                                        {videoDetail.statistics.likeCount}
                                    </span>
                                    <span className="comment">
                                        <CiChat1 />
                                        {videoDetail.statistics.commentCount}
                                    </span>
                                </div>
                            </div>
                            <div className="video__desc">
                                {videoDetail.snippet.description}
                            </div>

                            <div className="video__comment"></div>
                        </div>
                    </div>
                )}
            </section>
        </Main>
    );
};

export default Video;
