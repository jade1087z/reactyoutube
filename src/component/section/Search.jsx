import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
    // input의 value 값을 전달 받음
    const [searchKeyword, setSearchKeyword] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword("");
        }
    };

    // 리덕스 show 토글 메뉴
    const isShow = useSelector((state) => state.isShow);
    const handleClick = () => {
        dispatch({ type: "TOGGLE_SHOW" });
    };
    const dispatch = useDispatch();

    return (
        <div id="search">
            <div
                className={`mobile__menu ${isShow ? "show" : ""}`}
                onClick={handleClick}
            >
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="search__inner">
                <label htmlFor="searchInput">검색</label>
                <input
                    type="search"
                    id="searchInput"
                    placeholder="검색어를 입력해주세요!"
                    autoComplete="off"
                    className="search__input"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Search;
