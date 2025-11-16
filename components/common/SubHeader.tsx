import Link from "next/link";
import { memo } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const SubHeader = () => {
  return (
    <div>
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
          <li className="flex flex-row place-items-center scale-x-100 gap-2">
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
