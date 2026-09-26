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
      answer:
        "Nosso tempo médio de chegada em São Paulo, rodovias e região metropolitana é de 15 a 25 minutos. Despachamos imediatamente o guincho plataforma mais próximo de sua localização.",
    },
    {
      question: "Qual o valor do reboque?",
      answer:
        `O valor é calculado de forma transparente com base na distância e tipo de veículo. Aceitamos PIX, cartão de débito e parcelamos no cartão em até 12x. Fale conosco no WhatsApp ou ligue (${CONTACT_CONFIG.phone.display}) para orçamento imediato!`,
    },
    {
      question: "Atendem veículos automáticos e rebaixados?",
      answer:
        "Sim! Nossa frota conta exclusivamente com guinchos plataforma hidráulica de acionamento suave, inclináveis no nível do solo, permitindo embarque sem raspões no para-choque nem danos à transmissão automática.",
    },
    {
      question: "Quais tipos de veículos vocês rebocam?",
      answer:
        "Rebocamos carros de passeio, SUVs, pick-ups, vans de carga e escolares, caminhões leves (VUC), jipes 4x4, carros antigos e compressores/maquinários industriais.",
    },
    {
      question: "Atendem de madrugada, finais de semana e feriados?",
      answer:
        "Sim! Nosso plantão de atendimento e resgate opera 24 horas por dia, 7 dias por semana, inclusive durante a madrugada e feriados.",
    },
    {
      question: "Posso ir junto na cabine do guincho?",
      answer:
        "Com certeza! Nossas plataformas contam com cabines confortáveis e espaço seguro para passageiros acompanharem o transporte.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-sm">
            Tire suas dúvidas rápidas sobre o serviço de reboque:
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-200 bg-slate-50/50 rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-5 text-sm sm:text-base">
                <span>{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-5">
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
