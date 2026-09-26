import React, { useState } from "react";
import { Phone, Navigation, ShieldCheck, Zap, Car, Truck, Wrench, AlertTriangle, Key, HardHat, Compass } from "lucide-react";
import { CONTACT_CONFIG } from "@/config/contact";

export const DispatchWidget = () => {
  const [vehicle, setVehicle] = useState("Carro Passeio");
  const [issue, setIssue] = useState("Pane Mecânica");
  const [location, setLocation] = useState("");

  const vehicles = [
    { id: "Carro Passeio", label: "Passeio / SUV", icon: Car },
    { id: "Van / Micro-ônibus", label: "Van Escolar / Carga", icon: Truck },
    { id: "Caminhão Leve / VUC", label: "VUC / HR Baú", icon: Wrench },
    { id: "Máquinas / Equipamentos", label: "Máquinas / Gerador", icon: HardHat },
    { id: "4x4 / Veículo Antigo", label: "4x4 / Antigo", icon: Compass },
  ];

  const issues = [
    { id: "Pane Mecânica / Motor", label: "Pane Mecânica", icon: Wrench },
    { id: "Acidente / Colisão", label: "Colisão / Sinistro", icon: AlertTriangle },
    { id: "Roda Travada / Pneu", label: "Roda Trava / Pneu", icon: Wrench },
    { id: "Câmbio Travado / Sem Marcha", label: "Câmbio Travado", icon: Key },
    { id: "Transporte Agendado / Viagem", label: "Transporte Agendado", icon: Truck },
  ];

  const popularLocations = [
    "Marginal Pinheiros",
    "Marginal Tietê",
    "Rodovias (Bandeirantes/Dutra)",
    "Zona Sul",
    "Zona Leste",
    "Alphaville/Barueri",
  ];

  const generateWhatsAppLink = () => {
    const locText = location.trim() ? location : "São Paulo (A definir)";
    const message = `🚨 *SOLICITAÇÃO DE REBOQUE URGENTE - ALLÔ GUINCHO* 🚨\n\n` +
      `🚗 *Tipo de Veículo:* ${vehicle}\n` +
      `🛠️ *Motivo:* ${issue}\n` +
      `📍 *Localização:* ${locText}\n\n` +
      `Por favor, me informe a estimativa de tempo e o valor para atendimento imediato!`;
    
    return `https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 lg:p-8 shadow-2xl text-white relative overflow-hidden">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Plantão 24h SP Ativo
          </span>
        </div>
        <div className="flex items-center text-xs text-slate-400">
          <Zap className="w-3.5 h-3.5 text-amber-400 mr-1" />
          <span>Resposta em ~1 min</span>
        </div>
      </div>

      <h3 className="text-2xl font-black mb-2 text-white flex items-center">
        ⚡ Chamar Reboque Agora
      </h3>
      <p className="text-sm text-slate-300 mb-6">
        Selecione as opções para envio imediato da plataforma hidráulica:
      </p>

      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          1. Qual é o seu veículo?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {vehicles.map((v) => {
            const Icon = v.icon;
            const isSelected = vehicle === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setVehicle(v.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white border-orange-500 shadow-lg shadow-orange-600/30 scale-[1.02]"
                    : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600"
                }`}
              >
                <Icon className="w-5 h-5 mb-1 text-amber-300 flex-shrink-0" />
                <span className="text-center text-[11px] sm:text-xs leading-tight">{v.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          2. Qual o motivo do chamado?
        </label>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {issues.map((iss) => {
            const Icon = iss.icon;
            const isSelected = issue === iss.id;
            return (
              <button
                key={iss.id}
                type="button"
                onClick={() => setIssue(iss.id)}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20"
                    : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700"
                }`}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{iss.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          3. Onde você está em SP?
        </label>
        <div className="relative">
          <Navigation className="w-4.5 h-4.5 absolute left-3.5 top-3.5 text-orange-500" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ex: Marginal Tietê altura da Ponte da Lapa, Moema..."
            className="w-full bg-slate-950/80 border border-slate-700 focus:border-orange-500 text-white rounded-xl py-3 pl-10 pr-4 text-base sm:text-sm placeholder:text-slate-500 outline-none transition-colors"
          />
        </div>
        <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
          <span className="text-[11px] text-slate-500">Locais rápidos:</span>
          {popularLocations.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => setLocation(loc)}
              className="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-1 rounded-md transition-colors"
            >
              + {loc}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-6 rounded-xl shadow-lg shadow-emerald-900/40 text-sm sm:text-base transition-all transform hover:-translate-y-0.5 text-center"
        >
          <span>📱 Solicitado via WhatsApp (Orçamento em 1 min)</span>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={`tel:${CONTACT_CONFIG.phone.link}`}
            className="flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>Ligar 24h ({CONTACT_CONFIG.phone.display})</span>
          </a>
          <div className="flex items-center justify-center text-xs text-slate-400 bg-slate-800/60 rounded-xl px-3 py-2.5 border border-slate-700/50">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mr-1.5 flex-shrink-0" />
            <span>Plataforma 100% Segura</span>
          </div>
        </div>
      </div>
    </div>
  );
};
