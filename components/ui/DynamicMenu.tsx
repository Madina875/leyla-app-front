"use client";

import { useState } from "react";
import HoverModal from "./HoverModal";
import Link from "next/link";

const menuItems = ["Category", "Stores", "Products", "Accessories", "IT"];

const DynamicMenu = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <>
      {menuItems.map((item) => (
        <li
          key={item}
          className="relative h-full px-6 w-full"
          onMouseEnter={() => setActiveItem(item)}
          onMouseLeave={() => setActiveItem(null)}
        >
          <span className="cursor-pointer w-full inline-block transition-colors hover:text-red-500">
            {item}
          </span>

          <HoverModal
            open={activeItem === item}
            onClose={() => setActiveItem(null)}
            title={item}
          />
        </li>
      ))}
    </>
  );
};

export default DynamicMenu;
