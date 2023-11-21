import { useDispatch, useSelector } from "react-redux";

const Search = () => {
    const dispatch = useDispatch();
    const { isShow } = useSelector((state) => state);
    const handleClick = () => {
        dispatch({ type: "TOGGLE_SHOW" });
    };

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
                    className="search__input"
                />
            </div>
        </div>
    );
};

export default Search;
