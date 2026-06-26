import { SquareLibrary } from "lucide-react";
import logo from "../../../assets/magmus.png";
import { Button, Input } from "antd";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteGames, getGames } from "../../api/games";
import { Link } from "react-router";
import APCreatModal from "./APCreatModal";
import TableAP from "./TableAP";

const AdminPanel = () => {
  const { data: games, isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: getGames,
  });
  const queryClient = useQueryClient();
  const { mutate: deletingGames } = useMutation({
    mutationFn: deleteGames,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["games"] });
    },
  });
  return (
    <>
      <div className=" flex justify-between items-center">
        <div className="w-[20%] bg-gray-900 min-h-screen border-3 border-black">
          <div className=" flex justify-center items-center gap-5 mt-7">
            <img
              src={logo}
              alt=""
              className="w-15 rounded-2xl shadow-2xl shadow-white/60"
            />
            <p className=" text-2xl font-medium text-white ">MagMus® Store</p>
          </div>
          <div className=" p-10">
            <div className=" flex justify-start items-center gap-5 border-3 p-2 rounded-xl border-white/50 bg-linear-to-r from-blue-700/50 via-purple-600/50 to-rose-500/50 cursor-pointer hover:bg-neutral-600 shadow-2xl shadow-white/50">
              <SquareLibrary color="white" size={48} />
              <p className=" text-2xl font-medium text-white">Library</p>
            </div>
          </div>
        </div>
        <div className="w-[80%] min-h-screen bg-linear-to-r from-blue-800/40 to-gray-900 p-10">
          <div className=" flex justify-between items-center">
            <p className="text-white font-bold text-xl">ADMIN PANEL</p>
            <Link to="/">
              <Button type="primary" className="font-black!">
                GUEST
              </Button>
            </Link>
          </div>
          <div className=" flex justify-between items-center pt-15">
            <p className="text-white text-4xl font-black">GAME LIBRARY</p>
            <div className=" flex justify-center items-center gap-10">
              <Input
                placeholder="Поиск..."
                variant="underlined"
                className="bg-white/0! text-white! placeholder:text-white/70!"
              />
              <Button className=" bg-linear-to-r! from-blue-700/70 via-purple-600/70 to-rose-500/70! text-white! font-bold! ">
                + ADD NEW GAMES
              </Button>
            </div>
          </div>

          <div className="w-full overflow-x-auto bg-black p-6 rounded-xl mt-10">
            <TableAP/>
          </div>
        </div>
      </div>
      <APCreatModal />
    </>
  );
};

export default AdminPanel;
