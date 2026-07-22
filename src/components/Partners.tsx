import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Landmark, Compass, LandmarkIcon, Building2, Globe, ArrowRight, Award } from "lucide-react";
import { Alliance } from "../types";

export default function Partners() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Municipio' | 'Agencia' | 'Museo' | 'Guia'>('All');

  const alliances: Alliance[] = [
    {
      id: "muni-cusco",
      name: "GAD Municipal de Cañar",
      type: "Municipio",
      location: "Cañar, Ecuador",
      description: "Convenio de digitalización de las escalinatas incas urbanas y del tramo arqueológico de Sacsayhuamán."
    },
    {
      id: "muni-urubamba",
      name: "GAD Municipal de Chunchi",
      type: "Municipio",
      location: "Chunchi, Ecuador",
      description: "Desarrollo de guías inmersivas para el tramo Ollantaytambo y mapeo GPS offline para senderistas locales."
    },
    {
      id: "muni-chinchero",
      name: "GAD Municipal de Cuenca ",
      type: "Municipio",
      location: "Cuenca, Ecuador",
      description: "Colaboración en la reconstrucción AR de las terrazas agrícolas imperiales y el palacio de Túpac Yupanqui."
    },
    {
      id: "agency-andes",
      name: "Escalada y Montañismo Ecuador",
      type: "Agencia",
      location: " Ecuador ",
      description: "Integración de tours de Realidad Aumentada exclusivos para sus expediciones de alta gama por el Camino Inca."
    },
    {
      id: "agency-condor",
      name: "Escala Ecuador",
      type: "Agencia",
      location: "Internacional",
      description: "Provisión de licencias móviles corporativas para guiar a más de 5,000 turistas anuales en realidad virtual."
    },
    {
      id: "museum-larco",
      name: "Complejo Arqueológico y Museo Ingapirca ",
      type: "Museo",
      location: "Cañar, Ecuador",
      description: "Desarrollo de tótems interactivos 3D y códigos QR en sala para escanear y expandir vasijas y textiles incas."
    },
    {
      id: "museum-map",
      name: "Museo Pumapungo",
      type: "Museo",
      location: "Cuenca, Ecuador",
      description: "Sincronización de la app móvil con las exposiciones físicas de metalurgia imperial inca."
    },
    {
      id: "guia-agotur",
      name: "Asociación de Guías Oficiales de Turismo",
      type: "Guia",
      location: "Ecuador",
      description: "Capacitación continua y entrega de medallas físicas para guías autorizados que lideran expediciones en la red vial."
    },
    {
      id: "guia-qhapaq",
      name: "Red de Guías Certificados Qhapaq Route",
      type: "Guia",
      location: "Área Andina",
      description: "Acceso preferente al panel de gestión, descarga offline de modelos 3D y kit de validación de credenciales."
    }
  ];

  const filteredAlliances = activeCategory === 'All' 
    ? alliances 
    : alliances.filter(a => a.type === activeCategory);

  const categories = [
    { id: 'All', name: 'Ver Todos', icon: Globe },
    { id: 'Municipio', name: 'Municipios', icon: Building2 },
    { id: 'Agencia', name: 'Agencias de Viaje', icon: Compass },
    { id: 'Museo', name: 'Museos y Cultura', icon: Landmark },
    { id: 'Guia', name: 'Guías Certificados', icon: Award }
  ];

  return (
    <section id="alianzas" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-terracotta-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-incagold-400 font-semibold bg-incagold-500/10 px-3 py-1 rounded-full">
            Ecosistema Colaborativo
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Nuestras Alianzas Estratégicas
          </h2>
          <p className="text-sm text-andean-50/70 font-light">
            Trabajamos mano a mano con entidades públicas, agencias líderes y museos de prestigio para llevar la tecnología inmersiva al turismo nacional.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? "bg-incagold-500 border-incagold-500 text-neutral-900 shadow-lg shadow-incagold-500/10"
                    : "glass text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="partners-grid">
          <AnimatePresence mode="popLayout">
            {filteredAlliances.map((alliance, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={alliance.id}
                className="p-6 rounded-[32px] glass hover:bg-white/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category icon and type */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-white/45 uppercase tracking-wider">
                      {alliance.location}
                    </span>
                    <span className={`font-mono text-[9px] px-2 py-0.5 rounded font-semibold ${
                      alliance.type === "Municipio" ? "bg-terracotta-500/20 text-terracotta-500" :
                      alliance.type === "Agencia" ? "bg-techblue-500/20 text-techblue-500" :
                      alliance.type === "Museo" ? "bg-incagold-500/20 text-incagold-500" :
                      "bg-andean-500/20 text-andean-400"
                    }`}>
                      {alliance.type === "Guia" ? "Guía Certificado" : alliance.type}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm text-white leading-snug">
                    {alliance.name}
                  </h3>

                  <p className="text-[11px] text-white/60 font-light leading-relaxed">
                    {alliance.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between text-[10px] font-mono text-incagold-400">
                  <span className="font-semibold uppercase tracking-wider">PROYECTO ACTIVO</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
