import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";

export const CoverageSection = () => {
  const coverageAreas = [
    "Marginal Pinheiros",
    "Marginal Tietê",
    "Rod. Bandeirantes",
    "Rod. Anchieta",
    "Rod. Imigrantes",
    "Rod. Dutra",
    "Rod. Castelo Branco",
    "Zona Sul",
    "Zona Leste",
    "Zona Norte",
    "Zona Oeste",
    "Alphaville",
    "Guarulhos",
    "ABC Paulista",
  ];

  return (
    <section id="contato" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Atendemos Toda São Paulo
          </h2>
          <p className="text-lg sm:text-xl text-slate-300">
            Marginais, rodovias e todas as zonas da cidade
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {coverageAreas.map((area, index) => (
            <span
              key={index}
              className="bg-slate-800 text-slate-200 border border-slate-700 px-5 py-3 rounded-xl text-base font-semibold hover:border-orange-500 transition-all"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 lg:p-16 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-white">
            Precisa de Reboque Agora?
          </h3>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Plataforma hidráulica em até 30 minutos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-slate-100 text-orange-600 font-black text-lg px-12 py-6 rounded-2xl shadow-xl whitespace-nowrap"
            >
              <a
                href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Preciso de reboque urgente.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chamar no WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white font-black text-lg px-10 py-6 rounded-2xl shadow-lg whitespace-nowrap"
            >
              <a
                href={`tel:${CONTACT_CONFIG.phone.link}`}
                className="flex items-center justify-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>Ligar Agora</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
