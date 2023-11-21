import React from "react";
import Search from "./Search";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTo from "../../utils/scrollTo";
const Main = (props) => {
    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet
                titleTemplate="%s | Fession Youtube"
                defaultTitle=" Fession Youtube"
                defer={true}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>

            <Header />
            <main id="main" role="main">
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    );
};

export default Main;
