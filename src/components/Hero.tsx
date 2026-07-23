import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Compass, Eye, Shield, Cpu, Play, X, Volume2, Award, Map, Navigation, AlertCircle } from "lucide-react";
import problemaImagen from "../assets/images/problema.png";
import solucionImagen from "../assets/images/solucion.png";
import funcionamientoImagen from "../assets/images/6paradas.jpeg";
import trenVideo from "../assets/videos/tren.mp4";
import logoFondo from "../assets/images/logo.png";
interface HeroProps {
  onDiscoverClick: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  const heroBgPath = "/src/assets/images/qhapaq_nan_hero_bg_1782745984999.jpg";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Sync simulated explainer video slides when modal is active
  const slides = [
    {
      title: "00:00 - 00:15 | EL PROBLEMA",
      subtitle: "Recorrer el Qhapaq Ñan hoy es una experiencia pasiva, sin registro de tu logro.",
      description: "La gran red de caminos de piedra carece de guías presenciales constantes. La mayoría de los visitantes los recorre de forma pasiva, sin entender el profundo contexto arqueológico ni contar con un testimonio tangible de su esfuerzo.",
      visual: (
        <div className="relative w-full h-full bg-neutral-950 overflow-hidden">
          <img
            src={problemaImagen}
            alt="Problema al recorrer el Qhapaq Ñan"
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "00:15 - 00:40 | LA SOLUCIÓN",
      subtitle: "QhapaqRoute convierte cada parada en un hito: una medalla física y su versión holográfica en la app.",
      description: "Fusionamos la geolocalización satelital inteligente y la realidad aumentada interactiva con una recompensa material. Desbloquea hologramas 3D del Imperio Inca e interconecta tus logros con medallas reales de colección.",
      visual: (
        <div className="relative w-full h-full bg-neutral-950 overflow-hidden">
          <img
            src={solucionImagen}
            alt="Solución QhapaqRoute"
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "00:40 - 00:65 | CÓMO FUNCIONA",
      subtitle: "Descarga, GPS valida tu llegada offline, colecciona y desbloquea.",
      description: "Simple y sin fricciones: descargas el mapa andino offline, caminas el sendero libremente, el GPS valida automáticamente tu arribo al hito, y desbloqueas al instante tu medalla digital y física.",
      visual: (
        <div className="relative w-full h-full bg-neutral-950 overflow-hidden">
          <img
            src={funcionamientoImagen}
            alt="Funcionamiento de QhapaqRoute"
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "00:65 - 00:90 | EL CIERRE",
      subtitle: "Completa el mapa. Vive el camino inca como nunca antes.",
      description: "Arma el rompecabezas tridimensional del camino incaico andino en el mundo real. Inmortaliza tu hazaña con un recuerdo eterno, tangible e inmersivo de tu conexión con la historia prehispánica.",
      visual: (
        <div className="relative w-full h-full bg-neutral-950 overflow-hidden">
          <video
            src={trenVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      )
    }
  ];

  // Auto-play interval for the video slides
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isModalOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveSlide((slide) => (slide + 1) % slides.length);
            return 0;
          }
          return prev + 1.25; // completes slide in approx 8 seconds
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isModalOpen, isPlaying]);

  const handleNextSlide = () => {
    setProgress(0);
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setProgress(0);
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Container with Video and Image fallback */}
        <div className="absolute inset-0 z-0">
          <img
            src={logoFondo}
            alt="QhapaqRoute"
            className="w-full h-full object-cover object-center scale-105 select-none opacity-35"
          />
        </div>
        {/* Apple-style gradient overlays to blend into the dark layout */}
        <div className="absolute inset-0 bg-gradient-to-b from-andean-900/95 via-andean-900/60 to-andean-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-andean-900/80 via-transparent to-andean-900/80"></div>
        
        {/* Subtle glowing mesh of light */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-incagold-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-techblue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
    

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy and CTA */}
        <div className="lg:col-span-7 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 rounded-full mb-6"
            id="hero-badge"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              Realidad Aumentada Activa
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white tracking-tighter leading-[0.95]"
              id="hero-title"
            >
              EXPLORA LA HISTORIA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-incagold-400 via-terracotta-500 to-techblue-400 uppercase">
                COMO NUNCA ANTES
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-andean-50/80 max-w-xl font-light leading-relaxed"
              id="hero-subtitle"
            >
              Experiencias inmersivas con realidad aumentada en el Qhapaq Ñan — cada parada, un hito coleccionable.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
            id="hero-ctas"
          >
            <button
              onClick={onDiscoverClick}
              className="group relative px-8 py-4 rounded-full font-semibold text-sm text-white overflow-hidden shadow-xl shadow-terracotta-500/10 hover:shadow-terracotta-500/35 transition-all duration-300 cursor-pointer"
              id="btn-hero-discover"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-terracotta-500 to-terracotta-600 transition-transform duration-300 group-hover:scale-[1.03]"></span>
              <span className="relative flex items-center justify-center gap-2">
                Descubre la experiencia
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </button>

            <button
              onClick={() => {
                setIsModalOpen(true);
                setProgress(0);
                setActiveSlide(0);
                setIsPlaying(true);
              }}
              className="px-8 py-4 rounded-full border border-white/10 bg-white/3 hover:bg-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-300 cursor-pointer"
              id="btn-hero-video-modal"
            >
              ▶ Ver cómo funciona
            </button>
          </motion.div>
        </div>

        {/* Right Side: Virtual Augmented Reality HUD Dashboard Widget */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br from-andean-500/30 via-incagold-500/20 to-techblue-500/40 backdrop-blur-xl shadow-2xl shadow-black/65"
            id="hero-ar-dashboard"
          >
            <div className="bg-andean-900/90 rounded-[23px] p-6 space-y-6 relative overflow-hidden">
              {/* Corner tech marks */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-incagold-500/50"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-incagold-500/50"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-incagold-500/50"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-incagold-500/50"></div>

              {/* Header inside HUD */}
              <div className="flex flex-col gap-3 border-b border-andean-500/10 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-techblue-500 animate-pulse"></div>
                    <span className="font-mono text-[10px] text-techblue-400 tracking-wider font-semibold">
                      DISPOSITIVO: QHAPAQ_ROUTE_01
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-andean-50/40 font-bold uppercase">SISTEMA OFF-LINE</span>
                </div>
                <div className="bg-black/60 rounded-xl p-3 border border-andean-500/20 shadow-inner">
                  <p className="font-mono text-[10px] text-incagold-400 font-semibold tracking-wide text-center leading-normal">
                    LAT -2.9001 · LON -78.9959 · ALT 3,400 m.s.n.m. · PARADAS ACTIVAS: 6/6
                  </p>
                </div>
              </div>

              {/* central visual overlay */}
              <div className="relative h-48 bg-black/40 rounded-xl overflow-hidden border border-andean-500/20 flex items-center justify-center">
                {/* Simulated AR Wireframe scan overlay */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 z-10"></div>
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-techblue-500/40 animate-pulse shadow-[0_0_8px_#0082FF]"></div>
                
                {/* Central AR graphic */}
                <Compass className="w-16 h-16 text-incagold-500/30 animate-spin-slow" />
                
                {/* Coordinates info */}
                <div className="absolute bottom-3 left-3 z-20 space-y-1">
                  <p className="font-mono text-[9px] text-incagold-400">ALTITUD: 3,400 M.S.N.M.</p>
                  <p className="font-mono text-[9px] text-white uppercase">RUTA: CORREDOR QHAPAQ ÑAN</p>
                </div>
                <div className="absolute top-3 right-3 z-20 bg-terracotta-500/20 border border-terracotta-500/30 rounded px-2 py-0.5">
                  <span className="font-mono text-[9px] text-terracotta-500 font-semibold">RA ACTIVA</span>
                </div>
              </div>

              {/* Grid of details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-andean-500/10 rounded-xl border border-andean-500/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-incagold-400">
                    <Navigation className="w-3.5 h-3.5" />
                    <span className="font-mono text-[10px] font-semibold">Paradas Activas</span>
                  </div>
                  <p className="text-xl font-bold text-white font-display">
                    6 Paradas
                  </p>
                </div>
                <div className="p-3 bg-andean-500/10 rounded-xl border border-andean-500/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-techblue-400">
                    <Cpu className="w-3.5 h-3.5" />
                    <span className="font-mono text-[10px] font-semibold">Validación GPS</span>
                  </div>
                  <p className="text-xs text-andean-50/70 font-light">
                    Sincronización exacta offline.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center bg-andean-500/20 p-3 rounded-xl border border-andean-500/10">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-incagold-400" />
                  <span className="text-xs text-white font-medium">Turismo Responsable</span>
                </div>
                <span className="font-mono text-[9px] text-andean-50/40">UNESCO COMPLIANT</span>
              </div>
            </div>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-20 h-20 bg-incagold-500/5 border border-incagold-500/10 rounded-2xl flex flex-col items-center justify-center backdrop-blur-md"
          >
            <span className="font-display font-extrabold text-lg text-incagold-400">06</span>
            <span className="text-[8px] text-andean-50/60 text-center uppercase font-mono">Medallas</span>
          </motion.div>
        </div>
      </div>

      {/* Synced Video Explainer Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#0A0B0E] border border-white/10 w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-auto lg:h-[480px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Animated Cinematic Visual Stage */}
              <div className="lg:w-1/2 bg-black relative flex flex-col justify-between overflow-hidden min-h-[220px] lg:min-h-full">
                {/* Simulated Video Feed Area */}
                <div className="absolute inset-0 z-0">
                  {slides[activeSlide].visual}
                </div>

                {/* Video Play Controls Overlaid */}
                <div className="relative z-10 flex justify-between items-center p-4 bg-gradient-to-b from-black/60 to-transparent">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                    <span className="font-mono text-[9px] text-white/75 uppercase tracking-wider">
                      REPRODUCIENDO EXPLICACIÓN (60s - 90s)
                    </span>
                  </div>
                  <Volume2 className="w-4 h-4 text-white/60 animate-pulse" />
                </div>

                {/* Synced Subtitle Overlay in absolute center-bottom */}
                <div className="relative z-10 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent mt-auto text-center">
                  <div className="max-w-xs mx-auto">
                    <p className="text-xs font-semibold text-incagold-400 mb-1">
                      {slides[activeSlide].title}
                    </p>
                    <p className="text-[11px] text-white/90 italic font-medium leading-tight">
                      "{slides[activeSlide].subtitle}"
                    </p>
                  </div>
                </div>

                {/* Progress tracking line at bottom of viewport */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15 z-20">
                  <div 
                    className="h-full bg-gradient-to-r from-terracotta-500 to-incagold-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Right Side: Narrative Copy & Interactive Controls */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-between space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-[10px] text-terracotta-500 uppercase tracking-widest font-bold">
                      QhapaqRoute • EXPLICACIÓN
                    </span>
                    <h3 className="font-display font-black text-xl text-white mt-1 uppercase">
                      ¿Cómo funciona el modelo?
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Main slide text */}
                <div className="space-y-4 flex-1 flex flex-col justify-center">
                  <div className="flex gap-2.5">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setActiveSlide(i);
                          setProgress(0);
                        }}
                        className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${
                          activeSlide === i 
                            ? "bg-incagold-500" 
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                      ></button>
                    ))}
                  </div>

                  <p className="text-xs text-white/50 uppercase font-mono tracking-wider">
                    Fase {activeSlide + 1} de {slides.length}
                  </p>

                  <p className="text-[13px] text-white/80 leading-relaxed font-light">
                    {slides[activeSlide].description}
                  </p>
                </div>

                {/* Navigation and state controls */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-xs font-mono font-bold text-white/70 hover:text-white uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${isPlaying ? "animate-ping" : ""}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? "bg-emerald-500" : "bg-neutral-600"}`}></span>
                    </span>
                    {isPlaying ? "Pausar Narrador" : "Continuar Narrador"}
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevSlide}
                      className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/3 hover:bg-white/10 text-white text-xs font-semibold transition-all cursor-pointer"
                    >
                      Anterior
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="px-4 py-1.5 rounded-lg bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Decorative Wave bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-andean-900 to-transparent pointer-events-none"></div>
    </section>
  );
}
