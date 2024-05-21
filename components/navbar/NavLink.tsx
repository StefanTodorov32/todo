'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


type Props = {
  path: string;
  title: string;
};

const NavLink = (props: Props) => {
    const pathName = usePathname();
  return (
    <Link href={props.path} className={`px-3 py-2 rounded-md text-sm font-medium  ${pathName == props.path ? "bg-slate-800 text-white" : "text-gray-300 hover:bg-slate-600 hover:text-white"}`}>
      {props.title}
    </Link>
  );
};

export default NavLink;
