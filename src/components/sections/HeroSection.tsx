import React, { useState } from "react";
import { Phone, MessageCircle, Clock, ShieldCheck, CreditCard, MapPin, Zap, Car, Truck, Compass, HardHat, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";

const REAL_RESCUES = [
  {
    id: "jetta",
    src: "/WhatsApp Image 2026-09-18 at 20.59.15.jpeg",
    title: "VW Jetta Sedan em Plataforma",
    location: "Marginal Pinheiros • SP",
    type: "Sedan / Passeio",
  },
  {
    id: "audi",
    src: "/WhatsApp Image 2026-09-18 at 20.59.14.jpeg",
    title: "Audi A3 Esportivo",
    location: "Av. Paulista • SP",
    type: "Esportivo / Rebaixado",
  },
  {
    id: "jeep",
    src: "/WhatsApp Image 2026-09-18 at 20.57.27.jpeg",
    title: "Jeep Wrangler 4x4",
    location: "Rod. dos Bandeirantes",
    type: "Resgate 4x4 Off-Road",
  },
  {
    id: "van",
    src: "/WhatsApp Image 2026-09-18 at 20.57.27 (1).jpeg",
    title: "Van Escolar & Carga",
    location: "Tatuapé • Zona Leste",
    type: "Utilitário / Van",
  },
];

export const HeroSection = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState("Passeio / SUV");

  const currentRescue = REAL_RESCUES[activePhoto];

  const getWhatsAppMessage = () => {
    const text = `Olá! Preciso de guincho/reboque 24h urgente em SP para o meu veículo (${selectedVehicle}). Podem me enviar o tempo estimado e valor?`;
    return `https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden border-b-2 border-orange-500/30">

      <div className="container mx-auto px-4 py-10 lg:py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-emerald-500/40 rounded-full px-4 py-1.5 text-xs font-bold text-emerald-400 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>EQUIPE PRONTA • CHEGADA MÉDIA EM 15 A 25 MINUTOS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Precisa de Guincho Agora? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                Reboque Plataforma 24h
              </span> em São Paulo
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Atendimento mecânico imediato 24 horas por dia. Plataformas hidráulicas equipadas para embarque seguro de carros, SUVs, vans, 4x4, rebaixados e máquinas.
            </p>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-left shadow-xl max-w-xl mx-auto lg:mx-0">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 block mb-2.5 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                Selecione seu veículo para despacho rápido:
              </span>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "Passeio / SUV", label: "Carro / SUV", icon: Car },
                  { id: "Van / Utilitário", label: "Van / Carga", icon: Truck },
                  { id: "4x4 / Off-Road", label: "4x4 / Jipe", icon: Compass },
                  { id: "Máquinas", label: "Máquina", icon: HardHat },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedVehicle === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedVehicle(item.id)}
                      className={`flex items-center space-x-2 p-2.5 rounded-xl text-xs font-bold transition-all border ${
                        isSelected
                          ? "bg-orange-600 text-white border-orange-400 shadow-md shadow-orange-600/30"
                          : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700/60"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-amber-400"}`} />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 pt-1 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base px-8 py-7 rounded-2xl shadow-xl shadow-emerald-950/60 transition-all transform hover:-translate-y-0.5"
              >
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="w-6 h-6 fill-slate-950 flex-shrink-0" />
                  <div className="text-left leading-tight">
                    <span className="block font-black text-slate-950">Chamar Guincho no WhatsApp</span>
                    <span className="text-[11px] font-extrabold text-emerald-950 block">Atendimento Humano Imediato</span>
                  </div>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-black text-base px-7 py-7 rounded-2xl shadow-xl shadow-orange-950/50 transition-all transform hover:-translate-y-0.5"
              >
                <a
                  href={`tel:${CONTACT_CONFIG.phone.link}`}
                  className="flex items-center justify-center space-x-2.5"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <div className="text-left leading-tight">
                    <span className="block font-extrabold">Ligar 24h Agora</span>
                    <span className="text-[11px] text-amber-200 font-bold block">{CONTACT_CONFIG.phone.display}</span>
                  </div>
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="relative h-72 sm:h-88 lg:h-[390px] overflow-hidden bg-slate-950 group">
                <img
                  src={currentRescue.src}
                  alt={currentRescue.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-extrabold text-white border border-slate-700 flex items-center space-x-1.5 shadow-lg">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>{currentRescue.location}</span>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent p-5">
                  <span className="text-[11px] font-black text-orange-400 uppercase tracking-wider bg-orange-950/80 border border-orange-700/50 px-2.5 py-0.5 rounded-md inline-block mb-1">
                    Atendimento Real Allô Guincho
                  </span>
                  <h3 className="text-base font-extrabold text-white leading-tight">
                    {currentRescue.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Categoria: {currentRescue.type}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-950 border-t border-slate-800">
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                    Fotos de Resgates Reais em SP:
                  </span>
                  <span className="text-[10px] text-orange-400 font-bold">Clique para alternar</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {REAL_RESCUES.map((rescue, idx) => (
                    <button
                      key={rescue.id}
                      type="button"
                      onClick={() => setActivePhoto(idx)}
                      className={`relative rounded-xl overflow-hidden h-14 border-2 transition-all cursor-pointer ${
                        activePhoto === idx
                          ? "border-orange-500 ring-2 ring-orange-500/40 scale-105"
                          : "border-slate-800 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={rescue.src} alt={rescue.title} className="w-full h-full object-cover" />
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
