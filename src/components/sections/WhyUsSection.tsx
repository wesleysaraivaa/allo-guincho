import React from "react";
import { Clock, ShieldCheck, CreditCard, Shield } from "lucide-react";

export const WhyUsSection = () => {
  return (
    <section id="diferenciais" className="py-16 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Por que Chamar o Allô Guincho?
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Compromisso com agilidade, transparência e segurança total do seu patrimônio:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <Clock className="w-9 h-9 text-orange-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Despacho Imediato</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Chegada média em 15 a 25 minutos. Plataformas posicionadas estrategicamente em SP.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <ShieldCheck className="w-9 h-9 text-emerald-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Garantia Zero Danos</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Plataformas hidráulicas inclináveis no nível do solo com fixação macia nas rodas.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <CreditCard className="w-9 h-9 text-orange-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Pagamento Facilitado</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Aceitamos PIX, cartão de débito e parcelamento no cartão em até 12x no local.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <Shield className="w-9 h-9 text-orange-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Plantão 24 Hours</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipe de prontidão ininterrupta todos os dias do ano, incluindo madrugadas e feriados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
