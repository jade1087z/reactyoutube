import React, { useEffect, useState } from "react";
import Today from "../contents/Today";
import Fession from "../contents/Fession";
import Main from "../section/Main";
import VideoSlider from "../video/VideoSlider";
import { fetchFromAPI } from "../../utils/api";
import { fessionData } from "../data/fession";

const Home = () => {
    const [channelVideo, setChannelVideo] = useState([]);

    const channelIds = fessionData.map((item) => item.channelId); // 채널 데이터 가져와서 배열로 저장하기
    const channelId = "UCr6kh7Iujsdqdqo_rp_sKrA";
    //
    useEffect(() => {
        const fetchvideos = async () => {
            try {
                const data = await fetchFromAPI(
                    `search?channelId=${channelId}&part=snippet&order=date`
                );
                setChannelVideo(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchvideos();
    }, [0]);

    return (
        <Main title="패션 유튜버" description="패션 유튜버 영상 모음입니다.">
            <Today />
            <Fession />
            <div className="channel__video video__inner">
                <VideoSlider videos={channelVideo} />
            </div>
        </Main>
    );
};

export default Home;
