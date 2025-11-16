"use client";
import Link from "next/link";
import { memo } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useScrollVisibility } from "../ui/ScrollVisiblity";

const SubHeader = () => {
  const { isVisible, scrolledPast } = useScrollVisibility(10);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-60 transition-all duration-400
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${scrolledPast ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="text-black/70  pt-2 pb-2 container place-items-end justify-end flex">
        <ul className="flex gap-6 font-medium text-[14px]">
          <li>
            <Link href={`/`} className="scale-x-100 flex">
              About us
            </Link>
          </li>
          <li>
            <Link href={`/`} className="scale-x-100 flex">
              Contact us
            </Link>
          </li>
          <li className="flex text-red-600 flex-row place-items-center scale-x-100 gap-2">
            <Link href={`/`} className="">
              Become a seller
            </Link>
            <MdKeyboardDoubleArrowRight />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(SubHeader);
