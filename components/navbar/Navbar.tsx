'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
type Props = {};

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/login", title: "Login" },
  { path: "/register", title: "Register" },
]

const Navbar = (props: Props) => {
    const pathName = usePathname();
    console.log(pathName);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyLogo</div>
        <div className="hidden md:flex space-x-4">
          {
            links.map((link, index) => (
              <NavLink path={link.path} title={link.title} key={index}/>
            ))
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
