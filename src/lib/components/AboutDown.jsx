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

      <div>

        <div className="w-100 h-70 bg-linear-to-b"></div>
      </div>
    </div>
  );
};

export default AboutDown;
