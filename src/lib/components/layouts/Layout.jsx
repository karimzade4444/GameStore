import { Link, Outlet } from "react-router";
import logo from "../../../assets/magmus.png"
import {  ShoppingTwoTone } from "@ant-design/icons";
import { Input } from "antd";

const Layout = () => {
  return (
    <>
      <div className="w-full h-18 bg-neutral-300 flex justify-between items-center p-5 border-2 border-black fixed top-0 z-10">
        <div className=" flex justify-center items-center gap-5">
          <img
            src={logo}
            alt=""
            className="w-15 rounded-2xl shadow-[0_10px_30px_black]"
          />
          <p className=" text-xl font-medium ">MagMus® Store</p>
        </div>
        <div className="flex justify-center items-center gap-10 font-normal text-xl">
          <Link to="/">Главная</Link>
          <Link to="/">Игры</Link>
          <Link to="/">О нас</Link>
        </div>
        <div className=" flex justify-center items-center gap-5 text-xl font-light">
          <p>Karimzoda</p>
          <img
            src={logo}
            alt=""
            className="w-10 rounded-4xl cursor-pointer shadow-[0_10px_30px_black]"
          />
          <ShoppingTwoTone className="cursor-pointer" />
          <Input placeholder="Поиск..." variant="filled" className="border-2! border-black!" />
        </div>
      </div>
      <Outlet/>
    </>
  );
}

export default Layout