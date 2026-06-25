import action from "../../../assets/action.png"
import actionper from "../../../assets/actionPer.png";
import adventure from "../../../assets/adventure.png";
import adventureper from "../../../assets/adventurePer.png";
import fps from "../../../assets/fps.png";
import fpsper from "../../../assets/fpsPer.png";
import fight from "../../../assets/fighting.png";
import fightper from "../../../assets/fightingPer.png";
import rpg from "../../../assets/rpg.png";
import rpgper from "../../../assets/rpgPer.png";
import single from "../../../assets/single.png";
import singleper from "../../../assets/singlePer.png";

const Categories = () => {
  return (
    <div className="p-30">
      <p className="text-white text-4xl">Categories </p>
      <div className="mt-40 grid grid-cols-2 gap-40">
        <div className="w-140 h-70 relative">
          <img src={action} alt="" className="w-full h-full" />
          <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-black">
            Action
          </p>
          <img src={actionper} alt="" className=" absolute bottom-0 -left-30" />
        </div>
        <div className="w-140 h-70 relative">
          <img src={adventure} alt="" className="w-full h-full" />
          <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-black z-10">
            Adventure
          </p>
          <img src={adventureper} alt="" className=" absolute bottom-0 -left-30" />
        </div>
        <div className="w-140 h-70 relative">
          <img src={fps} alt="" className="w-full h-full" />
          <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-black">
            FPS
          </p>
          <img src={fpsper} alt="" className=" absolute bottom-0 -left-30" />
        </div>
        <div className="w-140 h-70 relative">
          <img src={fight} alt="" className="w-full h-full" />
          <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-black">
            Fighting
          </p>
          <img src={fightper} alt="" className=" absolute bottom-0 -left-30" />
        </div>
        <div className="w-140 h-70 relative">
          <img src={rpg} alt="" className="w-full h-full" />
          <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-black">
            RPG
          </p>
          <img src={rpgper} alt="" className=" absolute bottom-0 -left-30" />
        </div>
        <div className="w-140 h-70 relative">
          <img src={single} alt="" className="w-full h-full" />
          <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-black">
            Single PLayer
          </p>
          <img src={singleper} alt="" className=" absolute bottom-0 -left-30" />
        </div>
      </div>
    </div>
  );
}

export default Categories