import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";
import logoAlloGuincho from "@/assets/logo-allo-guincho-branca.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logoAlloGuincho}
                alt="Allô Guincho Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  ALLÔ<span className="text-orange-500">GUINCHO</span>
                </h3>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Socorro Automotivo 24h
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Atendimento de reboque especializado em toda a Grande São Paulo, interior e litoral. Plataformas hidráulicas seguras para carros, SUVs, vans, VUCs, 4x4, antigos e máquinas.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400">Navegação Rápida</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                Início
              </a>
              <a href="#chamar-guincho" className="text-slate-300 hover:text-white transition-colors text-sm">
                Chamar Guincho
              </a>
              <a href="#servicos" className="text-slate-300 hover:text-white transition-colors text-sm">
                Nossos Serviços
              </a>
              <a href="#frota" className="text-slate-300 hover:text-white transition-colors text-sm">
                Fotos Reais da Frota
              </a>
              <a href="#sobre" className="text-slate-300 hover:text-white transition-colors text-sm">
                Sobre Nós
              </a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors text-sm">
                Perguntas Frequentes
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400">Atendimento 24h</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Central Telefônica:</p>
                  <a href={`tel:${CONTACT_CONFIG.phone.link}`} className="font-bold text-white hover:text-orange-400">
                    {CONTACT_CONFIG.phone.display}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-slate-300 text-xs">Grande São Paulo, Interior e Litoral</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300 text-xs">Atendimento 24 horas por dia</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 bg-slate-800/60 p-5 rounded-2xl border border-slate-700/50">
            <h4 className="text-sm font-bold text-white">Atendimento Imediato</h4>
            <p className="text-slate-300 text-xs">
              Precisa de ajuda emergencial agora? Fale direto no WhatsApp.
            </p>
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs">
              <a
                href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Preciso de reboque urgente.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp 24h
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2025 Allô Guincho Auto Socorro 24h. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
