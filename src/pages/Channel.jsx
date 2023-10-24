import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/api";

const Channel = () => {
    const { videoId, channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(
                    `channels?part=snippet&id=${channelId}`
                );
                setChannelDetail(data.items[0]);
                console.log(data.items[0]);
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };
        fetchResults();
    }, [channelId]);
    return (
        <section id="chnnel">
            {channelDetail && (
                <div className="channel__inner">
                    <div
                        className="channel__header"
                        style={{
                            backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})`,
                        }}
                    >
                        <div className="circle">
                            <img
                                src={channelDetail.snippet.thumbnails.high.url}
                                alt={channelDetail.snippet.title}
                            />
                        </div>
                    </div>

                    <div className="channel__info">
                        <div className="main__video"></div>
                       
                        <div className="info">
                            <h3 className="title">
                                {channelDetail.snippet.title}
                            </h3>
                            <span>
                                구독자{" "}
                                {channelDetail.statistics.subscriberCount}
                            </span>
                            <span>
                                동영상 수 {channelDetail.statistics.videoCount}
                            </span>
                            <span>
                                총 조회수 {channelDetail.statistics.viewCount}
                            </span>

                            <p className="desc">
                                {channelDetail.snippet.description}
                            </p>
                        </div>
                    </div>
                    <div className="channel__video video__inner"></div>
                    <div className="channel__more"></div>
                </div>
            )}
        </section>
    );
};

export default Channel;
