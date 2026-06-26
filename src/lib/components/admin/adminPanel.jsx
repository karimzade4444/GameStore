import { SquareLibrary } from "lucide-react";
import logo from "../../../assets/magmus.png"

const AdminPanel = () => {
  return (
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
      <div className="w-[80%] min-h-screen bg-linear-to-r from-blue-800/40 to-gray-900 "></div>
    </div>
  );
}

export default AdminPanel