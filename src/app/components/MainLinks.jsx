import Link from "next/link";
import { RiArrowRightSLine } from "@remixicon/react";

const cheatsheets = [
  {
    name: "HTML",
    href: "https://quickref.me/html",
    bgColor: "#fc480b",
  },
  {
    name: "CSS",
    href: "https://quickref.me/css3",
    bgColor: "#264ee4",
  },
  {
    name: "JavaScript",
    href: "https://quickref.me/javascript",
    textColor: "#000000",
    bgColor: "#f7e018",
  },
  {
    name: "ES6",
    href: "https://quickref.me/es6",
    textColor: "#000000",
    bgColor: "#f7e018",
  },
  { name: "MongoDB", href: "https://quickref.me/mongodb", bgColor: "#169b48" },
];

const ai = [
  {
    name: "ChatGPT",
    href: "https://chatgpt.com/",
    bgColor: "rgb(74 161 129 / 1)",
  },
  {
    name: "Copilot",
    href: "https://www.bing.com/chat",
    bgColor: "#51388c",
  },
  {
    name: "Blackbox",
    href: "https://www.blackbox.ai/",
    bgColor: "#111111",
  },
  {
    name: "AI Colors",
    href: "https://aicolors.co/",
    bgColor: "#cc44a2",
  },
  {
    name: "Namelix",
    href: "https://namelix.com/",
    bgColor: "#565dc7",
  },
  {
    name: "Logo AI",
    href: "https://www.logoai.com/",
    bgColor: "#275cbe",
  },
];

const programming = [
  {
    name: "Dev Resources",
    href: "https://devresourc.es/",
    bgColor: "#111111",
  },
];

const tailwind = [
  {
    name: "Tailwind Toolbox",
    href: "https://www.tailwindtoolbox.com/",
    bgColor: "#3b7976",
  },
  {
    name: "TailGrids",
    href: "https://tailgrids.com/",
    bgColor: "#3658f8",
  },
];

const design = [
  {
    name: "PixaBay",
    href: "https://pixabay.com/",
    bgColor: "#00ab6c",
  },
  {
    name: "Fontjoy",
    href: "https://fontjoy.com/",
    bgColor: "#0e1ebd",
  },
];

const toolkit = [
  {
    name: "Whatsapp Link",
    href: "https://api.chatpro.com.br/gerador-de-links",
    bgColor: "#25f566",
  },
];

function TitleMainLinks({ title }) {
  return <h3 className="text-lg font-bold text-white">{title}</h3>;
}

function ButtonLink({ name, href, textColor, bgColor }) {
  const defaltTextColor = "#ffffff";
  const defaultBgColor = "#333333";
  return (
    <Link
      href={href}
      target="_blank"
      style={{
        backgroundColor: bgColor || defaultBgColor,
        color: textColor || defaltTextColor,
      }}
      className={`group flex items-center rounded px-4 py-4 text-sm font-medium duration-300 hover:scale-105`}
    >
      {name}
      <RiArrowRightSLine
        size={24}
        style={{ color: textColor || defaltTextColor }}
        className="ml-0 transition-all duration-300 group-hover:ml-2"
      />
    </Link>
  );
}

export function MainLinks() {
  return (
    <section className="bg-[#1a1a1a]">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-12">
        <div id="cheatsheets" className="pt-8">
          <TitleMainLinks title="Cheat Sheets" />
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {cheatsheets.map(({ name, href, textColor, bgColor }) => (
            <ButtonLink
              key={name}
              name={name}
              href={href}
              textColor={textColor}
              bgColor={bgColor}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-12">
        <div id="ai" className="pt-8">
          <TitleMainLinks title="Artificial Intelligences" />
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {ai.map(({ name, href, bgColor }) => (
            <ButtonLink key={name} name={name} href={href} bgColor={bgColor} />
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-12">
        <div id="programming" className="pt-8">
          <TitleMainLinks title="Programming" />
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {programming.map(({ name, href, bgColor }) => (
            <ButtonLink key={name} name={name} href={href} bgColor={bgColor} />
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-12">
        <div id="tailwind" className="pt-8">
          <TitleMainLinks title="Tailwind CSS" />
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {tailwind.map(({ name, href, bgColor }) => (
            <ButtonLink key={name} name={name} href={href} bgColor={bgColor} />
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-12">
        <div id="design" className="pt-8">
          <TitleMainLinks title="Design" />
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {design.map(({ name, href, bgColor }) => (
            <ButtonLink key={name} name={name} href={href} bgColor={bgColor} />
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-12">
        <div id="toolkit" className="pt-8">
          <TitleMainLinks title="Toolkit" />
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {toolkit.map(({ name, href, bgColor }) => (
            <ButtonLink key={name} name={name} href={href} bgColor={bgColor} />
          ))}
        </div>
      </div>
    </section>
  );
}
