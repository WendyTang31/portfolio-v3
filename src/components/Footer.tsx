import { Linkedin } from "lucide-react";
import { SITE } from "../data/works";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#fcfcfc] px-8 py-8 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
          {SITE.name} © 2026
        </p>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-gray-800 transition-all hover:border-black hover:bg-black hover:text-white"
        >
          <Linkedin size={14} strokeWidth={1.5} />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
