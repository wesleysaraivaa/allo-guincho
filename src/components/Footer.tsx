import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";
import logoAlloGuincho from "@/assets/logo-allo-guincho-branca.png";

const Footer = () => {
  const getWhatsAppUrl = () => {
    const text = "Olá! Preciso de guincho em São Paulo.";
    return `https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <footer className="bg-slate-950 border-t-2 border-orange-500/30 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <img
              src={logoAlloGuincho}
              alt="Allô Guincho Logo"
              className="h-16 w-auto object-contain"
              loading="lazy"
              decoding="async"
              width={180}
              height={64}
            />
            <p className="text-lg text-slate-300 leading-relaxed">
              Atendimento de reboque especializado em toda a Grande São Paulo,
              interior e litoral. Plataformas hidráulicas seguras para carros,
              SUVs, vans, VUCs, 4x4, antigos e máquinas.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-black text-white">Navegação</h4>
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-base font-bold text-slate-300 hover:text-orange-400 transition-colors"
              >
                Início
              </a>
              <a
                href="#chamar-guincho"
                className="text-base font-bold text-slate-300 hover:text-orange-400 transition-colors"
              >
                Chamar Guincho
              </a>
              <a
                href="#servicos"
                className="text-base font-bold text-slate-300 hover:text-orange-400 transition-colors"
              >
                Serviços
              </a>
              <a
                href="#frota"
                className="text-base font-bold text-slate-300 hover:text-orange-400 transition-colors"
              >
                Fotos
              </a>
              <a
                href="#sobre"
                className="text-base font-bold text-slate-300 hover:text-orange-400 transition-colors"
              >
                Sobre
              </a>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-black text-white">Contato 24h</h4>
            <div className="space-y-4">
              <a
                href={`tel:${CONTACT_CONFIG.phone.link}`}
                className="flex items-center space-x-3 text-lg font-bold text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-6 h-6 text-orange-500" />
                <span>{CONTACT_CONFIG.phone.display}</span>
              </a>
              <Button
                asChild
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-lg py-5 rounded-2xl shadow-xl"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="w-6 h-6 fill-slate-950" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-2 border-slate-800 text-center">
          <p className="text-base text-slate-400">
            © 2025 Allô Guincho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
