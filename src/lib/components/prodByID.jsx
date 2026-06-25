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

  const {
    data: game,
    isLoading
  } = useQuery({
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
      <div className=" flex justify-between items-start">
        <ReactPlayer
          src={game.trailer}
          controls
          width="
      60%"
          height="500px"
        />
        <div>
          <img src={game.logo} alt="" className="w-68" />
          <div className="w-full h-0.5 bg-neutral-400"></div>
<p>{game.title}</p>
          <div className="w-full h-0.5 bg-neutral-400"></div>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProdByID;
