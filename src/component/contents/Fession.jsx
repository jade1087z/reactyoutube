import React from "react";
import { fessionData } from "../data/fession";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Fession = () => {
    return (
        <section id="youtuber">
            <h2>🤞 패션 유튜버 모음 🤞</h2>
            <div className="fession__wrap">
                <Swiper
                    slidesPerView={0}
                    spaceBetween={30}
                    cssMode={true}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        1700: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                        1100: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        800: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="fession__inner"
                >
                    {fessionData.map((data, key) => (
                        <SwiperSlide className="fession__inner" key={key}>
                            <div className="fession">
                                <div className="fession__img">
                                    <Link to={`/channel/${data.channelId}`}>
                                        <img src={data.img} alt={data.author} />
                                    </Link>
                                </div>
                                <div className="fession__info">
                                    {data.author}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Fession;
