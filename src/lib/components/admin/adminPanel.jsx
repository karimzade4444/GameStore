import { SquareLibrary } from "lucide-react";
import logo from "../../../assets/magmus.png";
import { Button, Input } from "antd";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteGames, getGames } from "../../api/games";
import { Link } from "react-router";
import APCreatModal from "./APCreatModal";

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
            <table
              className="w-full text-left border-separate"
              style={{ borderSpacing: "0 10px" }}
            >
              <thead>
                <tr className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="pb-2 pl-4 w-12"></th>
                  <th className="pb-2 w-16">Постер</th>
                  <th className="pb-2 text-center">Название игры</th>
                  <th className="pb-2 text-center">Жанр</th>
                  <th className="pb-2 text-center">Разработчик</th>
                  <th className="pb-2 text-center">Платформы</th>
                  <th className="pb-2 text-center">Языки</th>
                  <th className="pb-2 text-center">Память</th>
                  <th className="pb-2 text-center">Релиз</th>
                  <th className="pb-2 text-center">Цена</th>
                  <th className="pb-2 pr-4 text-right">Действия</th>
                </tr>
              </thead>

              <tbody>
                {games?.map((game) => (
                  <tr
                    key={game.id}
                    className="bg-blue-950/40 hover:bg-blue-900/60 border-slate-800 transition-all duration-200 group cursor-pointer"
                  >
                    <td className="py-4 pl-4 rounded-l-xl border-y border-l border-slate-800/60 group-hover:border-purple-500/50 transition-all "></td>

                    <td className="py-4 border-y border-slate-800/60 group-hover:border-purple-500/50 transition-all">
                      <img
                        src={game.img}
                        alt={game.name}
                        className="w-10 h-14 object-cover rounded-md border border-slate-700"
                      />
                    </td>

                    <td className="py-4 font-semibold text-slate-200 group-hover:text-purple-400 border-y border-slate-800/60 group-hover:border-purple-500/50 transition-all text-center">
                      {game.name}
                    </td>

                    <td className="text-center py-4 border-y border-slate-800/60 group-hover:border-purple-500/50 transition-all">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        {game.tags}
                      </span>
                    </td>

                    <td className=" text-center py-4 font-medium text-sm text-green-400 border-y border-slate-800/60 group-hover:border-purple-500/50 transition-all">
                      {game.developer}
                    </td>

                    <td className=" text-center py-4 font-semibold text-slate-300 text-sm border-y border-slate-800/60 group-hover:border-purple-500/50 transition-all">
                      {game.platform}
                    </td>

                    <td className=" text-center py-4 text-slate-400 text-lg border-y border-slate-800/60 group-hover:border-purple-500/50 transition-all">
                      <div className="flex gap-1 ">{game.language}</div>
                    </td>
                    <td className=" text-center py-4 text-slate-400 text-lg border-y border-slate-800/60 group-hover:border-purple-500/50 transition-all">
                      <div className="flex gap-1">{game.storage}</div>
                    </td>
                    <td className=" text-center py-4 text-slate-400 text-lg border-y border-slate-800/60 group-hover:border-purple-500/50 transition-all">
                      <div className="flex gap-1">{game.release}</div>
                    </td>
                    <td className=" text-center py-4 text-slate-400 text-lg border-y border-slate-800/60 group-hover:border-purple-500/50 transition-all">
                      <div className="flex gap-1">$ {game.price}</div>
                    </td>

                    <td className="py-4 pr-4 text-right rounded-r-xl border-y border-r border-slate-800/60 group-hover:border-purple-500/50 transition-all">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          className="p-2 text-slate-400 hover:text-blue-400 bg-slate-900/50 hover:bg-slate-800 rounded-lg border border-slate-700/50 transition-all cursor-pointer"
                          title="Редактировать"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => deletingGames(game.id)}
                          className="p-2 text-slate-400 hover:text-red-400 bg-slate-900/50 hover:bg-slate-800 rounded-lg border border-slate-700/50 transition-all cursor-pointer"
                          title="Удалить"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <APCreatModal />
    </>
  );
};

export default AdminPanel;
