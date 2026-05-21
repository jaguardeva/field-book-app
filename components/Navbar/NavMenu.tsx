"use client";

import MENU_LIST from "@/utils/menu-list";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2">
      {MENU_LIST.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <Link
            href={item.href}
            key={index}
            className={`p-4 py-2 text-sm font-medium text-gray-500 rounded-full  transition-all ease-in-out ${isActive ? "bg-orange-100 text-orange-600" : "hover:text-gray-900"}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
