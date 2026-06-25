import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { getGames } from "../../api/games";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import Categories from "./categories";
import { Link } from "react-router";

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
            <Link key={game.id} to={`/prod/${game.id}`}>
              <img
                src={game.imgbg}
                alt=""
                className="w-full h-full mask-[linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] [webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] cursor-pointer"
              />
              <p className=" absolute top-140 right-20 bg-white text-[10px] p-1 rounded-[5px]">
                {game.platform}
              </p>
              <Button className=" absolute! top-150! right-20!  w-40! h-10! rounded-4xl!">
                $ {game.price}
              </Button>
              <Button className=" absolute! top-162! right-20!  w-40! h-10! rounded-4xl! bg-white/0! text-white!">
                Add to Cart
              </Button>
              <div className="w-120 h-60 bg-black/20 backdrop-blur-md absolute top-100 left-20 rounded-3xl border border-white">
                <div className=" flex justify-center items-center bg-blue-950/80 w-full h-12 rounded-3xl">
                  <p className="text-3xl text-white font-black">{game.name}</p>
                </div>
                <p className="p-5 text-xl text-white">{game.title}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Categories />
    </>
  );
};

export default Home;
