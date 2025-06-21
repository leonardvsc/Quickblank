import Link from "next/link";
import { RiArrowRightSLine } from "@remixicon/react";

const LINKS_DATA = {
  cheatsheets: {
    title: "Cheat Sheets",
    items: [
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
      {
        name: "MongoDB",
        href: "https://quickref.me/mongodb",
        bgColor: "#169b48",
      },
      { name: "PM2", href: "https://quickref.me/pm2", bgColor: "#190f4b" },
    ],
  },
  documentation: {
    title: "Documentation and Learning",
    items: [
      {
        name: "DevDocs",
        href: "https://devdocs.io/",
        bgColor: "#24282b",
      },
      {
        name: "MDN",
        href: "https://developer.mozilla.org/pt-BR/",
        bgColor: "#90b4f9",
      },
      {
        name: "W3Schools",
        href: "https://www.w3schools.com/",
        bgColor: "#07a86d",
      },
      {
        name: "FreeCodeCamp",
        href: "https://www.freecodecamp.org/",
        bgColor: "#1b1c31",
      },
    ],
  },
  ai: {
    title: "Artificial Intelligences",
    items: [
      {
        name: "ChatGPT",
        href: "https://chatgpt.com/",
        bgColor: "rgb(74 161 129 / 1)",
      },
      {
        name: "Claude AI",
        href: "https://claude.ai/",
        bgColor: "#2c2b27",
      },
      {
        name: "Copilot",
        href: "https://copilot.microsoft.com/",
        bgColor: "#51388c",
      },
      {
        name: "Blackbox",
        href: "https://www.blackbox.ai/",
        bgColor: "#111111",
      },
      {
        name: "DeepSeek",
        href: "https://chat.deepseek.com",
        textColor: "#000000",
        bgColor: "#3f7afe",
      },
      {
        name: "Qwen Chat",
        href: "https://chat.qwen.ai/",
        textColor: "#ffffff",
        bgColor: "#615CED",
      },
      {
        name: "V0",
        href: "https://v0.dev/",
        bgColor: "#000000",
      },
      {
        name: "Lovable",
        href: "https://lovable.dev/",
        textColor: "#000000",
        bgColor: "#f99e23",
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
    ],
  },
  cloudDev: {
    title: "Cloud Development",
    items: [
      {
        name: "CodeSandbox",
        href: "https://codesandbox.io/templates",
        bgColor: "#ddff50",
        textColor: "#000000",
      },
      {
        name: "StackBlitz",
        href: "https://stackblitz.com/",
        bgColor: "#1575f0",
      },
    ],
  },
  programming: {
    title: "Programming",
    items: [
      {
        name: "KodeKloud Free Labs",
        href: "https://kodekloud.com/pages/free-labs/",
        bgColor: "#1ab7fd",
      },
      {
        name: "Dev Resources",
        href: "https://devresourc.es/",
        bgColor: "#111111",
      },
      {
        href: "https://www.better-auth.com/",
        name: "Better Auth",
        bgColor: "#0d1117",
      },
      {
        name: "DriverJS",
        href: "https://driverjs.com/",
        bgColor: "#fce66c",
        textColor: "#000000",
      },
      {
        name: "React Just Parallax",
        href: "https://react-just-parallax.michalzalobny.com/",
        bgColor: "#afa3e1",
        textColor: "#000000",
      },
      {
        href: "https://reactbits.dev/",
        name: "React Bits",
        bgColor: "#000000",
        textColor: "#f7f7f7",
      },
    ],
  },
  tailwind: {
    title: "Tailwind CSS",
    items: [
      {
        name: "Readymade UI",
        href: "https://readymadeui.com/",
        bgColor: "#3758f9",
      },
      {
        name: "KitWind",
        href: "https://kitwind.io/products/",
        bgColor: "#4d51bf",
      },
      {
        name: "TailGrids",
        href: "https://tailgrids.com/",
        bgColor: "#3658f8",
      },
      {
        name: "Preline",
        href: "https://preline.co/",
        bgColor: "#2563ea",
      },
      {
        name: "Tailwind Toolbox",
        href: "https://www.tailwindtoolbox.com/",
        bgColor: "#3b7976",
      },
      {
        name: "TweakCN",
        href: "https://tweakcn.com/",
        bgColor: "#1e293b",
      },
    ],
  },
  design: {
    title: "Design",
    items: [
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
    ],
  },
  toolkit: {
    title: "Toolkit",
    items: [
      {
        name: "Whatsapp Link",
        href: "https://api.chatpro.com.br/gerador-de-links",
        bgColor: "#106359",
      },
    ],
  },
};

function SectionTitle({ title }) {
  return <h3 className="text-lg font-bold text-white">{title}</h3>;
}

const LinkCard = ({ name, href, textColor, bgColor }) => {
  const defaultBgColor = "#333333";
  const defaltTextColor = "#ffffff";
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
};

const LinksSection = ({ id, title, items }) => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-12">
      <div id={id} className="scroll-mt-24 pt-8">
        <SectionTitle title={title} />
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
        {items.map(({ name, href, textColor, bgColor }) => (
          <LinkCard
            key={name}
            name={name}
            href={href}
            textColor={textColor}
            bgColor={bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export function MainLinks() {
  return (
    <section className="bg-[#1a1a1a]">
      {Object.entries(LINKS_DATA).map(([key, { title, items }]) => (
        <LinksSection key={key} id={key} title={title} items={items} />
      ))}
    </section>
  );
}
