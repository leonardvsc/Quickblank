import {
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-[#292929]">
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
