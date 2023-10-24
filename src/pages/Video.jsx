import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    // useEffect(() => {
    //     fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
    //         .then((data) => console.log(data))
    //         .then((data) => setVideoDetail(data.items[0]));
    // }, [videoId]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then(
            (data) => {
                console.log(data);
                setVideoDetail(data.items[0]);
                console.log(data.items[0].snippet.title);
            }
        );
    }, [videoId]);

    return (
        <section id="videoViewPage">
            {videoDetail && (
                <div className="video__view">
                    <div className="video__play">
                        <ReactPlayer
                            playing={true}
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                            width="100%"
                            height="100%"
                            style={{ position: "absoulte", top: 0, left: 0 }}
                        />
                    </div>
                    <div className="video__info">
                        <h3 className="video__title">
                            {videoDetail.snippet.title}
                        </h3>
                        <div className="video__channel">
                            <div className="id">
                                
                                <Link to={`/channel/${videoId}/${videoDetail.snippet.channelId}`}></Link>
                                {videoDetail.snippet.channelTitl}
                            </div>
                            <div className="count">
                                <span className="view">조회수 {videoDetail.statistics.viewCount}<br /></span>
                                <span className="like">좋아요 {videoDetail.statistics.likeCount}<br /></span>
                                <span className="comment">댓글 {videoDetail.statistics.commentCount}<br /></span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Video;
