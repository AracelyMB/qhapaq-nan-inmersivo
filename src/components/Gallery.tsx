import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X, Compass, Eye, Smartphone, Sparkles } from "lucide-react";
import { GalleryItem } from "../types";
import templeImage from "../assets/images/ar_temple_reconstruction_1782746001623.jpg";
import platformImage from "../assets/images/ar_gamified_platform_1782746019201.jpg";
import trailImage from "../assets/images/qhapaq_nan_hero_bg_1782745984999.jpg";
import banosIncaImage from "../assets/images/banos-inca-tambo.jpeg";
import medallaImage from "../assets/images/medalla-coleccionable.png";
import ingapircaImage from "../assets/images/ruinas-ingapirca.jpeg";
export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Exact paths of generated images and premium unsplash fallbacks
  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      title: "Reconstrucción del Templo",
      category: "Reconstrucciones 3D",
      imageUrl: templeImage,
      description: "Holograma 3D de alta definición que reconstruye el antiguo Templo del Sol alineado perfectamente sobre las ruinas arqueológicas de piedra actuales."
    },
    {
      id: "gal-2",
      title: "Mapa Interactivo de Rutas",
      category: "Hologramas Digitales",
      imageUrl: platformImage,
      description: "Mockup de la aplicación mostrando mapas topográficos offline en 3D de las rutas del Qhapaq Ñan con medallas y logros gamificados interactivos."
    },
    {
      id: "gal-3",
      title: "El Sendero del Qhapaq Ñan",
      category: "Paradas del Camino",
      imageUrl: trailImage,
      description: "Vista panorámica del Camino Inca empedrado original cruzando la cordillera andina, enriquecido con coordenadas digitales y señalética virtual."
    },
    {
      id: "gal-4",
      title: "Baños del Inca Tambo",
      category: "Paradas del Camino",
      imageUrl: banosIncaImage,
      description: "Exploración inmersiva en la fortaleza incaica de Ollantaytambo, donde la app reconstruye las puertas trapezoidales y defensas de piedra."
    },
    {
      id: "gal-5",
      title: "Medalla Física Coleccionable",
      category: "Medallas Físicas",
      imageUrl: medallaImage,
      description: "Medalla física real inspirada en la orfebrería imperial andina, otorgada a los caminantes que validan su paso por el sendero."
    },
    {
      id: "gal-6",
      title: "Ruinas de Ingapirca",
      category: "Reconstrucciones 3D",
      imageUrl: ingapircaImage,
      description: "Simulación holográfica de la temperatura e irrigación hidráulica incaica operando sobre los anfiteatros agrícolas circulares de Moray."
    }
  ];

  const categories = ["All", "Medallas Físicas", "Hologramas Digitales", "Reconstrucciones 3D", "Paradas del Camino"];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeria" className="py-24 bg-transparent border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-techblue-400 font-semibold bg-techblue-500/10 px-3 py-1 rounded-full">
            Registro Visual
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Nuestra Galería de Experiencias
          </h2>
          <p className="text-sm text-andean-50/70 font-light">
            Echa un vistazo a la interfaz interactiva, los paisajes andinos protegidos y la simulación holográfica en acción.
          </p>
        </div>

        {/* Categories selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 focus:outline-none ${
                activeCategory === category
                  ? "bg-terracotta-500 border-terracotta-500 text-white shadow-lg"
                  : "glass text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category === "All" ? "Ver Todo" : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer rounded-[32px] overflow-hidden bg-[#0A0B0E] border border-white/5 hover:border-white/15 hover:shadow-2xl transition-all duration-300 relative aspect-4/3"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-andean-900 via-andean-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Details absolute content */}
                <div className="absolute bottom-0 inset-x-0 p-6 space-y-2 flex flex-col justify-end h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-incagold-400 font-bold bg-incagold-500/10 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <div className="rounded-full bg-white/10 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-base text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-white/55 font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#0A0B0E]/95 backdrop-blur-xl max-w-4xl w-full rounded-[32px] overflow-hidden border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/80 transition-all duration-300 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Side: Large Image */}
                <div className="md:col-span-7 h-64 md:h-[480px] relative">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="font-mono text-[9px] bg-incagold-500 text-andean-900 font-bold px-2.5 py-1 rounded-full">
                      {selectedItem.category}
                    </span>
                  </div>
                </div>

                {/* Right Side: Rich context details */}
                <div className="md:col-span-5 p-8 flex flex-col justify-between h-[360px] md:h-[480px] space-y-6">
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] text-andean-50/45 uppercase tracking-wider font-semibold">
                      EXP_REGISTRO_N° {selectedItem.id.toUpperCase()}
                    </span>
                    <h3 className="font-display font-black text-2xl text-white">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs text-andean-50/80 leading-relaxed font-light">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-andean-500/15">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-techblue-500/10 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-techblue-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white font-semibold">Optimización UX/UI</span>
                        <span className="text-[9px] text-andean-50/50 font-mono">Renderizado instantáneo 60fps</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-terracotta-500/10 flex items-center justify-center">
                        <Compass className="w-4 h-4 text-terracotta-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white font-semibold">Preservación Histórica</span>
                        <span className="text-[9px] text-andean-50/50 font-mono">Modelado con aval arqueológico</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-andean-50/30">
                    <span>DISPOSITIVO COMPATIBLE</span>
                    <span>iOS & ANDROID</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
