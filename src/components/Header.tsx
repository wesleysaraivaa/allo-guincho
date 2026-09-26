import { Phone, Menu, X, MessageCircle, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CONTACT_CONFIG } from "@/config/contact";
import logoAlloGuincho from "@/assets/logo-allo-guincho-branca.png";

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

  const getWhatsAppUrl = () => {
    const text = "Olá! Preciso de reboque/guincho 24h em São Paulo. Podem me atender agora?";
    return `https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* Top Bar Anúncio / Status 24h */}
      <div className="bg-slate-900/90 border-b border-slate-800/60 text-slate-300 text-xs py-1.5 px-4">
        <div className="container mx-auto flex items-center justify-between gap-2 text-[11px] sm:text-xs">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-200 truncate">Guincho 24h em São Paulo</span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-slate-400">Tempo médio: 15 a 25 min</span>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href={`tel:${CONTACT_CONFIG.phone.link}`}
              className="flex items-center space-x-1 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Zap className="w-3 h-3 text-amber-400" />
              <span>Central 24h: {CONTACT_CONFIG.phone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Navegação */}
      <header className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50 text-white shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group py-1">
              <img
                src={logoAlloGuincho}
                alt="Allô Guincho Logo"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-slate-300 hover:text-orange-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-orange-950/50 transition-all border border-orange-500/30"
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

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-orange-400" /> : <Menu className="w-6 h-6 text-orange-400" />}
            </button>
          </div>

          {/* Mobile Drawer Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 px-2 border-t border-slate-800/80 bg-slate-950/98 backdrop-blur-xl rounded-b-2xl shadow-2xl animate-in slide-in-from-top-2">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-semibold text-slate-200 hover:text-orange-400 hover:bg-slate-900/80 px-4 py-3 rounded-xl transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="pt-4 mt-3 border-t border-slate-800/80 space-y-2.5 px-2">
                <Button
                  asChild
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base py-3.5 rounded-xl shadow-lg shadow-emerald-950/50"
                >
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>Chamar WhatsApp 24h</span>
                  </a>
                </Button>

                <Button
                  asChild
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-base py-3.5 rounded-xl shadow-lg shadow-orange-950/50 border border-orange-500/30"
                >
                  <a
                    href={`tel:${CONTACT_CONFIG.phone.link}`}
                    className="flex items-center justify-center space-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Ligar {CONTACT_CONFIG.phone.display}</span>
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
