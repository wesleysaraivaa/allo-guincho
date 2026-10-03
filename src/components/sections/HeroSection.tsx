import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";

const REAL_RESCUES = [
  {
    id: "jetta",
    src: "/resgate-jetta-sedan.jpg",
    title: "VW Jetta Sedan em Plataforma",
    location: "Marginal Pinheiros • SP",
    type: "Sedan / Passeio",
  },
  {
    id: "audi",
    src: "/resgate-audi-a3.jpg",
    title: "Audi A3 Esportivo",
    location: "Av. Paulista • SP",
    type: "Esportivo / Rebaixado",
  },
  {
    id: "jeep",
    src: "/resgate-jeep-wrangler.jpg",
    title: "Jeep Wrangler 4x4",
    location: "Rod. dos Bandeirantes",
    type: "Resgate 4x4 Off-Road",
  },
  {
    id: "van",
    src: "/resgate-van-escolar.jpg",
    title: "Van Escolar & Carga",
    location: "Tatuapé • Zona Leste",
    type: "Utilitário / Van",
  },
];

export const HeroSection = () => {
  const [activePhoto, setActivePhoto] = useState(0);

  const currentRescue = REAL_RESCUES[activePhoto];

  const nextPhoto = () => {
    setActivePhoto((prev) => (prev + 1) % REAL_RESCUES.length);
  };

  const prevPhoto = () => {
    setActivePhoto(
      (prev) => (prev - 1 + REAL_RESCUES.length) % REAL_RESCUES.length,
    );
  };

  const getWhatsAppMessage = () => {
    const text = `Olá! Preciso de guincho/reboque 24h urgente em SP. Podem me enviar o tempo estimado e valor?`;
    return `https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden border-b-2 border-orange-500/30">
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-32 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-emerald-500/40 rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-bold text-emerald-400 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="hidden sm:inline">
                EQUIPE PRONTA • CHEGADA MÉDIA EM 15 A 25 MINUTOS
              </span>
              <span className="sm:hidden">24h • Chegada em 15-25 min</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
              Precisa de Guincho Agora? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                Reboque Plataforma 24h
              </span>{" "}
              em São Paulo
            </h1>

            <p className="text-slate-200 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Atendimento mecânico imediato 24 horas por dia. Plataformas
              hidráulicas equipadas para embarque seguro de carros, SUVs, vans,
              4x4, rebaixados e máquinas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base lg:text-lg px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 rounded-2xl shadow-xl shadow-emerald-950/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-emerald-950/80 active:scale-95"
              >
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 sm:space-x-3"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 fill-slate-950 flex-shrink-0" />
                  <div className="text-left leading-tight">
                    <span className="block font-black text-slate-950 text-sm sm:text-base">
                      Chamar Guincho no WhatsApp
                    </span>
                    <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-extrabold text-emerald-950 block">
                      Atendimento Humano Imediato
                    </span>
                  </div>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-orange-700 hover:bg-orange-600 text-white font-black text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 rounded-2xl shadow-xl shadow-orange-950/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-orange-950/70 active:scale-95"
              >
                <a
                  href={`tel:${CONTACT_CONFIG.phone.link}`}
                  className="flex items-center justify-center space-x-2 sm:space-x-2.5"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                  <div className="text-left leading-tight">
                    <span className="block font-extrabold text-sm sm:text-base">
                      Ligar 24h Agora
                    </span>
                    <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-white font-bold block">
                      {CONTACT_CONFIG.phone.display}
                    </span>
                  </div>
                </a>
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px] overflow-hidden bg-slate-950 group">
                <img
                  src={currentRescue.src}
                  alt={currentRescue.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  fetchPriority={activePhoto === 0 ? "high" : "auto"}
                  loading={activePhoto === 0 ? "eager" : "lazy"}
                  decoding="async"
                  width={800}
                  height={550}
                />

                <button
                  type="button"
                  onClick={prevPhoto}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-slate-950 text-white p-2 sm:p-3 rounded-full backdrop-blur-md border border-slate-700 transition-all hover:scale-110 z-10"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  type="button"
                  onClick={nextPhoto}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-slate-950 text-white p-2 sm:p-3 rounded-full backdrop-blur-md border border-slate-700 transition-all hover:scale-110 z-10"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-slate-950/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-extrabold text-white border border-slate-700 flex items-center space-x-1.5 shadow-lg">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                  <span className="truncate">{currentRescue.location}</span>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent p-4 sm:p-6">
                  <span className="text-[10px] sm:text-[11px] font-black text-orange-400 uppercase tracking-wider bg-orange-950/80 border border-orange-700/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md inline-block mb-1 sm:mb-2">
                    Atendimento Real Allô Guincho
                  </span>
                  <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold text-white leading-tight">
                    {currentRescue.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 font-semibold">
                    Categoria: {currentRescue.type}
                  </p>
                </div>

                <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-1.5">
                  {REAL_RESCUES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActivePhoto(idx)}
                      className="p-2.5 -m-1 inline-flex items-center justify-center focus:outline-none"
                      aria-label={`Ver foto ${idx + 1}`}
                    >
                      <span
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all block ${
                          activePhoto === idx
                            ? "bg-orange-500 scale-125"
                            : "bg-slate-500 hover:bg-slate-400"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden md:block p-4 bg-slate-950 border-t border-slate-800">
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                    Fotos de Resgates Reais em SP:
                  </span>
                  <span className="text-[10px] text-orange-400 font-bold">
                    Clique para alternar
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {REAL_RESCUES.map((rescue, idx) => (
                    <button
                      key={rescue.id}
                      type="button"
                      onClick={() => setActivePhoto(idx)}
                      className={`relative rounded-xl overflow-hidden h-16 border-2 transition-all duration-300 cursor-pointer ${
                        activePhoto === idx
                          ? "border-orange-500 ring-2 ring-orange-500/40 scale-105 shadow-lg shadow-orange-500/20"
                          : "border-slate-800 opacity-60 hover:opacity-100 hover:scale-105 hover:border-slate-600"
                      }`}
                    >
                      <img
                        src={rescue.src}
                        alt={rescue.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width={120}
                        height={64}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
