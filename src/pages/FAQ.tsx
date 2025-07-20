import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para o guincho chegar?",
      answer:
        "Nosso tempo médio de resposta é de 20 a 30 minutos, dependendo da localização e do trânsito. Em emergências, priorizamos o atendimento mais rápido possível.",
    },
    {
      question: "Qual é o valor do serviço de reboque?",
      answer: `O valor varia conforme a distância, tipo de veículo e horário. Consulte-nos pelo telefone ${CONTACT_CONFIG.phone.display} ou WhatsApp para um orçamento personalizado.`,
    },
    {
      question: "Atendem que tipos de veículos?",
      answer:
        "Atendemos todos os tipos de veículos: carros de passeio, SUVs, pick-ups, vans, caminhões leves e médios, motocicletas, tratores e máquinas agrícolas/industriais.",
    },
    {
      question: "Quais documentos preciso ter em mãos?",
      answer:
        "Tenha sempre: documento do veículo (CRLV), carteira de motorista válida e documento de identidade. Em casos de acidente, também será necessário o boletim de ocorrência.",
    },
    {
      question: "Atendem em que regiões?",
      answer:
        "Atendemos em toda Grande São Paulo, interior e litoral paulista, incluindo São Paulo Capital, Guarulhos, São Bernardo, Santo André, Osasco, Campinas, Santos, São José dos Campos, Sorocaba, Ribeirão Preto, Baixada Santista e Vale do Paraíba.",
    },
    {
      question: "Funcionam aos finais de semana e feriados?",
      answer:
        "Sim! Nosso atendimento é 24 horas por dia, 7 dias por semana, incluindo finais de semana e feriados. Emergências não escolhem hora!",
    },
    {
      question: "Posso acompanhar o reboque do meu veículo?",
      answer:
        "Sim, você pode acompanhar o transporte do seu veículo. Temos espaço para passageiros em nossa cabine, garantindo sua segurança durante o trajeto.",
    },
    {
      question: "Como fazer o pagamento?",
      answer:
        "Aceitamos pagamento em dinheiro e PIX. O pagamento é feito no momento da prestação do serviço.",
    },
    {
      question: "O que fazer se meu carro quebrar em local perigoso?",
      answer: `Mantenha a calma! Ligue o pisca-alerta, coloque o triângulo a uma distância segura, saia do veículo pela lateral oposta ao trânsito e nos chame imediatamente pelo ${CONTACT_CONFIG.phone.display}.`,
    },
    {
      question: "Rebocam veículos com transmissão automática?",
      answer:
        "Sim, mas com cuidados especiais. Veículos automáticos requerem técnicas específicas de reboque para evitar danos à transmissão. Nossa equipe é treinada para isso.",
    },
    {
      question: "Fazem apenas reboque ou também conserto no local?",
      answer: "Nosso foco é o reboque seguro.",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
            de reboque. Caso não encontre sua resposta, entre em contato
            conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Emergency Contact */}
          <div className="bg-gradient-primary rounded-lg p-6 text-white mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-3">
                Emergência? Não perca tempo!
              </h2>
              <p className="mb-4 opacity-90">
                Em situações de emergência, ligue direto para atendimento
                imediato
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <a href={`tel:${CONTACT_CONFIG.phone.link}`}>
                    Ligar: {CONTACT_CONFIG.phone.display}
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground"
                >
                  <a
                    href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Emergência! Preciso de reboque urgente.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0 bg-card/50 backdrop-blur-sm rounded-lg px-6 shadow-sm hover:shadow-elegant transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  <div className="flex items-start space-x-3">
                    <Plus className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Não encontrou sua resposta?
            </h2>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer qualquer dúvida. Entre em
              contato conosco pelos canais abaixo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-primary hover:shadow-primary"
              >
                <a href={`tel:${CONTACT_CONFIG.phone.link}`}>
                  Ligar: {CONTACT_CONFIG.phone.display}
                </a>
              </Button>
              <Button
                asChild
                className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground"
              >
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Tenho uma dúvida sobre os serviços.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
