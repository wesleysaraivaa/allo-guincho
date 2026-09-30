import {
  Truck,
  Bus,
  Wrench,
  HardHat,
  Compass,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";

const imgAudi = "/resgate-audi-a3.jpg";
const imgVanEscolar = "/resgate-van-escolar.jpg";
const imgHyundaiHR = "/resgate-hyundai-hr.jpg";
const imgMaquinas = "/resgate-maquinas.jpg";
const imgJeep4x4 = "/resgate-jeep-wrangler.jpg";
const imgCarroAntigo = "/resgate-carro-antigo.jpg";

export const ServicesSection = () => {
  const mainServices = [
    {
      title: "Carros & SUVs",
      subtitle: "Sedans, Hatchbacks, SUVs, Rebaixados",
      description: "Plataforma suave para carros automáticos e rebaixados",
      icon: Truck,
      image: imgAudi,
      badge: "Passeio",
    },
    {
      title: "Vans & Micro-ônibus",
      subtitle: "Vans Escolares e de Carga",
      description: "Ancoragem reforçada para transporte seguro",
      icon: Bus,
      image: imgVanEscolar,
      badge: "Utilitários",
    },
    {
      title: "Caminhões Leves",
      subtitle: "VUCs, Sprinters, Baús",
      description: "Reboque especializado para frota comercial",
      icon: Wrench,
      image: imgHyundaiHR,
      badge: "Comercial",
    },
    {
      title: "Máquinas Industriais",
      subtitle: "Compressores, Geradores",
      description: "Cintas de alta tonelagem para cargas pesadas",
      icon: HardHat,
      image: imgMaquinas,
      badge: "Industrial",
    },
    {
      title: "4x4 & Off-Road",
      subtitle: "Jeeps, Pick-ups 4x4",
      description: "Resgate especializado em trilhas e rodovias",
      icon: Compass,
      image: imgJeep4x4,
      badge: "Off-Road",
    },
    {
      title: "Carros Antigos",
      subtitle: "Clássicos e de Coleção",
      description: "Cuidado zero impacto para preservar a pintura",
      icon: Sparkles,
      image: imgCarroAntigo,
      badge: "Clássicos",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-slate-50 scroll-mt-20 border-b border-slate-200"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4">
            O Que Precisa Ser Rebocado?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Plataforma hidráulica 24h para qualquer veículo
          </p>
        </div>

        {/* Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-orange-500 transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden relative bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-lg flex items-center space-x-2">
                      <Icon className="w-4 h-4 text-white" />
                      <span>{service.badge}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-orange-600 font-semibold mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Button */}
                  <Button
                    asChild
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group/btn active:scale-95"
                  >
                    <a
                      href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Preciso do serviço de: ${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Solicitar Agora</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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
