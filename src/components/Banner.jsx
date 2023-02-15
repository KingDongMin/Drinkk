import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBanner } from '../api/firebase';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Banner() {
    const { isLoading, error, data } = useQuery(['banner'], getBanner);

    if (isLoading) return <p>banner is loading...</p>;

    if (error) return <p>banner Error! : {error}</p>;

    return (
        <section className="mb-10 drop-shadow-lg">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-md"
            >
                {data &&
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full">
                                <h1
                                    className="text-4xl z-10 absolute left-[50%] top-[40%]
                                translate-x-[-50%] text-white font-bold drop-shadow-2xl"
                                >
                                    {item.title}
                                </h1>
                                <img
                                    className="object-cover opacity-80 w-full h-52"
                                    src={item.imgURL}
                                    alt={item.title}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}
