import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CONTACT_CONFIG } from "@/config/contact";
import logoAlloGuincho from "@/assets/logo-allo-guincho.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "#" },
    { name: "Chamar Guincho", href: "#chamar-guincho" },
    { name: "Serviços", href: "#servicos" },
    { name: "Fotos Reais", href: "#frota" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-slate-200">Guincho 24 Horas em São Paulo</span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-slate-400">Tempo médio de chegada: 15 a 25 min</span>
          </div>

          <div className="flex items-center space-x-4">
            <a href={`tel:${CONTACT_CONFIG.phone.link}`} className="hover:text-white transition-colors font-semibold text-orange-400">
              ⚡ Central 24h: {CONTACT_CONFIG.phone.display}
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center space-x-3 group">
              <img
                src={logoAlloGuincho}
                alt="Allô Guincho Logo"
                className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </a>

            <nav className="hidden lg:flex items-center space-x-7">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
              >
                <a
                  href={`tel:${CONTACT_CONFIG.phone.link}`}
                  className="flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ligar ({CONTACT_CONFIG.phone.display})</span>
                </a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-slate-700 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200 bg-white">
              <nav className="flex flex-col space-y-3 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-semibold py-1.5 text-slate-700 hover:text-orange-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <Button
                    asChild
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-base py-3"
                  >
                    <a
                      href={`tel:${CONTACT_CONFIG.phone.link}`}
                      className="flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Ligar {CONTACT_CONFIG.phone.display}</span>
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
