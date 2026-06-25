import { useQuery } from "@tanstack/react-query";
import { getGames } from "../api/games";
import { Button } from "antd";
import { Link } from "react-router";
import { Loader2 } from "lucide-react";


const Games = () => {
      const { data: games, isLoading } = useQuery({
        queryKey: ["games"],
        queryFn: getGames,
      });
  return (
    <div className="p-30">
      <p className="text-white text-4xl">Games</p>
      <div className="mt-20 grid grid-cols-4">
        {isLoading ? (
          <Loader2 className=" animate-spin text-white"/>
        ) : (
          games?.map((el) => (
            <div key={el.id} className="w-60 h-90 rounded-2xl bg-white/20 ">
              <Link key={el.id} to={`product/${el.id}`}>
                <img
                  src={el.img}
                  alt=""
                  className="w-full h-[70%] rounded-2xl cursor-pointer"
                />
              </Link>
              <p className="text-white pl-3 pt-2">{el.name}</p>
              <div className="flex justify-between items-center pl-4 pr-4">
                <p className="text-white/50 ">{el.tags}</p>
                <p className="text-white/50">{el.platform}</p>
              </div>
              <div className="flex justify-between items-center p-3">
                <p className="text-blue-400 ">{el.developer}</p>
                <Button type="primary">Buy ${el.price}</Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Games