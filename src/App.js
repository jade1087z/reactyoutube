import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/utils/store";

import Main from "./component/section/Main";
const Home = lazy(() => import("./component/pages/Home"));
const Today = lazy(() => import("./component/pages/Today"));
const FessionYoutube = lazy(() => import("./component/pages/FessionYoutube"));
const Channel = lazy(() => import("./component/pages/Channel"));
const Search = lazy(() => import("./component/pages/Search"));
const Video = lazy(() => import("./component/pages/Video"));
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<Main />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/today" element={<Today />} />
                        <Route
                            path="/FessionYoutube"
                            element={<FessionYoutube />}
                        />
                        <Route
                            path="/channel/:channelId"
                            element={<Channel />}
                        />
                        <Route path="/search/:searchId" element={<Search />} />
                        <Route path="/video/:videoId" element={<Video />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
