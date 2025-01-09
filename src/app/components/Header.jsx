"use client";

import {
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full duration-300 ${scrollY > 100 ? "bg-[#292929] shadow" : ""}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="Logo" width={200} height={43} />
        </Link>
        <NavSocial />
      </div>
    </header>
  );
}

function NavSocial() {
  return (
    <div className="flex gap-2 rounded-full bg-zinc-700 p-2 px-4">
      <RiGithubLine size={24} className="text-white" />
      <RiInstagramLine size={24} className="text-pink-600" />
      <RiTwitterXLine size={24} className="text-blue-500" />
    </div>
  );
}
