import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";

const WhatsAppButton = () => {
  const whatsappNumber = CONTACT_CONFIG.phone.whatsapp;
  const message = encodeURIComponent(
    "Olá! Preciso de reboque urgente. Estou em uma emergência."
  );

  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contatar via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;
