import { RiCodeBlock, RiMindMap } from "@remixicon/react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative">
      <video
        src="/bg_video.mp4"
        autoPlay
        playsInline
        muted
        loop
        className="absolute left-0 top-0 h-full w-full object-cover opacity-5"
      ></video>
      <div className="relative">
        <div className="mx-auto max-w-3xl justify-center px-6 py-32 text-center lg:flex lg:h-[90vh] lg:flex-col lg:items-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="block text-white">
              Sua referência para estudos!
            </span>
          </h1>
          <p className="mt-4 text-gray-300">
            Siga o caminho para o sucesso nos seus estudos e projetos.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="https://roadmap.sh"
              target="_blank"
              className="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 lg:w-auto"
            >
              <div className="flex items-center justify-center gap-2">
                <RiMindMap size={24} />
                Roadmap
              </div>
            </Link>
            <Link
              href="https://www.fronteditor.dev"
              target="_blank"
              className="block w-full rounded bg-zinc-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-600 lg:w-auto"
            >
              <div className="flex items-center justify-center gap-2">
                <RiCodeBlock size={24} />
                Front Editor
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
