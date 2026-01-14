import React from "react";
import logoImage from "@/assets/logo.png";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#e01a21]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-12">
          <img
            src={logoImage}
            alt="Kobieca Transsmisja Logo"
            className="w-80 h-80 object-contain"
          />
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#f9f7f1] leading-tight">
          Stowarzyszenie Kobieca Transsmisja
        </h1>

        <p className="text-xl md:text-2xl text-[#f9f7f1] leading-relaxed max-w-3xl mx-auto">
          Kobieca Transsmisja to stowarzyszenie artystyczno-społeczne działające
          od 2009 roku w obszarze muzyki, teatru, performansu, edukacji
          artystycznej oraz ekologii. Naszą misją jest wspieranie kobiecej
          ekspresji twórczej oraz podejmowanie działań na rzecz ekologii.
        </p>
      </div>
    </section>
  );
}
