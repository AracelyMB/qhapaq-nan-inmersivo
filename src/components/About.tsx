import { motion } from "motion/react";
import { Cpu, Globe, Lightbulb, Sparkles } from "lucide-react";

export default function About() {
  const pillars = [
    {
      id: "innovacion",
      title: "Innovación",
      description: "Realidad aumentada y validación GPS en tiempo real.",
      icon: Lightbulb,
      color: "text-terracotta-500",
      bg: "bg-terracotta-500/10",
      borderColor: "border-terracotta-500/20"
    },
    {
      id: "cultura",
      title: "Cultura",
      description: "Seis paradas clave del Qhapaq Ñan, contadas en su propio contexto.",
      icon: Globe,
      color: "text-incagold-500",
      bg: "bg-incagold-500/10",
      borderColor: "border-incagold-500/20"
    },
    {
      id: "tecnologia",
      title: "Turismo Sostenible",
      description: "Alianza institucional y compromiso con la conservación UNESCO.",
      icon: Cpu,
      color: "text-techblue-500",
      bg: "bg-techblue-500/10",
      borderColor: "border-techblue-500/20"
    }
  ];

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-terracotta-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Typography & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-incagold-500" />
              <span className="font-mono text-xs uppercase tracking-widest text-incagold-400 font-semibold">
                Nuestra Esencia
              </span>
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight uppercase">
              Donde el pasado ancestral se encuentra con el mañana digital
            </h2>
            
            <div className="space-y-4 text-andean-50/70 font-light leading-relaxed">
              <p>
                <strong>Qhapaq Ñan Inmersivo</strong> nace para resolver un problema real: recorrer el camino inca hoy es una experiencia pasiva, sin guía ni memoria del logro. Unimos arqueología y tecnología para que cada tramo del camino se viva, se entienda y se coleccione.
              </p>
            </div>

            {/* Quote block */}
            <div className="border-l-2 border-incagold-500 pl-4 py-2 glass rounded-r-2xl">
              <p className="italic text-xs text-incagold-50/90 font-light">
                "La tecnología no reemplaza al patrimonio; lo hace visible y coleccionable para conectar emocionalmente con el viajero."
              </p>
              <span className="block mt-1.5 font-mono text-[9px] text-incagold-400 uppercase tracking-wider font-semibold">
                — Equipo QhapaqRoute
              </span>
            </div>
          </div>

          {/* Right Side: Interactive Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-6">
              {pillars.slice(0, 2).map((pillar, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  key={pillar.id}
                  className="p-8 rounded-[32px] glass hover:bg-white/5 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl ${pillar.bg} flex items-center justify-center mb-6`}>
                    <pillar.icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-sm text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-white/40 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center">
              {pillars.slice(2, 3).map((pillar) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  key={pillar.id}
                  className="p-8 rounded-[32px] glass hover:bg-white/5 transition-all duration-300 w-full"
                >
                  <div className={`w-10 h-10 rounded-xl ${pillar.bg} flex items-center justify-center mb-6`}>
                    <pillar.icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-sm text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-white/40 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
