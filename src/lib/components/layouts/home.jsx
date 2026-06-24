import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useStore } from "../../store/store";
import { useEffect } from "react";
import { getGames } from "../../api/games";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data: games, isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: getGames,
  });

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
        {games?.map((game) => (
          <SwiperSlide>

            <img src={game.imgbg} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
