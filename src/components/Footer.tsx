import { Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";
import logoAlloGuincho from "@/assets/logo-allo-guincho-branca.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logoAlloGuincho}
                alt="Allô Guincho Logo"
                className="w-24 h-24 object-contain drop-shadow-sm"
              />
              <div>
                <h3 className="text-xl font-bold">Allô Guincho</h3>
                <p className="text-sm text-gray-300">Reboque 24h</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Serviço de reboque confiável e rápido, disponível 24 horas por
              dia. Atendemos veículos leves e médios em toda a Grande São Paulo, interior e litoral paulista.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Início
              </Link>
              <Link
                to="/sobre"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Sobre Nós
              </Link>
              <Link
                to="/servicos"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Serviços
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Blog
              </Link>
              <Link
                to="/contato"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-sm text-gray-300">Emergência 24h</p>
                  <a
                    href={`tel:${CONTACT_CONFIG.phone.link}`}
                    className="text-white font-semibold hover:text-primary transition-colors"
                  >
                    {CONTACT_CONFIG.phone.display}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-sm text-white">Grande São Paulo e interior e </p>
                  <p className="text-xs text-gray-300">litoral paulista</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-sm text-white">24h por dia</p>
                  <p className="text-xs text-gray-300">7 dias por semana</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Precisa de Ajuda?</h4>
            <p className="text-gray-300 text-sm">
              Entre em contato conosco agora mesmo. Estamos prontos para te
              atender!
            </p>
            <Button
              asChild
              className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300"
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

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2025 Allô Guincho. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
