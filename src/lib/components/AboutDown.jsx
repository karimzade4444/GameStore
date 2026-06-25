import lib from "../../assets/lib.png";
import deals from "../../assets/deals.png";
import gamers from "../../assets/gamers.png";

const AboutDown = () => {
  return (
    <div>
      <p className="text-white text-center pt-40 text-5xl font-bold">
        What We Offer
      </p>
      <div className="w-full h-120 relative">
        <img src={lib} alt="" className="w-full h-full rounded-2xl mt-20" />
        <div className="text-white/70 absolute w-130 top-1/2 -translate-y-1/2 left-20">
          <p className="text-white text-3xl">Massive Game Library</p>
          <div className="w-60 h-0.5 rounded-2 xl bg-blue-400 mt-3"></div>
          <p className="mt-3">
            Dive into a vast collection of thousands of titles across every
            genre and platform. From action-packed shooters and immersive RPGs
            to relaxing puzzle games, our library grows every week to bring you
            the latest hits and timeless classics. Whether you’re a casual gamer
            or a hardcore enthusiast, you’ll always find something new to play.
          </p>
        </div>
      </div>

      <div className="w-full h-120 relative">
        <img src={deals} alt="" className="w-full h-full rounded-2xl mt-20" />
        <div className="text-white/70 absolute w-130 top-1/2 -translate-y-1/2 right-20 text-end">
          <p className="text-white text-3xl">Exclusive Deals</p>
          <div className="w-60 h-0.5 rounded-2 xl bg-blue-400 mt-3 absolute right-0"></div>
          <p className="mt-6">
            Unlock offers you won’t find anywhere else. We partner directly with
            publishers to bring you incredible discounts, limited-time bundles,
            and exclusive pre-order bonuses. With deals dropping regularly,
            you’ll always have a reason to check back and grab your next
            favorite game at the best price.
          </p>
        </div>
      </div>

      <div className="w-full h-120 relative">
        <img src={gamers} alt="" className="w-full h-full rounded-2xl mt-20" />
        <div className="text-white/70 absolute w-130 top-1/2 -translate-y-1/2 left-20">
          <p className="text-white text-3xl">Gamers First</p>
          <div className="w-60 h-0.5 rounded-2 xl bg-blue-400 mt-3"></div>
          <p className="mt-3">
            Our mission is to put players at the heart of everything we do. From
            lightning-fast downloads to responsive customer support, every
            feature is designed with your gaming experience in mind. We listen
            to our community, adapt to your feedback, and constantly improve to
            make sure your journey is smooth, exciting, and rewarding.
          </p>
        </div>
      </div>

      <div className="mt-30 grid grid-cols-3 place-items-center">
        <div className="w-80 h-40 bg-linear-to-b from-neutral-500/50 to-blue-900/20 rounded-2xl shadow-white/10 shadow-2xl flex justify-center items-center flex-col">
          <p className=" text-4xl font-bold text-blue-400">100+</p>
          <p className=" text-xl text-white/50">Game Library</p>
        </div>
        <div className="w-80 h-40 bg-linear-to-b from-neutral-500/50 to-blue-900/20 rounded-2xl shadow-white/10 shadow-2xl flex justify-center items-center flex-col">
          <p className=" text-4xl font-bold text-blue-400">5+</p>
          <p className=" text-xl text-white/50">Satisfied Gamers</p>
        </div>
        <div className="w-80 h-40 bg-linear-to-b from-neutral-500/50 to-blue-900/20 rounded-2xl shadow-white/10 shadow-2xl flex justify-center items-center flex-col">
          <p className=" text-4xl font-bold text-blue-400">10+</p>
          <p className=" text-xl text-white/50">Purchases</p>
        </div>
      </div>
    </div>
  );
};

export default AboutDown;
