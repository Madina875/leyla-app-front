"use client";
import Link from "next/link";
import { memo } from "react";
import { IoCartOutline } from "react-icons/io5";
import ProfileButton from "../ui/ProfileButton";
import SearchButton from "../ui/SearchButton";
import DynamicMenu from "../ui/DynamicMenu";
import { useScrollVisibility } from "../ui/ScrollVisiblity";

const Header = () => {
  const { isVisible, scrolledPast } = useScrollVisibility(10);
  const savedState =
    typeof window !== "undefined" &&
    localStorage.getItem("modalOpen") === "true";

  const headerBgClass =
    savedState || scrolledPast
      ? "bg-white shadow-md opacity-100"
      : "bg-transparent bg-white";
  return (
    <header>
      <div
        className={`fixed top-0 left-0 w-full z-60 transition-all duration-500
      ${isVisible ? "translate-y-9" : "-translate-y-full"}
      ${headerBgClass}`}
      >
        <div className="text-black h-14 container place-items-center justify-between flex">
          <div className="flex size-full  place-items-center gap-40">
            <div>
              <Link
                href={`/`}
                className=" inline-block text-[35px] font-extralight font-serif italic "
              >
                Leyla
              </Link>
            </div>
            <ul className="flex pt-4 h-full uppercase text-[17px] text-black/90">
              <DynamicMenu />
            </ul>
          </div>

          <div className="flex  text-black/80  place-items-center h-full gap-2 justify-between">
            <SearchButton />
            <div>
              <IoCartOutline className="size-6" />
            </div>

            <div>
              <ProfileButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
