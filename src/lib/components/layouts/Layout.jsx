import { Link } from "react-router";
import logo from "../../../assets/magmus.png"

const Layout = () => {
  return (
    <div className="w-full h-18 bg-neutral-300 flex justify-between items-center">
      <div className=" flex justify-center items-center gap-5">
        <img src={logo} alt="" className="w-15 rounded-2xl" />
        <p className=" text-xl font-bold">MagMus® Store</p>
      </div>
      <div>
        <Link to="/">Главная</Link>
        <Link to="/">Игры</Link>
        <Link to="/">О нас</Link>
      </div>
      <div>
        <p>Karimzoda</p>
        <img src={logo} alt="" />
        
      </div>
    </div>
  );
}

export default Layout