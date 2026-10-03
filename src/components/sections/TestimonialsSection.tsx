import React from "react";
import { Star, MapPin, ArrowUpRight } from "lucide-react";

const GOOGLE_REVIEW_LINK = "https://share.google/tuC5kMknuXs5Yztkf";

const GOOGLE_TESTIMONIALS = [
  {
    name: "Sergio Saito",
    date: "3 meses atrás",
    rating: 5,
    text: "Fabio ótimo profissional, atencioso, muito educado. Fez um ótimo serviço de rebocar o carro que quebrou, preço bom, atendimento rápido demais. Recomendo muito obrigado.",
    initials: "SS",
  },
  {
    name: "Anderson.jhonata@gmail.com Gomes",
    date: "2 anos atrás",
    rating: 5,
    text: "Obrigado, Fábio, pelo serviço que você faz. Eu, com meu veículo quebrado e minha família junto, poderia ter ficado horas esperando no local. Você chegou rápido e foi educado. Parabéns! Continue assim.",
    initials: "AG",
  },
  {
    name: "Chris Matos",
    date: "3 meses atrás",
    rating: 5,
    text: "Fábio foi muito educado ao telefone e nos atendeu com agilidade, chegando no local onde o nosso carro parou no tempo que ele havia estimado. No percurso, foi bastante prestativo.",
    initials: "CM",
  },
  {
    name: "Diego Luiz",
    date: "3 meses atrás",
    rating: 5,
    text: "Serviço top, pontual e cuidadoso. Chegou no horário marcado, preço bom! Super recomendo para quem precisa de guincho em SP.",
    initials: "DL",
  },
  {
    name: "Anderson Saito",
    date: "3 meses atrás",
    rating: 5,
    text: "Excelente profissional! Recomendo para todos que precisar, super atencioso e muito cuidadoso com o veículo. Atendimento 5 estrelas.",
    initials: "AS",
  },
  {
    name: "Marcos kobra",
    date: "3 meses atrás",
    rating: 5,
    text: "Sempre foi muito solícito e cuidadoso com o carro. Chegou rápido, preço justo. Recomendo de olhos fechados o serviço do Allô Guincho.",
    initials: "MK",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 sm:py-24 bg-slate-50 scroll-mt-20 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white border-2 border-amber-200 rounded-full px-4 py-2 mb-6 shadow-md hover:shadow-lg hover:border-amber-300 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform"
                />
              ))}
            </div>
            <span className="text-sm sm:text-base font-black text-slate-900">
              5,0
            </span>
            <span className="w-px h-4 bg-slate-300"></span>
            <span className="text-xs sm:text-sm font-bold text-slate-600">
              22 avaliações no Google
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 group-hover:text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-4 leading-tight">
            O Que Dizem{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
              Nossos Clientes
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Depoimentos reais de clientes socorridos 24h pela equipe Allô
            Guincho em São Paulo
          </p>
          <div className="flex items-center justify-center space-x-1.5 mt-4 text-slate-500">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="text-xs sm:text-sm font-semibold">
              Todos verificados via Google Meu Negócio
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {GOOGLE_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-slate-200 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 flex flex-col"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="flex text-amber-400 space-x-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {t.date}
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium leading-relaxed mb-6 flex-grow">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="border-t border-slate-100 pt-4 mt-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="text-white font-black text-sm sm:text-base drop-shadow-sm">
                      {t.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-black text-slate-900 text-sm sm:text-base block truncate">
                      {t.name}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-orange-700 flex items-center space-x-1">
                      <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      <span>Avaliação Google</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-2xl shadow-xl shadow-slate-900/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/40 group border-2 border-amber-400/30 hover:border-amber-400/60"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" className="fill-blue-400" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" className="fill-green-400" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" className="fill-yellow-400" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" className="fill-red-400" />
            </svg>
            <div className="text-left leading-tight">
              <span className="block font-black text-sm sm:text-base lg:text-lg">
                Avalie-nos no Google
              </span>
              <span className="text-[10px] sm:text-[11px] lg:text-xs font-bold text-amber-300 block">
                Sua opinião ajuda outros clientes ⭐
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 group-hover:text-amber-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
