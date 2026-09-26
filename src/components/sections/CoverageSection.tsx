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
    "Alphaville / Barueri",
    "Guarulhos",
    "ABC Paulista",
  ];

  return (
    <section id="contato" className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center max-w-4xl mb-12">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Regiões Atendidas em São Paulo e Rodovias
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {coverageAreas.map((area, index) => (
            <span
              key={index}
              className="bg-white text-slate-700 border border-slate-200 px-3.5 py-1.5 rounded-lg text-xs font-medium"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <span className="inline-block bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-md mb-3">
            Atendimento Emergencial 24h
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-3 text-white">
            Precisa de Reboque Agora?
          </h2>
          <p className="text-slate-300 text-sm mb-8 max-w-xl mx-auto">
            Nossa equipe está pronta para despachar a plataforma hidráulica mais próxima até você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base px-8 py-6 rounded-xl shadow-lg shadow-emerald-900/40"
            >
              <a
                href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Preciso de reboque urgente.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chamar no WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-base px-8 py-6 rounded-xl shadow-md"
            >
              <a
                href={`tel:${CONTACT_CONFIG.phone.link}`}
                className="flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Ligar ({CONTACT_CONFIG.phone.display})</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
