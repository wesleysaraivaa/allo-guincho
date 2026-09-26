import { Truck, Bus, Wrench, HardHat, Compass, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";

const imgAudi = "/WhatsApp Image 2026-09-18 at 20.59.14.jpeg";
const imgVanEscolar = "/WhatsApp Image 2026-09-18 at 20.57.27 (1).jpeg";
const imgHyundaiHR = "/WhatsApp Image 2026-09-18 at 20.57.27 (3).jpeg";
const imgMaquinas = "/WhatsApp Image 2026-09-18 at 20.57.26.jpeg";
const imgJeep4x4 = "/WhatsApp Image 2026-09-18 at 20.57.27.jpeg";
const imgCarroAntigo = "/WhatsApp Image 2026-09-18 at 20.59.14 (1).jpeg";

export const ServicesSection = () => {
  const mainServices = [
    {
      title: "Reboque de Carros & SUVs",
      subtitle: "Sedans, Hatchbacks, SUVs, Carros Rebaixados e Automáticos",
      description:
        "Transporte seguro via plataforma hidráulica de acionamento suave. Ideal para carros automáticos e blindados.",
      features: [
        "Plataforma inclinável sem atrito no para-choque",
        "Amarração reforçada com cintas soft nas rodas",
        "Seguro total durante todo o trajeto",
        "Atendimento urbano e em rodovias",
      ],
      icon: Truck,
      image: imgAudi,
    },
    {
      title: "Reboque de Vans & Micro-ônibus",
      subtitle: "Vans Escolares, Vans de Carga e Transporte de Passageiros",
      description:
        "Guincho pesado adaptado para o transporte de vans e micro-ônibus com total estabilidade na pista.",
      features: [
        "Capacidade reforçada para furgões pesados",
        "Ancoragem quádrupla para estabilidade em curvas",
        "Transporte para garagens, concessionárias e oficinas",
        "Disponibilidade 24 horas por dia",
      ],
      icon: Bus,
      image: imgVanEscolar,
    },
    {
      title: "Reboque de VUCs & Caminhões Leves",
      subtitle: "Hyundai HR, Sprinters, Caminhões Baú e Veículos Comerciais",
      description:
        "Reboque especializado para frota comercial e utilitários leves (VUC) operando no centro e região metropolitana.",
      features: [
        "Transporte rápido para não parar a sua operação",
        "Atendimento a veículos carregados ou vazios",
        "Guinchos preparados para vias de restrição urbana",
        "Emissão de recibo e nota para empresas",
      ],
      icon: Wrench,
      image: imgHyundaiHR,
    },
    {
      title: "Reboque de Máquinas & Equipamentos",
      subtitle: "Compressores, Geradores, Maquinário Industrial e Agrícola",
      description:
        "Plataforma reforçada com capacidade para carregar compressores industriais, geradores e geradores móveis.",
      features: [
        "Cintas de amarração de alta tonelagem",
        "Carregamento e descarregamento suave",
        "Remoção e transporte canteiro a canteiro",
        "Equipe técnica treinada para manuseio seguro",
      ],
      icon: HardHat,
      image: imgMaquinas,
    },
    {
      title: "Reboque 4x4 & Veículos Off-Road",
      subtitle: "Jeeps de Trilha, Pick-ups 4x4 e Resgate Noturno",
      description:
        "Resgate especializado para veículos 4x4 e jipes atolados ou com avaria mecânica após trilhas e viagens.",
      features: [
        "Guincho de cabo de aço e acionamento hidráulico",
        "Atendimento 24h em estradas vicinais e rodovias",
        "Cuidado com eixos, diferenciais e suspensão",
        "Resgate noturno com sinalização de emergência",
      ],
      icon: Compass,
      image: imgJeep4x4,
    },
    {
      title: "Reboque de Carros Antigos & Especiais",
      subtitle: "Veículos Clássicos, de Coleção e Pick-ups Vintage",
      description:
        "Cuidado extremo para o transporte do seu veículo clássico ou de coleção até eventos, oficinas ou garagens.",
      features: [
        "Plataforma zero impacto para preservar a estrutura",
        "Fixação exclusiva pelas rodas sem tocar a pintura",
        "Motoristas com experiência em carros clássicos",
        "Transporte intermunicipal agendado",
      ],
      icon: Sparkles,
      image: imgCarroAntigo,
    },
  ];

  return (
    <section id="servicos" className="py-16 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-orange-100 text-orange-700 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 inline-block">
            Serviços Especializados de Reboque
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            O Que Precisa Ser Rebocado Hoje?
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            Guinchos plataforma de última geração preparados para transportar com total segurança cada tipo de veículo ou maquinário:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center space-x-1.5">
                      <Icon className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                      <span>{service.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-orange-600 font-semibold mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 border-t border-slate-100 pt-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-slate-600">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100">
                  <Button
                    asChild
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3"
                  >
                    <a
                      href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Preciso do serviço: ${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chamar Reboque via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
