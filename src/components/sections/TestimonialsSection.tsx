import React from "react";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcelo S.",
      car: "Toyota Corolla (Sedan)",
      location: "Marginal Pinheiros",
      time: "Chegada em 18 min",
      rating: 5,
      text: "Excelente atendimento! O guincho plataforma chegou super rápido e o motorista foi extremamente cuidadoso ao posicionar e amarrar as rodas.",
    },
    {
      name: "Renata M.",
      car: "Jeep Compass (SUV 4x4)",
      location: "Rod. dos Bandeirantes",
      time: "Chegada em 22 min",
      rating: 5,
      text: "O carro deu pane mecânica na estrada. O guincho plataforma recolheu o SUV sem nenhum tranco nem raspão no para-choque. Recomendo muito!",
    },
    {
      name: "Carlos E.",
      car: "Ford Transit (Van Comercial)",
      location: "Tatuapé - ZL",
      time: "Chegada em 15 min",
      rating: 5,
      text: "Precisei transportar nossa van de frota até a concessionária. Equipamento forte, plataforma reforçada e motorista muito profissional.",
    },
  ];

  return (
    <section id="depoimentos" className="py-16 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            O Que Dizem Quem Já Precisou
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Avaliações reais de clientes socorridos em rodovias e bairros de São Paulo:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <div className="flex text-amber-400 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 italic mb-4">"{t.text}"</p>
              <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">{t.name}</span>
                  <span className="text-orange-600 font-medium">{t.car}</span>
                </div>
                <span className="text-slate-500">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
