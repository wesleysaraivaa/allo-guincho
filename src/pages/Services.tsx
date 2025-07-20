import {
  Truck,
  Clock,
  Shield,
  MapPin,
  Phone,
  CheckCircle,
  Wrench,
  Bike,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";

const Services = () => {
  const mainServices = [
    {
      title: "Veículos Leves e SUVs",
      description:
        "Carros de passeio, hatches, sedans e SUVs até 3.5 toneladas",
      features: [
        "Equipamentos modernos e seguros",
        "Operadores certificados",
        "Cuidado total com seu veículo",
        "Atendimento em toda Grande São Paulo",
      ],
      icon: Truck,
    },
    {
      title: "Veículos Médios e Caminhões",
      description: "Vans, pick-ups, caminhões e veículos comerciais pesados",
      features: [
        "Guinchos de alta capacidade",
        "Experiência com veículos comerciais",
        "Equipamentos para grandes cargas",
        "Atendimento especializado",
      ],
      icon: Shield,
    },
    {
      title: "Motos e Máquinas",
      description: "Motocicletas, tratores, máquinas agrícolas e industriais",
      features: [
        "Equipamentos específicos para motos",
        "Transporte seguro de máquinas",
        "Experiência com equipamentos especiais",
        "Cuidado com veículos delicados",
      ],
      icon: Bike,
    },
    {
      title: "Atendimento 24 Horas",
      description: "Emergências não escolhem hora - nós também não",
      features: [
        "Plantão 24h todos os dias",
        "Feriados e fins de semana",
        "Tempo de resposta otimizado",
        "Suporte via telefone e WhatsApp",
      ],
      icon: Clock,
    },
  ];

  const situations = [
    "Pane seca (falta de combustível)",
    "Bateria descarregada",
    "Superaquecimento do motor",
    "Problemas na transmissão",
    "Acidente de trânsito",
    "Veículo atolado",
    "Problemas elétricos",
    "Pneu furado em local perigoso",
    "Quebra de máquinas agrícolas",
    "Acidentes com motocicletas",
  ];

  const vehicleTypes = [
    "Carros de passeio",
    "SUVs e pick-ups",
    "Vans e utilitários",
    "Caminhões leves e médios",
    "Motocicletas",
    "Tratores agrícolas",
    "Máquinas industriais",
    "Veículos comerciais",
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Serviços de Reboque Completos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos serviços completos de reboque e guincho para todos os
            tipos de veículos, com atendimento 24 horas na Grande São Paulo,
            interior e litoral.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card
              key={index}
              className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vehicle Types */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Tipos de Veículos Atendidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {vehicleTypes.map((vehicle, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-background/70 p-4 rounded-lg"
              >
                <Wrench className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{vehicle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* When to Call */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Quando Chamar o Allô Guincho?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {situations.map((situation, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-background/70 p-4 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{situation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Área de Cobertura
            </h2>
            <p className="text-muted-foreground mb-6">
              Atendemos em toda Grande São Paulo, interior e litoral paulista,
              incluindo:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "São Paulo Capital",
                "Guarulhos",
                "São Bernardo",
                "Santo André",
                "Osasco",
                "Campinas",
                "Santos",
                "São José dos Campos",
                "Sorocaba",
                "Ribeirão Preto",
                "Baixada Santista",
                "Vale do Paraíba",
              ].map((city, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{city}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-secondary text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Atendimento Imediato</h3>
            <p className="mb-6 opacity-90">
              Estamos estrategicamente posicionados para chegar rapidamente ao
              local da emergência em toda região de São Paulo.
            </p>
            <div className="space-y-4">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary-hover shadow-primary"
              >
                <a
                  href={`tel:${CONTACT_CONFIG.phone.link}`}
                  className="flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ligar: {CONTACT_CONFIG.phone.display}</span>
                </a>
              </Button>
              <Button
                asChild
                className="w-full bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground"
              >
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Preciso de reboque. Onde você está localizado?`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Ligue ou chame no WhatsApp",
                desc: "Entre em contato informando sua localização e tipo de veículo",
              },
              {
                step: "2",
                title: "Avaliação da situação",
                desc: "Nossa equipe avalia o equipamento necessário para seu veículo",
              },
              {
                step: "3",
                title: "Deslocamento imediato",
                desc: "Enviamos o guincho especializado mais próximo até você",
              },
              {
                step: "4",
                title: "Reboque seguro",
                desc: "Transportamos seu veículo com total segurança e cuidado",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
