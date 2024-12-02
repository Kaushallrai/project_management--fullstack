import React from "react";
import { Menu, Search, Settings } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-black">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <Menu className="w-8 h8 dark:text-white" />
          </button>
        )}

        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            className="w-full p-2 pl-8 placeholder-gray-500 bg-gray-100 border-none rounded focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center">
        <Link
          href="/settings"
          className="p-2 rounded h-min w-min hover:bg-gray-100"
        >
          <Settings className="w-6 h-6 cursor-pointer dark:text-white" />
        </Link>
        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
