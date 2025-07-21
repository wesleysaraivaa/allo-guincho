import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CONTACT_CONFIG } from "@/config/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.
Telefone: ${formData.phone}
Email: ${formData.email}
Localização: ${formData.location}
Mensagem: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você 24 horas por dia. Entre em contato
            conosco e tenha a certeza de um atendimento rápido e profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Fale Conosco</h2>

            <div className="space-y-6">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Telefone de Emergência
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        Disponível 24 horas por dia
                      </p>
                      <a
                        href={`tel:${CONTACT_CONFIG.phone.link}`}
                        className="text-primary font-semibold hover:underline text-lg"
                      >
                        {CONTACT_CONFIG.phone.display}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        WhatsApp
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        Atendimento via WhatsApp
                      </p>
                      <a
                        href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Preciso de reboque.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 font-semibold hover:underline text-lg"
                      >
                        {CONTACT_CONFIG.phone.display}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Área de Atendimento
                      </h3>
                      <p className="text-muted-foreground">
                        Grande São Paulo, interior e litoral paulista
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Cobertura completa em toda a Grande São Paulo.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Horário de Funcionamento
                      </h3>
                      <p className="text-foreground font-semibold">
                        24 horas por dia
                      </p>
                      <p className="text-sm text-muted-foreground">
                        7 dias por semana, incluindo feriados
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-primary rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Emergência?</h3>
              <p className="mb-4 opacity-90">
                Em caso de emergência, ligue direto ou chame no WhatsApp para
                atendimento imediato.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-white text-primary hover:bg-gray-100 flex-1"
                >
                  <a
                    href={`tel:${CONTACT_CONFIG.phone.link}`}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Ligar Agora</span>
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground flex-1"
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

          {/* Contact Form */}
          <div>
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Envie uma Mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder={CONTACT_CONFIG.phone.display}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Localização Atual *
                    </label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Rua, bairro, ponto de referência"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Descrição do Problema *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-24"
                      placeholder="Descreva o problema do seu veículo e outras informações importantes"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300"
                  >
                    Enviar via WhatsApp
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obrigatórios. Sua mensagem será enviada via
                    WhatsApp.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
