import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoSearch from "../video/VideoSearch";
import { fetchFromAPI } from "../../utils/api";
import Main from "../section/Main";

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setVideos([]);
        fetchvideos(searchId);
    }, [searchId]);

    const fetchvideos = async (query, pageToken = "") => {
        try {
            setLoading(true);
            const data = await fetchFromAPI(
                `search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`
            );
            setNextPageToken(data.nextPageToken);
            setVideos((prevVidos) => [...prevVidos, ...data.items]);
            console.log(data.items);
        } catch (error) {
            console.log("error fetching data", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchvideos(searchId, nextPageToken);
        }
    };

    const channelPageClass = loading ? "isLoading" : "isLoaded";

    return (
        <Main title="패션 유튜버" description="패션 유튜버 영상 모음입니다.">
            <section id="searchPage">
                <h2>😀 검색 결과 페이지입니다.</h2>

                <div className={`video__inner ${channelPageClass}`}>
                    <VideoSearch videos={videos} />
                </div>
                <div className="video__more">
                    <button onClick={handleLoadMore}>더 보기</button>
                </div>
            </section>
        </Main>
    );
};

export default Search;
