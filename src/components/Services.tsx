import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Smartphone, Trophy, Briefcase, Plus, Minus, Check, ChevronRight } from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>("ar");

  const services = [
    {
      id: "ar",
      title: "Experiencias Inmersivas",
      shortDesc: "Recorrido guiado por Realidad Aumentada (RA) en cada parada, con reconstrucciones 3D de arquitectura inca.",
      longDesc: "Nuestra tecnología de RA superpone reconstrucciones 3D hiperrealistas de templos, puentes, colcas y tambos con rigurosa precisión arqueológica sobre las ruinas de piedra actuales, guiándote de forma activa e inmersiva por el Qhapaq Ñan.",
      icon: Eye,
      color: "from-terracotta-500 to-terracotta-600",
      textColor: "text-terracotta-500",
      bg: "bg-terracotta-500/10",
      borderColor: "border-terracotta-500/20",
      details: [
        "Reconstrucciones arqueológicas 3D con precisión centimétrica.",
        "Audio narrativas inmersivas adaptadas al punto geográfico.",
        "Interacción con hologramas de flora, fauna y vestimenta inca.",
        "Compatibilidad con dispositivos móviles de gama media."
      ],
      stat: "Reconstrucciones 3D en RA"
    },
    {
      id: "platform",
      title: "Plataforma Digital",
      shortDesc: "App con validación GPS para el turista independiente, funcionando como un guía inteligente sin necesidad de guía humano.",
      longDesc: "Perfecto para el viajero autosuficiente. La app utiliza el GPS del smartphone para detectar la llegada a cada hito patrimonial, desbloqueando automáticamente contenidos y validando el avance sin requerir de conexión a internet constante ni de un guía físico.",
      icon: Smartphone,
      color: "from-techblue-500 to-techblue-600",
      textColor: "text-techblue-500",
      bg: "bg-techblue-500/10",
      borderColor: "border-techblue-500/20",
      details: [
        "Navegación inteligente y geolocalizada 100% offline.",
        "Contenido educativo dinámico activado automáticamente.",
        "Información detallada de seguridad y estado de la ruta.",
        "Guía digital interactiva para el turista independiente."
      ],
      stat: "Validación GPS Offline"
    },
    {
      id: "gamification",
      title: "Gamificación Cultural",
      shortDesc: "Sistema de 6 medallas físicas coleccionables y hologramas digitales desbloqueables en la app que arman el mapa andino.",
      longDesc: "Transformamos el senderismo histórico en una gesta personal de colección. Al llegar a cada hito, validas tu GPS para desbloquear medallas digitales holográficas en 3D en la app, las cuales corresponden a hermosas medallas físicas de metal coleccionables que arman un mapa completo del camino andino.",
      icon: Trophy,
      color: "from-incagold-500 to-incagold-600",
      textColor: "text-incagold-500",
      bg: "bg-incagold-500/10",
      borderColor: "border-incagold-500/20",
      details: [
        "6 medallas de metal coleccionables de edición limitada.",
        "Colección holográfica digital desbloqueable en la app.",
        "Búsqueda del tesoro con retos y trivias históricas.",
        "Tu hazaña materializada en un mapa rompecabezas real."
      ],
      stat: "6 Medallas Físicas y Digitales"
    },
    {
      id: "b2b",
      title: "Soluciones Corporativas",
      shortDesc: "Panel de gestión avanzada para operadores turísticos, municipalidades y guías certificados con membresía mensual de acceso.",
      longDesc: "Brindamos a agencias de viaje, municipalidades y guías certificados un potente backend para gestionar rutas, visualizar estadísticas de flujo, registrar visitantes y ofrecer soporte tecnológico exclusivo a sus propios clientes.",
      icon: Briefcase,
      color: "from-andean-500 to-andean-600",
      textColor: "text-andean-500",
      bg: "bg-andean-500/10",
      borderColor: "border-andean-500/20",
      details: [
        "Panel de control web para operadores turísticos.",
        "Herramientas de gestión exclusivas para Guías Certificados.",
        "Análisis de tráfico de visitantes y reportes de seguridad.",
        "Membresías integradas de administración y soporte premium."
      ],
      stat: "Panel de Gestión Operativa"
    }
  ];

  return (
    <section id="servicios" className="py-24 relative bg-transparent border-t border-b border-white/5">
      {/* Decorative gradients */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-techblue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-techblue-400 font-semibold bg-techblue-500/10 px-3 py-1 rounded-full">
            Servicios Tecnológicos
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Nuestras Soluciones de Vanguardia
          </h2>
          <p className="text-sm text-andean-50/70 font-light">
            Creamos experiencias que fusionan de manera natural la riqueza cultural andina con la sofisticación interactiva móvil.
          </p>
        </div>

        {/* Dynamic Accordion & Feature Showcase layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Accordion Selection (7 Columns on Large) */}
          <div className="lg:col-span-6 space-y-4">
            {services.map((service) => {
              const isOpen = activeService === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(isOpen ? null : service.id)}
                  className={`cursor-pointer p-6 rounded-[32px] glass transition-all duration-300 ${
                    isOpen
                      ? "bg-white/10 border-incagold-500/40 shadow-xl"
                      : "bg-white/3 border-white/5 hover:bg-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${service.bg} flex items-center justify-center`}>
                        <service.icon className={`w-5 h-5 ${service.textColor}`} />
                      </div>
                      <h3 className="font-display font-bold text-sm text-white">
                        {service.title}
                      </h3>
                    </div>
                    <div>
                      {isOpen ? (
                        <Minus className={`w-4 h-4 ${service.textColor}`} />
                      ) : (
                        <Plus className="w-4 h-4 text-andean-50/45 hover:text-white" />
                      )}
                    </div>
                  </div>
                  
                  {/* Brief text visible when collapsed */}
                  {!isOpen && (
                    <p className="mt-3 pl-14 text-xs text-white/40 font-light line-clamp-1">
                      {service.shortDesc}
                    </p>
                  )}

                  {/* Expanded description inside Accordion on mobile */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="mt-4 pl-14 space-y-4">
                          <p className="text-xs text-andean-50/80 leading-relaxed font-light">
                            {service.longDesc}
                          </p>
                          <ul className="space-y-2">
                            {service.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-center gap-2 text-xs text-andean-50/70 font-light">
                                <Check className={`w-3.5 h-3.5 ${service.textColor}`} />
                                {detail}
                              </li>
                            ))}
                          </ul>
                          <div className="pt-2">
                            <span className="font-mono text-[10px] text-incagold-400 uppercase font-semibold">
                              {service.stat}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Premium Large Detail Showcase (6 Columns - hidden on mobile/tablet) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              {activeService && (
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-[32px] glass shadow-2xl relative overflow-hidden"
                >
                  {/* Floating abstract gold design */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-incagold-500/5 rounded-full blur-2xl"></div>

                  {(() => {
                    const activeObj = services.find((s) => s.id === activeService);
                    if (!activeObj) return null;
                    return (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-incagold-400 font-semibold">
                            Detalles del Servicio
                          </span>
                          <span className={`text-[10px] font-mono px-3 py-1 rounded-full ${activeObj.bg} ${activeObj.textColor} font-semibold`}>
                            {activeObj.stat}
                          </span>
                        </div>

                        <h3 className="font-display font-extrabold text-lg text-white">
                          {activeObj.title}
                        </h3>

                        <p className="text-xs text-white/60 leading-relaxed font-light">
                          {activeObj.longDesc}
                        </p>

                        <div className="h-px bg-white/10"></div>

                        <div className="space-y-3">
                          <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                            Características Principales
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            {activeObj.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className={`mt-0.5 rounded-full p-0.5 ${activeObj.bg}`}>
                                  <Check className={`w-3 h-3 ${activeObj.textColor}`} />
                                </div>
                                <span className="text-xs text-white/60 font-light">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <a
                            href="#contacto"
                            className={`inline-flex items-center gap-1 text-xs font-semibold ${activeObj.textColor} hover:underline`}
                          >
                            Solicitar información comercial
                            <ChevronRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
