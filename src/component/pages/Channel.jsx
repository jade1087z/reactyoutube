import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/api";
import VideoSearch from "../video/VideoSearch";
import Main from "../section/Main";

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [mainVideo, setMainVideo] = useState();
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(
                    `videos?part=snippet,statistics&id=${channelId}`
                );
                setMainVideo(data.items[0]);
            } catch (err) {
                console.log(err);
            }
        };
        fetchResults();
    }, [channelId]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(
                    `channels?part=snippet&id=${channelId}`
                );
                setChannelDetail(data.items[0]);
                console.log(data.items[0]);

                const videoData = await fetchFromAPI(
                    `search?channelId=${channelId}&part=snippet&order=date`
                );

                console.log(videoData);
                setChannelVideo(videoData.items);
                fetchChannelVideo(channelId);
                setLoading(true);
            } catch (error) {
                console.log("Error -> ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchResults();
    }, [channelId]);

    const fetchChannelVideo = (query, pageToken = "") => {
        fetchFromAPI(
            `search?type=video&part=snippet&channelId=${query}&pageToken=${pageToken}`
        )
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setChannelVideo((prevVideos) => [...prevVideos, ...data.items]);
                console.log(data.items);
            })
            .catch((error) => {
                console.log("error fetching data", error);
            });
    };

    // 채널 아이디의 값이 변경될 때 패치프롬 함수를 통해 채널 아이디의 값을 불러옴
    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchChannelVideo(channelId, nextPageToken);
        }
    };

    const channelPageClass = loading ? "isLoading" : "isLoaded";

    return (
        <Main
            title="패션 유튜버 채널"
            description="여행 유튜버 채널 페이지 입니다. 패션 유버의 영상을 모두 확인할 수 있습니다."
        >
            <section id="channelPage" className={channelPageClass}>
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
                                    src={
                                        channelDetail.snippet.thumbnails.high
                                            .url
                                    }
                                    alt={channelDetail.snippet.title}
                                />
                            </div>
                        </div>

                        <div className="channel__info">
                            <div className="main__video">
                                {/* mainVideo 1위 넣어주기  */}
                            </div>

                            <div className="info">
                                <h3 className="title">
                                    {channelDetail.snippet.title}
                                </h3>
                                <span>
                                    구독자{" "}
                                    {channelDetail.statistics.subscriberCount}
                                </span>
                                <span>
                                    동영상 수{" "}
                                    {channelDetail.statistics.videoCount}
                                </span>
                                <span>
                                    총 조회수{" "}
                                    {channelDetail.statistics.viewCount}
                                </span>

                                <p className="desc">
                                    {channelDetail.snippet.description}
                                </p>
                            </div>
                        </div>

                        <div className="channel__video video__inner">
                            <VideoSearch
                                videos={channelVideo}
                                layout="channel"
                            />
                        </div>
                        <div className="channel__more video__more">
                            {nextPageToken && (
                                <button onClick={handleLoadMore}>
                                    더 보기
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </Main>
    );
};

export default Channel;
