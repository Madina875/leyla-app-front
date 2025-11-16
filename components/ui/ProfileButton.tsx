import { memo } from "react";
import { Popover } from "antd";
import { LuUser } from "react-icons/lu";

const ProfileButton = () => {
  const content = (
    <div>
      <p className="font-medium">Sign in to join our community!</p>

      <ul className="mt-3 flex flex-col italic text-gray-700">
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
  const text = <span className="text-[16px]">Profile</span>;
  return (
    <div>
      <Popover
        placement="bottomRight"
        title={text}
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
