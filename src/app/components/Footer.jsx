/* eslint-disable @next/next/no-img-element */

export function Footer() {
  return (
    <footer className="mt-12 bg-[#292929] text-sm text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-12">
        <img
          src="https://s11.flagcounter.com/mini/99jm/bg_FFFFFF/txt_000000/border_CCCCCC/flags_0/"
          alt="Flag Counter"
          border="0"
        />

        <p>
          Desenvolvido com ❤️ por{" "}
          <a
            href="https://github.com/leonardvsc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Leonardo Victor
          </a>
        </p>
      </div>
    </footer>
  );
}
