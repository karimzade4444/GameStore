import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useStore } from "../../store/store";
import { useEffect } from "react";
import { getGames } from "../../api/games";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";

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
          <SwiperSlide className="relative!">

            <img src={game.imgbg} alt=""  className="w-full h-full"/>
            <p className=" absolute top-140 right-20 bg-white text-[10px] p-1 rounded-[5px]">{game.platform}</p>
           <Button type="primary" className=" absolute! top-150! right-20! text-xl! w-25! h-10!">$ {game.price}</Button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        
      </div>
    </>
  );
};

export default Home;
