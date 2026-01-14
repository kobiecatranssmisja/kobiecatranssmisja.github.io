import React from "react";
import gallery1 from "@/assets/gallery/gallery_1.jpeg";
import gallery2 from "@/assets/gallery/gallery_2.jpeg";
import gallery3 from "@/assets/gallery/gallery_3.jpeg";
import gallery4 from "@/assets/gallery/gallery_4.jpeg";
import gallery5 from "@/assets/gallery/gallery_5.jpeg";
import gallery6 from "@/assets/gallery/gallery_6.jpeg";
import gallery7 from "@/assets/gallery/gallery_7.jpeg";
import gallery8 from "@/assets/gallery/gallery_8.jpeg";
import gallery9 from "@/assets/gallery/gallery_9.jpeg";
import gallery10 from "@/assets/gallery/gallery_10.jpeg";
import gallery11 from "@/assets/gallery/gallery_11.jpeg";
import gallery12 from "@/assets/gallery/gallery_12.jpeg";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
];

export function Gallery() {
  return (
    <section className="py-24 px-6 bg-[#f9f7f1]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-[#050316] mb-16 text-center">
          Galeria
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
