"use client";

import { memo } from "react";

const SecondHero = () => {
  return (
    <div className="container h-[300px] my-8 rounded-[15px] overflow-hidden">
      <div className="w-full h-full bg-[url('https://i.pinimg.com/1200x/b3/31/df/b331dff1d68440891c9f6a2247708385.jpg')] bg-center bg-cover bg-no-repeat bg-fixed" />
    </div>
  );
};

export default memo(SecondHero);
