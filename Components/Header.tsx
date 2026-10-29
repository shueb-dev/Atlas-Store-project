import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="navbar bg-blue-600 shadow-sm font-poppins text-white sticky top-0 z-50">
      <div className="flex-1 ">
        <Link href="/" className="btn btn-ghost text-xl">
          ATLAS STORE
        </Link>
      </div>
      <div className="flex-4">
        <ul className=" rounded-t-none p-2 flex justify-center gap-4 align-middle">
          <Link href="/Shop">Shop</Link>

          <Link href="/Categories">Categories</Link>

          <Link href="/Journal">Journal</Link>
        </ul>
      </div>
      <div className="flex gap-2 mr-2">
        <input
          type="text"
          placeholder="Search"
          className="input w-24 md:w-auto"
        />
      </div>
      <div className="flex align-middle justify-center mr-4">
        <a href="/">Cart(2)</a>
      </div>
    </div>
  );
}

export default Header;
