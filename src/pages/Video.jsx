import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/api";
import { useParams } from "react-router-dom";
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
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
        .then((data) => {
            console.log(data);
            console.log(data.items[0].snippet.title);
            setVideoDetail(data.items[0]);
        })
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
                    <div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default Video;
