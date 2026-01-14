import React from "react";
import { Download } from "lucide-react";
import sprawozdanie2024 from "@/assets/documents/sprawozdanie_2024.pdf";

interface Report {
  year: number;
  title: string;
  file?: string;
}

const reports: Report[] = [
  {
    year: 2024,
    title: "Sprawozdanie finansowe za rok 2024",
    file: sprawozdanie2024,
  },
  { year: 2023, title: "Sprawozdanie finansowe za rok 2023" },
  { year: 2022, title: "Sprawozdanie finansowe za rok 2022" },
];

export function FinancialReports() {
  return (
    <section className="py-24 px-6 bg-[#e01a21]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-[#f9f7f1] mb-16 text-center">
          Sprawozdania finansowe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((report) => (
            <div
              key={report.year}
              className="bg-[#f9f7f1] rounded-xl p-8 space-y-6 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl text-[#050316] leading-relaxed">
                {report.title}
              </h3>

              {report.file ? (
                <a
                  href={report.file}
                  download
                  className="w-full bg-[#fac338] text-[#050316] py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#050316] hover:text-[#fac338] cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>Pobierz PDF</span>
                </a>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 py-4 px-6 rounded-xl flex items-center justify-center gap-3 cursor-not-allowed"
                >
                  <Download className="w-5 h-5" />
                  <span>Niedostępne</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
