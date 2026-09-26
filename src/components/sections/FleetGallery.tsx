const imgHeroJetta = "/WhatsApp Image 2026-09-18 at 20.59.15.jpeg";
const imgAudi = "/WhatsApp Image 2026-09-18 at 20.59.14.jpeg";
const imgToro = "/WhatsApp Image 2026-09-18 at 20.57.28.jpeg";
const imgVanEscolar = "/WhatsApp Image 2026-09-18 at 20.57.27 (1).jpeg";
const imgVanTransit = "/WhatsApp Image 2026-09-18 at 20.57.26 (2).jpeg";
const imgHyundaiHR = "/WhatsApp Image 2026-09-18 at 20.57.27 (3).jpeg";
const imgCaminhaoBau = "/WhatsApp Image 2026-09-18 at 20.57.27 (2).jpeg";
const imgMaquinas = "/WhatsApp Image 2026-09-18 at 20.57.26.jpeg";
const imgMaquinario = "/WhatsApp Image 2026-09-18 at 20.57.26 (1).jpeg";
const imgJeep4x4 = "/WhatsApp Image 2026-09-18 at 20.57.27.jpeg";
const imgCarroAntigo = "/WhatsApp Image 2026-09-18 at 20.59.14 (1).jpeg";

export const FleetGallery = () => {
  const galleryImages = [
    { src: imgHeroJetta, title: "VW Jetta Sedan em Plataforma" },
    { src: imgAudi, title: "Audi A3 Esportivo" },
    { src: imgToro, title: "Fiat Toro Pick-up" },
    { src: imgVanEscolar, title: "Van Escolar de Passageiros" },
    { src: imgVanTransit, title: "Ford Transit Utilitário de Carga" },
    { src: imgHyundaiHR, title: "Hyundai HR Baú Comercial" },
    { src: imgCaminhaoBau, title: "Caminhão Baú Refrigerado" },
    { src: imgMaquinas, title: "Compressor Industrial Atlas Copco" },
    { src: imgMaquinario, title: "Maquinário de Pavimentação" },
    { src: imgJeep4x4, title: "Resgate 4x4 Off-Road Noturno" },
    { src: imgCarroAntigo, title: "Picape Antiga de Coleção" },
  ];

  return (
    <section id="frota" className="py-16 bg-white border-y border-slate-200 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-3 inline-block">
            Frota Própria & Atendimentos
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Galeria de Reboques Reais
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Fotos reais dos nossos guinchos em ação na Grande SP, Rodovias, Interior e Litoral:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((photo, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all h-64"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold bg-orange-600 text-white px-2.5 py-0.5 rounded inline-block mb-1 shadow">
                  Allô Guincho 24h
                </span>
                <p className="text-xs font-semibold text-slate-100">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetGallery;
