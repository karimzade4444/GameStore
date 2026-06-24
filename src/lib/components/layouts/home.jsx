

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useStore } from "../../store/store";
import { useEffect } from "react";
import { getGames } from "../../api/games";

const Home = () => {
const {games, setGames} = useStore();
useEffect(()=>{
    const reGames = getGames
})

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
       className=" w-full h-screen"
    
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
