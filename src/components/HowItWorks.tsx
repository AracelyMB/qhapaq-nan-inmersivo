import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, MapPin, Eye, Compass, Trophy, WifiOff, Sparkles, Download, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Paso 1: Descarga la app",
      description: "Registro simple y sin fricción. Configura tu perfil en segundos y descarga la cartografía completa del Qhapaq Ñan para usar en modo offline.",
      icon: Smartphone,
      color: "text-terracotta-500",
      bg: "bg-terracotta-500/10",
      phoneScreen: "download"
    },
    {
      number: 2,
      title: "Paso 2: Explora la ruta",
      description: "Camina libremente. El motor GPS de la app valida de forma automática y precisa tu llegada a cada hito patrimonial sin depender de conectividad.",
      icon: MapPin,
      color: "text-incagold-500",
      bg: "bg-incagold-500/10",
      phoneScreen: "explore"
    },
    {
      number: 3,
      title: "Paso 3: Colecciona y desbloquea",
      description: "Al llegar a cada parada se valida tu ubicación y se desbloquea una medalla digital holográfica detallando fauna, textiles y arquitectura del tramo.",
      icon: Trophy,
      color: "text-techblue-500",
      bg: "bg-techblue-500/10",
      phoneScreen: "ar"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-terracotta-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-incagold-400 font-semibold bg-incagold-500/10 px-3 py-1 rounded-full">
            Interacción Simple
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            ¿Cómo funciona la experiencia?
          </h2>
          <p className="text-sm text-andean-50/70 font-light">
            Tres pasos sencillos para desbloquear un viaje inmersivo por el corazón del Imperio Inca.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Steps Selector (6 Columns) */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step) => {
              const isActive = activeStep === step.number;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`group cursor-pointer p-6 rounded-[32px] glass transition-all duration-300 relative ${
                    isActive
                      ? "bg-white/10 border-incagold-500/40 shadow-xl"
                      : "bg-white/3 border-white/5 hover:bg-white/5"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    {/* Number & Icon */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-white/10" : "bg-white/5"
                    }`}>
                      <step.icon className={`w-6 h-6 transition-all duration-300 ${
                        isActive ? step.color : "text-andean-50/45"
                      }`} />
                    </div>

                    {/* Copy */}
                    <div className="space-y-2">
                      <span className={`font-mono text-[9px] uppercase tracking-wider font-semibold ${
                        isActive ? step.color : "text-andean-50/45"
                      }`}>
                        PASO 0{step.number}
                      </span>
                      <h3 className="font-display font-bold text-sm text-white">
                        {step.title}
                      </h3>
                      <p className={`text-[11px] leading-relaxed font-light transition-all duration-300 ${
                        isActive ? "text-white/60" : "text-white/40 group-hover:text-white/55"
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Phone Simulator (6 Columns) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-72 h-[550px] bg-andean-900 border-[10px] border-white/10 rounded-[40px] shadow-2xl overflow-hidden shadow-black/85">
              
              {/* Phone Speaker & Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
                <div className="w-10 h-1 bg-neutral-800 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full"></div>
              </div>

              {/* Screen Content Wrapper */}
              <div className="w-full h-full bg-andean-950 relative pt-6 flex flex-col justify-between">
                
                {/* Header of Phone Screen */}
                <div className="px-4 py-2 flex justify-between items-center text-white/50 border-b border-white/5 z-20">
                  <span className="text-[10px] font-mono font-bold text-incagold-400">QHAPAQ AR</span>
                  <div className="flex items-center gap-1.5">
                    <WifiOff className="w-3 h-3 text-terracotta-500" />
                    <span className="text-[9px] font-mono bg-andean-500/20 px-1.5 rounded text-andean-50/60">OFFLINE</span>
                  </div>
                </div>

                {/* Dynamic Screen contents */}
                <div className="flex-1 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    
                    {/* Screen 1: Download */}
                    {activeStep === 1 && (
                      <motion.div
                        key="screen-dl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center space-y-4"
                      >
                        <div className="w-16 h-16 rounded-full bg-terracotta-500/20 flex items-center justify-center border border-terracotta-500/35">
                          <Download className="w-8 h-8 text-terracotta-500 animate-bounce" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-white">Ruta Imperial Incas</h4>
                          <p className="text-[10px] text-andean-50/60 font-light max-w-[200px]">
                            Descargando modelos 3D del tramo Baños del Inca El Tambo Ecuador.
                          </p>
                        </div>
                        <div className="w-40 bg-neutral-800 h-2 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "82%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="bg-gradient-to-r from-terracotta-500 to-incagold-500 h-full"
                          ></motion.div>
                        </div>
                        <span className="text-[10px] font-mono text-incagold-400 font-semibold">82% - 150 MB / 180 MB</span>
                      </motion.div>
                    )}

                    {/* Screen 2: Explore */}
                    {activeStep === 2 && (
                      <motion.div
                        key="screen-exp"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 p-4 flex flex-col justify-between"
                      >
                        <div className="h-44 bg-black/50 rounded-2xl relative overflow-hidden border border-andean-500/20">
                          {/* Simulated mini Map */}
                          <div className="absolute inset-0 opacity-40 bg-radial-gradient from-transparent to-black/80"></div>
                          
                          {/* Map Trails */}
                          <svg className="absolute inset-0 w-full h-full stroke-incagold-500/30" strokeWidth="2" fill="none">
                            <path d="M 20 120 Q 60 70 120 100 T 220 50" />
                            <path d="M 120 100 Q 150 140 200 130" strokeDasharray="3,3" />
                          </svg>

                          {/* Pulsing GPS */}
                          <div className="absolute top-[85px] left-[118px] flex items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-techblue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-techblue-400"></span>
                          </div>

                          <div className="absolute top-[48px] right-[48px] w-2 h-2 rounded-full bg-terracotta-500"></div>

                          {/* Mini compass overlay */}
                          <Compass className="absolute bottom-2 right-2 w-5 h-5 text-incagold-500 animate-spin-slow" />
                        </div>

                        <div className="bg-andean-900/90 p-3 rounded-xl border border-andean-500/20 space-y-1">
                          <div className="flex items-center gap-1 text-incagold-400">
                            <MapPin className="w-3 h-3" />
                            <span className="text-[10px] font-bold">Tambo Inka Oculto</span>
                          </div>
                          <p className="text-[9px] text-andean-50/60 font-light">
                            Te encuentras a 15 metros del antiguo almacén Inca. Prepara tu cámara para escanear.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Screen 3: AR */}
                    {activeStep === 3 && (
                      <motion.div
                        key="screen-ar"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 p-3 flex flex-col justify-between"
                      >
                        {/* Camera viewport simulation */}
                        <div className="flex-1 rounded-2xl border border-techblue-500/30 relative overflow-hidden bg-gradient-to-t from-black/80 to-transparent">
                          
                          {/* Neon hud lines */}
                          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-techblue-400"></div>
                          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-techblue-400"></div>
                          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-techblue-400"></div>
                          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-techblue-400"></div>

                          {/* 3D Wireframe structure floating */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{ scale: [1, 1.02, 1] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="w-28 h-20 border border-incagold-500/40 relative flex items-center justify-center"
                            >
                              <div className="absolute inset-0 border border-dashed border-incagold-500/20 transform rotate-12"></div>
                              <div className="absolute top-0 inset-x-0 h-[1px] bg-incagold-500/50"></div>
                              <Sparkles className="w-5 h-5 text-incagold-400 animate-pulse" />
                            </motion.div>
                          </div>

                          <div className="absolute bottom-2 inset-x-2 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10 text-center">
                            <span className="font-mono text-[8px] text-incagold-400 block font-semibold">MEDALLA DESBLOQUEADA</span>
                            <span className="text-[9px] text-white font-medium block">Holograma: Templo de Ingapirca</span>
                          </div>
                        </div>

                        <div className="mt-2 bg-andean-900/90 p-2.5 rounded-xl border border-andean-500/20 flex items-center justify-between">
                          <span className="text-[9px] text-andean-50/60 font-mono">Registro Colección</span>
                          <span className="text-[9px] text-incagold-400 font-bold font-mono">Medalla 01/06</span>
                        </div>
                      </motion.div>
                    )}
                    
                  </AnimatePresence>
                </div>

                {/* Footer bar simulated */}
                <div className="px-4 py-3 flex justify-around items-center border-t border-white/5 bg-andean-900/95 z-20">
                  <div className="w-5 h-5 rounded-full bg-andean-500/20 flex items-center justify-center">
                    <Compass className="w-3 h-3 text-andean-50/50" />
                  </div>
                  <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                  <div className="w-5 h-5 rounded-full bg-andean-500/20 flex items-center justify-center">
                    <Trophy className="w-3 h-3 text-andean-50/50" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
