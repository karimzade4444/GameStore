import { Link, Outlet } from "react-router";
import logo from "../../../assets/magmus.png";
import { FacebookOutlined, GithubOutlined, InstagramFilled, InstagramOutlined, ShoppingTwoTone, WhatsAppOutlined, YoutubeOutlined } from "@ant-design/icons";
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
          <Link to="/games" className="hover:text-white">
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
      <div className=" w-full h-105 bg-blue-950">
        <div className=" flex justify-center items-start gap-40 p-15">
          <div className="w-140 flex justify-center items-start flex-col gap-5">
            <div className=" flex justify-start items-center gap-4">
              <img src={logo} alt="" className="w-15 rounded-3xl" />
              <p className="text-white font-black text-2xl">MagMus® Store</p>
            </div>
            <p className="text-white/70">
              MagMus® Store - Where every gamer levels up! From epic AAA
              adventures to indie gems, grab the hottest deals on PC,
              Playstation. PLay more, pay less
            </p>
          </div>
          <div className="w-0.5 h-40 bg-white/80"></div>
          <div className="text-white/70">
            <p className=" font-black text-2xl pt-3 text-white">My Account</p>
            <p className="pt-8">My Account</p>
            <p className="pt-2">My Orders</p>
          </div>
          <div className="text-white/70">
            <p className=" font-black text-2xl pt-3 text-white">Support</p>
            <p className="pt-8">Terms and conditions</p>
            <p className="pt-2">Privacy and cookie policy</p>
            <p className="pt-2">Refund policy</p>
          </div>
        </div>
        <div className=" flex justify-end items-center gap-5 pr-20">
          <InstagramOutlined className=" text-5xl text-white!" />
          <FacebookOutlined className=" text-5xl text-white!" />
          <YoutubeOutlined className=" text-5xl text-white!" />
          <WhatsAppOutlined className=" text-5xl text-white!" />
          <GithubOutlined className=" text-5xl text-white!" />
        </div>
        <div className="w-full h-0.5 bg-white/60 mt-10"></div>
        <p className="text-white text-center pt-2 font-extralight">Copyright MagMus.tj 2026, all rights reserved</p>
      </div>
    </>
  );
};

export default Layout;
