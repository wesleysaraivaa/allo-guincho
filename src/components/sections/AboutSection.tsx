import React from "react";

const imgHeroJetta = "/WhatsApp Image 2026-09-18 at 20.59.15.jpeg";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-50 border border-orange-200 px-3 py-1 rounded-full inline-block">
              Tradição & Confiança
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Sobre o Allô Guincho 24h
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Há mais de 10 anos atuando no setor de socorro automotivo e transporte veicular técnico na Região Metropolitana de São Paulo, interior e litoral.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Investimos continuamente em guinchos plataforma hidráulica de acionamento suave, adequados para carros de passeio, SUVs, carros automáticos, vans, VUCs, veículos 4x4, antigos e equipamentos industriais.
            </p>
            <div className="pt-2 flex items-center space-x-6 text-slate-900 font-bold text-sm">
              <div>
                <span className="block text-2xl font-black text-orange-600">10+</span>
                <span className="text-xs text-slate-500 font-normal">Anos de Atuação</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div>
                <span className="block text-2xl font-black text-emerald-600">15.000+</span>
                <span className="text-xs text-slate-500 font-normal">Reboques Concluídos</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl h-80">
            <img
              src={imgHeroJetta}
              alt="Equipe Allô Guincho 24h"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
