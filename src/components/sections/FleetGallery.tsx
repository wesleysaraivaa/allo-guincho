import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MapPin,
  MessageSquareText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";

const imgHeroJetta = "/resgate-jetta-sedan.jpg";
const imgAudi = "/resgate-audi-a3.jpg";
const imgToro = "/resgate-fiat-toro.jpg";
const imgVanEscolar = "/resgate-van-escolar.jpg";
const imgVanTransit = "/resgate-van-transit.jpg";
const imgHyundaiHR = "/resgate-hyundai-hr.jpg";
const imgCaminhaoBau = "/resgate-caminhao-bau.jpg";
const imgMaquinas = "/resgate-maquinas.jpg";
const imgMaquinario = "/resgate-maquinario.jpg";
const imgJeep4x4 = "/resgate-jeep-wrangler.jpg";
const imgCarroAntigo = "/resgate-carro-antigo.jpg";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "all" | "carros" | "vans" | "pesados" | "especiais";
  location: string;
  badge: string;
  timeTag: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: imgHeroJetta,
    title: "Jetta Sedan",
    category: "carros",
    location: "Zona Sul • SP",
    badge: "Passeio",
    timeTag: "24h",
  },
  {
    id: 2,
    src: imgAudi,
    title: "Audi A3",
    category: "carros",
    location: "Bandeirantes",
    badge: "Esportivo",
    timeTag: "24h",
  },
  {
    id: 3,
    src: imgToro,
    title: "Fiat Toro 4x4",
    category: "carros",
    location: "Zona Oeste",
    badge: "SUV",
    timeTag: "24h",
  },
  {
    id: 4,
    src: imgVanEscolar,
    title: "Van Escolar",
    category: "vans",
    location: "ABC Paulista",
    badge: "Utilitário",
    timeTag: "24h",
  },
  {
    id: 5,
    src: imgVanTransit,
    title: "Ford Transit",
    category: "vans",
    location: "Centro SP",
    badge: "Carga",
    timeTag: "24h",
  },
  {
    id: 6,
    src: imgHyundaiHR,
    title: "Hyundai HR",
    category: "vans",
    location: "Marginal Tietê",
    badge: "VUC",
    timeTag: "24h",
  },
  {
    id: 7,
    src: imgCaminhaoBau,
    title: "Caminhão Baú",
    category: "pesados",
    location: "Anchieta",
    badge: "Pesado",
    timeTag: "24h",
  },
  {
    id: 8,
    src: imgMaquinas,
    title: "Compressor",
    category: "pesados",
    location: "Obras SP",
    badge: "Industrial",
    timeTag: "24h",
  },
  {
    id: 9,
    src: imgMaquinario,
    title: "Maquinário",
    category: "pesados",
    location: "Rodoanel",
    badge: "Pesado",
    timeTag: "24h",
  },
  {
    id: 10,
    src: imgJeep4x4,
    title: "Jeep 4x4",
    category: "especiais",
    location: "Serra do Mar",
    badge: "Off-Road",
    timeTag: "24h",
  },
  {
    id: 11,
    src: imgCarroAntigo,
    title: "Carro Antigo",
    category: "especiais",
    location: "Clássicos",
    badge: "Coleção",
    timeTag: "24h",
  },
];

const CATEGORIES = [
  { key: "all", label: "Todas as Fotos" },
  { key: "carros", label: "Carros & SUVs" },
  { key: "vans", label: "Vans & Utilitários" },
  { key: "pesados", label: "Máquinas & Pesados" },
  { key: "especiais", label: "4x4 & Antigos" },
];

export const FleetGallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null,
  );
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === "all" || item.category === activeCategory,
  );

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = Math.min(window.innerWidth * 0.8, 400);
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev! === 0 ? filteredItems.length - 1 : prev! - 1,
    );
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev! === filteredItems.length - 1 ? 0 : prev! + 1,
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft")
        setSelectedPhotoIndex((prev) =>
          prev! === 0 ? filteredItems.length - 1 : prev! - 1,
        );
      if (e.key === "ArrowRight")
        setSelectedPhotoIndex((prev) =>
          prev! === filteredItems.length - 1 ? 0 : prev! + 1,
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, filteredItems.length]);

  return (
    <section
      id="frota"
      className="py-20 bg-slate-900 text-white scroll-mt-20 overflow-hidden relative"
    >
      {/* Background visual elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Reboques Reais
          </h2>
          <p className="text-lg sm:text-xl text-slate-300">
            Veja nossa frota em ação em São Paulo
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => scrollSlider("left")}
            className="w-14 h-14 rounded-full bg-slate-800 hover:bg-orange-600 border-2 border-slate-700 hover:border-orange-500 text-white flex items-center justify-center transition-all shadow-lg active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={() => scrollSlider("right")}
            className="w-14 h-14 rounded-full bg-slate-800 hover:bg-orange-600 border-2 border-slate-700 hover:border-orange-500 text-white flex items-center justify-center transition-all shadow-lg active:scale-95"
            aria-label="Próximo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Interactive Slider Track */}
        <div
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth pb-8 pt-2 snap-x snap-mandatory no-scrollbar scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] snap-start group relative rounded-3xl overflow-hidden bg-slate-800/80 border-2 border-slate-700/80 hover:border-orange-500 transition-all duration-300 shadow-xl cursor-pointer flex-shrink-0"
            >
              {/* Image Container */}
              <div className="h-80 w-full overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={320}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-700 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-lg">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-2 text-sm text-orange-300 font-medium mb-2">
                    <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
            Precisa de Reboque Agora?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Nossa plataforma hidráulica chega em até 30 minutos
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-slate-100 text-orange-800 font-black text-lg px-12 py-6 rounded-2xl shadow-xl whitespace-nowrap"
          >
            <a
              href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Vi as fotos e preciso de um guincho agora.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
            >
              <MessageSquareText className="w-6 h-6" />
              <span>Chamar no WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center border border-slate-700 shadow-xl transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo View */}
            <div className="relative h-[55vh] sm:h-[65vh] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[selectedPhotoIndex].src}
                alt={filteredItems[selectedPhotoIndex].title}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev / Next Controls */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-orange-500 flex items-center justify-center shadow-2xl transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-orange-500 flex items-center justify-center shadow-2xl transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Photo Metadata Footer */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 text-xs text-orange-400 font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{filteredItems[selectedPhotoIndex].location}</span>
                  <span>•</span>
                  <span className="text-slate-400">
                    {filteredItems[selectedPhotoIndex].badge}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white">
                  {filteredItems[selectedPhotoIndex].title}
                </h3>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  asChild
                  className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-md"
                >
                  <a
                    href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Gostaria de um guincho similar ao do atendimento: ${encodeURIComponent(filteredItems[selectedPhotoIndex].title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <MessageSquareText className="w-4 h-4" />
                    <span>Pedir Reboque Igual</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FleetGallery;
