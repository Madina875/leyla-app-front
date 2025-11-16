import { memo } from "react";
import { Popover } from "antd";
import { LuUser } from "react-icons/lu";

const ProfileButton = () => {
  const content = (
    <div>
      <div className="flex place-items-center gap-3 mb-3">
        <div className="bg-gray-100 rounded-full size-10"></div>
        <span className="text-[16px] font-light">Profile</span>
      </div>
      <p className=" text-[15px]">Sign in to join our community!</p>

      <ul className="mt-3 flex flex-col italic text-gray-900">
        <li className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer transition">
          Orders
        </li>
        <li className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer transition">
          Cart
        </li>
        <li className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer transition">
          Delivery
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <Popover
        placement="bottomRight"
        content={content}
        arrow={false}
        trigger="hover"
        overlayClassName="custom-popover"
      >
        <LuUser className="size-6 cursor-pointer" />
      </Popover>
    </div>
  );
};

export default memo(ProfileButton);
