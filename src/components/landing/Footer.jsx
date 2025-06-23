"use client";

import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="pb-8 pt-4 px-4 md:px-12 border-t border-white/15 text-neutral-400">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div>
          <h2 className="text-lg font-brand tracking-tighter cursor-pointer hover:text-white transition-all ease-in-out duration-500">
            BIMO ESTUDIO
          </h2>
        </div>

        <div className="flex space-x-6">
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Facebook size={20} />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            <MessageCircle size={20} />
            <span className="sr-only">WhatsApp</span>
          </a>
        </div>

        <div>
          <p className="text-xs font-rcondensed cursor-pointer hover:text-white transition-all ease-in-out duration-500">
            designed by{" "}
            <a className="font-medium animate-pulse" href="#">
              ds
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
