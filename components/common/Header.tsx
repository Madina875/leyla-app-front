import Link from "next/link";
import { memo } from "react";
import { IoCartOutline } from "react-icons/io5";
import ProfileButton from "../ui/ProfileButton";
import SearchButton from "../ui/SearchButton";
import DynamicMenu from "../ui/DynamicMenu";

const Header = () => {
  return (
    <header>
      <div className="text-black h-14 container place-items-center justify-between flex">
        <div className="flex size-full  place-items-center gap-40">
          <div>
            <Link
              href={`/`}
              className="pb-3 inline-block text-[35px] font-extralight font-serif italic "
            >
              Leyla
            </Link>
          </div>
          <ul className="flex pt-3.5 h-full uppercase text-[17px] text-black/90">
            <DynamicMenu />
          </ul>
        </div>

        <div className="flex pb-3 text-black/80  place-items-center h-full gap-2 justify-between">
          <SearchButton />
          <div>
            <IoCartOutline className="size-6" />
          </div>

          <div>
            <ProfileButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
