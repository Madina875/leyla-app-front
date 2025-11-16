"use client";

import { useEffect, useState } from "react";
import HoverModal from "./HoverModal";
import Link from "next/link";

const menuItems = ["Category", "Stores", "Products", "Accessories", "IT"];

const DynamicMenu = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    if (activeItem) {
      localStorage.setItem("modalOpen", "true");
    } else {
      localStorage.setItem("modalOpen", "false");
    }
  }, [activeItem]);
  return (
    <>
      {menuItems.map((item) => (
        <li
          key={item}
          className="relative h-full px-6 w-full"
          onMouseEnter={() => setActiveItem(item)}
          onMouseLeave={() => setActiveItem(null)}
        >
          <span
            className={`cursor-pointer w-full inline-block transition-colors hover:text-red-500 ${
              activeItem === item
                ? "text-red-500 underline underline-offset-15"
                : ""
            }`}
          >
            {item}
          </span>

          <HoverModal
            open={activeItem === item}
            onClose={() => setActiveItem(null)}
          />
        </li>
      ))}
    </>
  );
};

export default DynamicMenu;
