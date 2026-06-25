import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { getGamesByID } from "../api/games";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "antd";

const ProdByID = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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
        <ReactPlayer
          src={game.trailer}
          controls
          width="60%"
          height="500px"
        />
        <div className="w-[35%] flex justify-center items-center flex-col">
          <img src={game.logo} alt="" className="w-full h-35 object-cover" />
          <div className="w-full h-0.5 bg-neutral-400 mt-10"></div>
          <p className="h-40 pt-2">{game.title}</p>
          <div className="w-full h-0.5 bg-neutral-400 mt-5"></div>
          <Button className="mt-5! w-60! rounded-2xl!">Buy Now</Button>
          <Button className="mt-5! w-60! rounded-2xl! bg-blue-950! border-0! text-white!">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProdByID;
