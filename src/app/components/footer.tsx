import React from "react";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2f3430] text-[#fbfbfe] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Kontakt */}
          <div className="space-y-4">
            <h3 className="text-2xl text-[#fac338] mb-6">Kontakt</h3>
            <div className="space-y-3">
              <a
                href="mailto:kobiecatranssmisja@gmail.com"
                className="block text-[#fbfbfe] hover:text-[#fac338] transition-colors duration-300"
              >
                kobiecatranssmisja@gmail.com
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.facebook.com/Transsmisja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fbfbfe] hover:text-[#fac338] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/kobiecatranssmisja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fbfbfe] hover:text-[#fac338] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Dane rejestrowe */}
          <div className="space-y-4">
            <h3 className="text-2xl text-[#fac338] mb-6">Dane rejestrowe</h3>
            <div className="space-y-2 text-[#fbfbfe]">
              <p>KRS: 0000394691</p>
              <p>NIP: 6751460490</p>
              <p>REGON: 122279281</p>
            </div>
          </div>

          {/* Adres */}
          <div className="space-y-4">
            <h3 className="text-2xl text-[#fac338] mb-6">Adres</h3>
            <address className="not-italic text-[#fbfbfe]">
              Grzegórzecka 47 / 1<br />
              31-532 Kraków
              <br />
              Polska
            </address>
          </div>

          {/* Konto bankowe */}
          <div className="space-y-4">
            <h3 className="text-2xl text-[#fac338] mb-6">Konto bankowe</h3>
            <p className="text-[#fbfbfe] break-all">
              14 1140 2004 0000 3202 7754 7568
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
