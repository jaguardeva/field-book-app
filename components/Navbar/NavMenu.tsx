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
            className={`relative flex items-center p-4 py-2 text-sm font-medium text-gray-500 h-[60px] transition-all ease-in-out ${isActive ? "text-orange-600" : "hover:text-gray-900 hover:bg-gray-50"}`}
          >
            {item.label}
            {isActive && (
              <div className="absolute bottom-0 w-full h-0.5 translate-x-1/2 bg-orange-600 rounded-full right-1/2"></div>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
