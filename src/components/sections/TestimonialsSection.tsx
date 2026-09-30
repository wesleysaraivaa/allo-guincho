import React from "react";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcelo S.",
      car: "Toyota Corolla",
      rating: 5,
      text: "Chegou em 18 min. Motorista super cuidadoso com o carro.",
    },
    {
      name: "Renata M.",
      car: "Jeep Compass",
      rating: 5,
      text: "Sem raspões no para-choque. Recomendo muito!",
    },
    {
      name: "Carlos E.",
      car: "Ford Transit",
      rating: 5,
      text: "Plataforma reforçada e motorista profissional.",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Avaliações reais de quem já foi socorrido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-slate-200 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex text-amber-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-lg text-slate-700 font-medium mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div className="border-t border-slate-100 pt-4">
                <span className="font-black text-slate-900 text-lg block">
                  {t.name}
                </span>
                <span className="text-orange-600 font-semibold text-base">
                  {t.car}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
