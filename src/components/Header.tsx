import { Phone, Menu, X, MessageCircle } from "lucide-react";
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
    { name: "Fotos", href: "#frota" },
    { name: "Sobre", href: "#sobre" },
  ];

  const getWhatsAppUrl = () => {
    const text = "Olá! Preciso de guincho em São Paulo.";
    return `https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* Main Header */}
      <header className="bg-slate-950 border-b-2 border-orange-500/30 sticky top-0 z-50 text-white shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group py-1">
              <img
                src={logoAlloGuincho}
                alt="Allô Guincho Logo"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
                width={180}
                height={64}
                fetchPriority="high"
                decoding="async"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-bold text-slate-300 hover:text-orange-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-emerald-950/60 transition-all"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="lg:hidden p-3 rounded-2xl bg-slate-900 border-2 border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-orange-400" />
              ) : (
                <Menu className="w-6 h-6 text-orange-400" />
              )}
            </button>
          </div>

          {/* Mobile Drawer Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 px-4 border-t-2 border-slate-800 bg-slate-950">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-bold text-slate-200 hover:text-orange-400 px-4 py-3 rounded-xl transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="pt-6 mt-4 border-t-2 border-slate-800 space-y-4">
                <Button
                  asChild
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-lg py-5 rounded-2xl shadow-xl"
                >
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageCircle className="w-6 h-6 fill-slate-950" />
                    <span>Chamar no WhatsApp</span>
                  </a>
                </Button>

                <Button
                  asChild
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black text-lg py-5 rounded-2xl shadow-xl"
                >
                  <a
                    href={`tel:${CONTACT_CONFIG.phone.link}`}
                    className="flex items-center justify-center space-x-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="w-6 h-6" />
                    <span>Ligar Agora</span>
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
