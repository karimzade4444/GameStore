import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { getGamesByID } from "../api/games";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "antd";
import gen from "../../assets/gen.png"
import { useStore } from "../store/store";


const ProdByID = () => {
  const [isPlaying, setIsPlaying] = useState(false);
const {addToCart} = useStore();
  const { id } = useParams();

  const { data: game, isLoading } = useQuery({
    queryKey: ["game", id],
    queryFn: () => getGamesByID(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin text-white w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="p-20 text-white">
      <h1 className="text-4xl font-bold mb-5 ">{game.name}</h1>
      <p className="text-green-700 font-bold text-2xl ">$ {game.price} USD</p>
      <div className=" flex justify-between items-center mt-5">
        <ReactPlayer src={game.trailer} controls width="60%" height="500px" />
        <div className="w-[35%] flex justify-center items-center flex-col">
          <img src={game.logo} alt="" className="w-full h-35 object-cover" />
          <div className="w-full h-0.5 bg-neutral-400 mt-10"></div>
          <p className="h-40 pt-2">{game.title}</p>
          <div className="w-full h-0.5 bg-neutral-400 mt-5"></div>
          <Button className="mt-5! w-60! rounded-2xl!">Buy Now</Button>
          <Button className="mt-5! w-60! rounded-2xl! bg-blue-950! border-0! text-white!" onClick={()=>addToCart(game)}>
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="mt-30 flex justify-between items-end">
        <div className="w-[60%]">
          <p className=" text-4xl font-bold">About</p>
          <p className="text-neutral-400 pt-5">{game.title}</p>
          <img src={game.imgbg} alt="" className="w-full mt-5 rounded-2xl" />
        </div>
        <div className="w-[35%]">
          <div className="w-full h-0.5 bg-neutral-500 rounded-2xl"></div>
          <div className=" flex justify-start items-center gap-5 p-5">
            <img src={gen} alt="" />
            <p className="text-neutral-400">
              Nudity, Strong Violence, Use of tobacco and drugs
            </p>
          </div>
          <div className="w-full h-0.5 bg-neutral-500 rounded-2xl"></div>
          <div className=" flex justify-between items-center p-5">
            <p className="text-neutral-400">Name:</p>
            <p>{game.name}</p>
          </div>
          <div className="w-full h-0.5 bg-neutral-500 rounded-2xl"></div>
          <div className=" flex justify-between items-center p-5">
            <p className="text-neutral-400">Developer:</p>
            <p>{game.developer}</p>
          </div>
          <div className="w-full h-0.5 bg-neutral-500 rounded-2xl"></div>
          <div className=" flex justify-between items-center p-5">
            <p className="text-neutral-400">Genre:</p>
            <p>{game.tags}</p>
          </div>
          <div className="w-full h-0.5 bg-neutral-500 rounded-2xl"></div>
          <div className=" flex justify-between items-center p-5">
            <p className="text-neutral-400">Language:</p>
            <p>{game.language}</p>
          </div>
          <div className="w-full h-0.5 bg-neutral-500 rounded-2xl"></div>
          <div className=" flex justify-between items-center p-5">
            <p className="text-neutral-400">Platforms:</p>
            <p>{game.platform}</p>
          </div>
          <div className="w-full h-0.5 bg-neutral-500 rounded-2xl"></div>
          <div className=" flex justify-between items-center p-5">
            <p className="text-neutral-400">Storage:</p>
            <p>{game.storage}</p>
          </div>
          <div className="w-full h-0.5 bg-neutral-500 rounded-2xl"></div>
          <div className=" flex justify-between items-center p-5">
            <p className="text-neutral-400">Release:</p>
            <p>{game.release}</p>
          </div>
          <div className="w-full h-0.5 bg-neutral-500 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ProdByID;
