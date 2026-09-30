import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Car,
  Truck,
  HardHat,
  Compass,
} from "lucide-react";
import { CONTACT_CONFIG } from "@/config/contact";

export const DispatchWidget = () => {
  const [vehicle, setVehicle] = useState("Carro Passeio");
  const [location, setLocation] = useState("");

  const vehicles = [
    { id: "Carro Passeio", label: "Carro / SUV", icon: Car },
    { id: "Van / Micro-ônibus", label: "Van", icon: Truck },
    { id: "Caminhão Leve / VUC", label: "Caminhão", icon: Truck },
    { id: "Máquinas / Equipamentos", label: "Máquina", icon: HardHat },
    { id: "4x4 / Veículo Antigo", label: "4x4 / Antigo", icon: Compass },
  ];

  const generateWhatsAppLink = () => {
    const locText = location.trim() ? location : "São Paulo";
    const message = `Olá! Preciso de guincho para um ${vehicle}. Local: ${locText}. Me informe tempo e valor.`;
    return `https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-slate-950 border-2 border-orange-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
        Chamar Guincho Agora
      </h2>
      <p className="text-lg sm:text-xl text-slate-200 mb-8">
        Plataforma hidráulica em até 30 minutos
      </p>

      <div className="mb-8">
        <label className="block text-base font-bold text-slate-300 mb-4">
          Qual é o seu veículo?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {vehicles.map((v) => {
            const Icon = v.icon;
            const isSelected = vehicle === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setVehicle(v.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 text-base font-bold transition-all duration-300 ${
                  isSelected
                    ? "bg-orange-600 text-white border-orange-500 shadow-xl shadow-orange-600/30 scale-105"
                    : "bg-slate-800 text-slate-300 border-slate-700 hover:border-orange-500 hover:bg-slate-700 hover:scale-105 active:scale-95"
                }`}
              >
                <Icon className="w-8 h-8 mb-2" />
                <span>{v.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-base font-bold text-slate-300 mb-4">
          Onde você está?
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Ex: Marginal Tietê, Zona Sul..."
          className="w-full bg-slate-800 border-2 border-slate-700 focus:border-orange-500 text-white rounded-2xl py-4 px-6 text-lg placeholder:text-slate-500 outline-none transition-all"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-lg px-8 py-6 rounded-2xl shadow-xl shadow-emerald-950/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-emerald-950/80 active:scale-95"
        >
          <MessageCircle className="w-6 h-6 fill-slate-950" />
          <span>Chamar no WhatsApp</span>
        </a>

        <a
          href={`tel:${CONTACT_CONFIG.phone.link}`}
          className="flex-1 flex items-center justify-center space-x-3 bg-orange-600 hover:bg-orange-500 text-white font-black text-lg px-8 py-6 rounded-2xl shadow-xl shadow-orange-950/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-orange-950/70 active:scale-95"
        >
          <Phone className="w-6 h-6" />
          <span>Ligar Agora</span>
        </a>
      </div>
    </div>
  );
};
