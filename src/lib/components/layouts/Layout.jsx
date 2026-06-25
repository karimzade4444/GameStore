import { Link, Outlet } from "react-router";
import logo from "../../../assets/magmus.png";
import { ShoppingTwoTone } from "@ant-design/icons";
import { Input } from "antd";

const Layout = () => {
  return (
    <>
      <div className="w-full h-15 bg-blue-950/90 flex justify-between items-center p-5 border-2 border-black fixed top-0 z-10">
        <div className=" flex justify-center items-center gap-5">
          <img
            src={logo}
            alt=""
            className="w-10 rounded-2xl shadow-[0_10px_30px_black]"
          />
          <p className=" text-xl font-medium text-white ">MagMus® Store</p>
        </div>
        <div className="flex justify-center items-center gap-10 font-light text-white/70 ">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/" className="hover:text-white">
            Games
          </Link>
          <Link to="/" className="hover:text-white">
            News
          </Link>
          <Link to="/" className="hover:text-white">
            About us
          </Link>
        </div>
        <div className=" flex justify-center items-center gap-5 text-xl font-light text-white">
          <p>Karimzoda</p>
          <img
            src={logo}
            alt=""
            className="w-10 rounded-4xl cursor-pointer shadow-[0_10px_30px_black]"
          />
          <ShoppingTwoTone className="cursor-pointer" />
          <Input placeholder="Поиск..." className="border-2! border-black! " />
        </div>
      </div>
      <Outlet />
      <div className=" w-full h-40 bg-neutral-300">
        <img src={logo} alt="" className="w-15" />
        <div>Помощь</div>
      </div>
    </>
  );
};

export default Layout;
