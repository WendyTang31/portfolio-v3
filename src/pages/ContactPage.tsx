import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Linkedin, Mail } from "lucide-react";
import { Footer } from "../components/Footer";
import { SITE } from "../data/works";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <header className="px-6 py-6 md:px-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600 hover:text-black"
        >
          <ArrowLeft size={14} />
          Home
        </Link>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>
          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
            Get in touch
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            Open to robotics and AI hardware design roles. Based in the US.
            Graduated RISD 2026.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1a1a1a] bg-[#1a1a1a] px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-px"
            >
              <Mail size={16} />
              {SITE.email}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-6 py-3.5 text-sm font-medium text-gray-800 transition-colors hover:border-black"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
