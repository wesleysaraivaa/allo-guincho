import React from "react";
import { CONTACT_CONFIG } from "@/config/contact";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para o guincho chegar?",
      answer: "15 a 25 minutos em São Paulo e rodovias.",
    },
    {
      question: "Qual o valor do reboque?",
      answer:
        "Calculado pela distância. Aceitamos PIX e parcelamos em até 12x.",
    },
    {
      question: "Atendem carros automáticos e rebaixados?",
      answer: "Sim! Plataforma suave sem raspões no para-choque.",
    },
    {
      question: "Quais veículos vocês rebocam?",
      answer: "Carros, SUVs, vans, caminhões leves, máquinas, 4x4 e clássicos.",
    },
    {
      question: "Atendem 24h?",
      answer: "Sim! 24 horas por dia, inclusive feriados e madrugada.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Tire suas dúvidas sobre nosso serviço
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-slate-200 bg-slate-50 rounded-2xl px-6 shadow-sm hover:border-orange-300 transition-all"
            >
              <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6 text-lg sm:text-xl">
                <span>{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
