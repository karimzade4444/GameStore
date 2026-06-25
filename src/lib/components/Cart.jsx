import { useStore } from "../store/store"
import { useQuery } from "@tanstack/react-query";
import { getGames } from "../api/games";
import { Button } from "antd";
import { Link } from "react-router";
import { Loader2 } from "lucide-react";



const Cart = () => {
          const { data: games, isLoading } = useQuery({
            queryKey: ["games"],
            queryFn: getGames,
          });
  const { cart } = useStore()

  return (
    <>
      <p className="pt-30 pl-20  text-white text-4xl font-bold">
        Shopping Cart
      </p>
      <p className=" text-neutral-400 pl-20 pt-3">
        You have {cart.length} items in your cart
      </p>

      <div className="p-20">
        <div className="w-[60%] bg-linear-to-b from-neutral-800 to-white/20 rounded-2xl">
          {isLoading ? (
            <Loader2 className=" animate-spin text-white" />
          ) : (
            games?.map((el) => (
              <div>
                <div className="p-6 flex  gap-5">
                  <img src={el.img} alt="" className="w-25 h-30 rounded-2xl" />
                  <div><p className="pt-3">{el.name}</p>
                  <p className="pt-5 w-150">{el.title}</p></div>
                </div>
                
                  <div className="w-[95%] h-0.5 bg-white/40 rounded-2xl m-auto"></div>
                </div>
              
            ))
          )}
          ,
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Cart