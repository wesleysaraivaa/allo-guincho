import { MessageCircle, Phone } from "lucide-react";
import { CONTACT_CONFIG } from "@/config/contact";

const WhatsAppButton = () => {
  const whatsappNumber = CONTACT_CONFIG.phone.whatsapp;
  const message = encodeURIComponent(
    "Olá! Preciso de reboque/guincho urgente em São Paulo."
  );

  return (
    <>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contatar via WhatsApp 24h"
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center space-x-2 bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group border-2 border-white/20"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="font-extrabold text-sm tracking-wide">WhatsApp 24h</span>
      </a>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black py-3 px-3 rounded-xl text-xs shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp 24h</span>
          </a>

          <a
            href={`tel:${CONTACT_CONFIG.phone.link}`}
            className="flex items-center justify-center space-x-1.5 bg-orange-700 hover:bg-orange-600 text-white font-black py-3 px-3 rounded-xl text-xs shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Ligar 24h</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
