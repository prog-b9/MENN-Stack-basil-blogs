import Link from "next/link";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="container">
      <div className="flex items-center flex-wrap bg-primaryColor/20 mt-5 rounded-full border-2 border-primaryColor">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 px-3   "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="m-3 text-xl text-primaryColor font-bold">
            Tailblocks
          </span>
        </Link>
        <div className="mr-auto m-3 block sm:hidden">
          <HiMenuAlt2 size={30} className="text-secondColor" />
        </div>

        <nav className="hidden  sm:flex flex-wrap items-center gap-4  justify-center">
          <Link
            href={"/"}
            className="hover:text-primaryColor hover:font-bold transition-all duration-100"
          >
            First Link
          </Link>
          <Link
            href={"/"}
            className="hover:text-primaryColor hover:font-bold transition-all duration-100"
          >
            Second Link
          </Link>
          <Link
            href={"/"}
            className="hover:text-primaryColor hover:font-bold transition-all duration-100"
          >
            Third Link
          </Link>
          <Link
            href={"/"}
            className="hover:text-primaryColor hover:font-bold transition-all duration-100"
          >
            Fourth Link
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
