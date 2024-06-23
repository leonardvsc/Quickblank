const links = [
  { name: "Cheatsheets", href: "#cheatsheets" },
  { name: "Artificial Intelligences", href: "#ai" },
  { name: "Programming", href: "#programming" },
  { name: "Design", href: "#design" },
  { name: "Toolkit", href: "#toolkit" },
];

export function SubMenuMain() {
  return (
    <section className="">
      <div className="mx-auto flex flex-col gap-2 bg-gradient-to-r from-[#0f48a1] to-[#5371d3] py-12">
        <div className="mb-4">
          <h3 className="text-center text-lg font-bold text-white lg:text-3xl">
            Encontre o que você precisa!
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block rounded bg-[#0f48a1] px-4 py-2 text-sm font-medium text-[#b6d4ff] duration-300 hover:text-white hover:shadow-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
