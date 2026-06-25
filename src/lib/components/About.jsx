import about from "../../assets/about.png";

import { Button } from "antd";
import { Link } from "react-router";
import AboutDown from "./AboutDown";

const About = () => {
  return (
    <div className="p-20 mt-20">
      <div className="w-full h-120 m-auto relative">
        <img src={about} alt="" className="w-full h-full" />
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex justify-center items-center gap-3 flex-col w-140  ">
          <p className=" text-5xl text-white font-black">About Us</p>
          <p className="text-white">
            GameVerse is dedicated to bring you the best games from around the
            world. Our mission is to provide an unparallel gaming platform where
            your passion for play can thrive
          </p>
          <Link to={"/games"}>
            <Button className="bg-white/0! text-white! w-70! h-12! text-2xl!">
              Show Games
            </Button>
          </Link>
        </div>
      </div>
      <AboutDown />
    </div>
  );
};

export default About;
