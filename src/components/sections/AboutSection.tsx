import React from "react";
import { ShieldCheck, Clock, Award } from "lucide-react";

const imgHeroJetta = "/resgate-jetta-sedan.jpg";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
            Por Que Escolher Allô Guincho?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            10+ anos de experiência em reboques seguros em São Paulo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 text-center hover:border-orange-500 transition-all">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Seguro Total
            </h3>
            <p className="text-base text-slate-600">
              Plataforma hidráulica suave para proteger seu veículo
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 text-center hover:border-emerald-500 transition-all">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Chegada Rápida
            </h3>
            <p className="text-base text-slate-600">
              Média de 15 a 25 minutos em toda São Paulo
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 text-center hover:border-blue-500 transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Experiência
            </h3>
            <p className="text-base text-slate-600">
              15.000+ reboques concluídos com sucesso
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black mb-4">
                Atendemos Todos os Tipos de Veículos
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                Carros, SUVs, vans, caminhões leves, máquinas industriais, 4x4 e
                veículos clássicos. Nossa frota está preparada para qualquer
                situação.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-orange-700 text-white font-bold text-sm px-4 py-2 rounded-xl">
                  Carros
                </span>
                <span className="bg-orange-700 text-white font-bold text-sm px-4 py-2 rounded-xl">
                  SUVs
                </span>
                <span className="bg-orange-700 text-white font-bold text-sm px-4 py-2 rounded-xl">
                  Vans
                </span>
                <span className="bg-orange-700 text-white font-bold text-sm px-4 py-2 rounded-xl">
                  Caminhões
                </span>
                <span className="bg-orange-700 text-white font-bold text-sm px-4 py-2 rounded-xl">
                  Máquinas
                </span>
                <span className="bg-orange-700 text-white font-bold text-sm px-4 py-2 rounded-xl">
                  4x4
                </span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imgHeroJetta}
                alt="Equipe Allô Guincho 24h"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
