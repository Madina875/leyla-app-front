import { memo } from "react";
import img1 from "./../../public/cae7aa908b23d9dd393a951858e1466e.jpg";

const Hero = () => {
  return (
    <div className="bg-purple-100">
      <div className="h-200">
        <div className="h-screen flex">
          <div className="size-full flex-col flex items-center justify-center">
            <p className="text-6xl leading-15 w-120 text-center wr font-serif italic">
              Create your Own Store or Be a Customer
            </p>

            <div className="flex gap-6 justify-center mt-10">
              <button className="px-7 py-3 rounded-lg bg-purple-500 text-white font-sans font-medium transition-all duration-300 hover:bg-purple-600 hover:scale-105">
                Be a Customer
              </button>

              <button className="border px-10 py-3 rounded-lg bg-purple-100 text-purple-800 font-sans font-medium transition-all duration-300 hover:bg-purple-200 hover:scale-105">
                Be a Seller
              </button>
            </div>
          </div>
          <div className="size-full flex items-center justify-center">
            <div className="p-10 overflow-hidden rounded-[15px]">
              <img
                src={img1.src}
                alt="store"
                className="size-110 w-[400px] h-[400px] object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-1 hover:brightness-110 rounded-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
