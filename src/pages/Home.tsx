import { Phone, MapPin, Clock, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-tow-truck.jpg";
import { CONTACT_CONFIG } from "@/config/contact";

const Home = () => {
  const services = [
    {
      title: "Reboque 24h",
      description:
        "Atendimento de emergência a qualquer hora em toda Grande São Paulo",
      icon: Clock,
    },
    {
      title: "Todos os Tipos de Veículos",
      description:
        "Carros, motos, SUVs, caminhões, máquinas e veículos comerciais",
      icon: Shield,
    },
    {
      title: "Cobertura Completa",
      description: "Grande São Paulo, interior e litoral paulista",
      icon: MapPin,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Guincho 24h em <span className="text-accent">São Paulo</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 animate-fade-in">
              Serviço de reboque para todos os tipos de veículos na Grande São
              Paulo, interior e litoral. Atendimento emergencial 24 horas por
              dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-hover text-lg px-8 py-4 shadow-primary hover:shadow-xl transition-all duration-300"
              >
                <a
                  href={`tel:${CONTACT_CONFIG.phone.link}`}
                  className="flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Chame Agora: {CONTACT_CONFIG.phone.display}</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground transition-all duration-300"
              >
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Preciso de reboque urgente.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Serviços de Reboque Completos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Atendemos todos os tipos de veículos com equipamentos
              especializados em toda região de São Paulo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
              Por que escolher o Allô Guincho?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  "Atendimento 24 horas em toda Grande São Paulo",
                  "Reboque para carros, motos, SUVs, caminhões e máquinas",
                  "Cobertura no interior e litoral paulista",
                  "Equipamentos especializados para cada tipo de veículo",
                  "Equipe experiente e qualificada",
                  "Preços justos e transparentes",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-lg p-8 shadow-elegant">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Emergência?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Não perca tempo! Entre em contato conosco agora mesmo e receba
                  atendimento imediato em toda região de São Paulo.
                </p>
                <div className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300"
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
                      href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Preciso de reboque urgente.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Precisa de Reboque Urgente em São Paulo?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Atendemos Grande São Paulo, interior e litoral. Todos os tipos de
            veículos com equipamentos especializados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-hover text-lg px-8 py-4 shadow-primary"
            >
              <a
                href={`tel:${CONTACT_CONFIG.phone.link}`}
                className="flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Ligar: {CONTACT_CONFIG.phone.display}</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground transition-all duration-300"
            >
              <a
                href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Preciso de reboque urgente.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
