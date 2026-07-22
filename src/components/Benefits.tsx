import { motion } from "motion/react";
import { Compass, BookOpen, Sparkles, Check } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      id: "seguridad",
      title: "Exploración Segura",
      subtitle: "Guiado y navegación sin señal",
      description: "El Qhapaq Ñan carece de cobertura telefónica en gran parte de su recorrido. Nuestra navegación satelital offline garantiza que conozcas tu posición exacta en tiempo real, evitando desvíos involuntarios.",
      icon: Compass,
      color: "text-terracotta-500",
      bg: "bg-terracotta-500/10",
      borderColor: "border-terracotta-500/20",
      bulletPoints: [
        "Localización precisa mediante motor GPS sin conexión.",
        "Mapa topográfico andino de alta fidelidad pre-cargado.",
        "Trazado del camino original incaico verificado.",
        "Zonas de seguridad y puntos de auxilio geo-referenciados."
      ],
      badge: "EXPLORACIÓN"
    },
    {
      id: "historia",
      title: "Pedagogía Interactiva",
      subtitle: "Aprender historia interactiva",
      description: "Aprende de forma interactiva y lúdica sobre la historia y la cultura andina. Nuestro contenido pedagógico se activa en el punto exacto de los acontecimientos para conectar educación con geografía.",
      icon: BookOpen,
      color: "text-incagold-500",
      bg: "bg-incagold-500/10",
      borderColor: "border-incagold-500/20",
      bulletPoints: [
        "Modelos interactivos de flora, fauna y vestimenta inca.",
        "Explicaciones de ingeniería hidráulica y vial de piedra.",
        "Cuestionarios y retos didácticos por parada.",
        "Material desarrollado con arqueólogos expertos."
      ],
      badge: "PEDAGOGÍA"
    },
    {
      id: "aventura",
      title: "Aventura Trascendente",
      subtitle: "Medallas con alto valor emocional",
      description: "El viaje culmina en tu orgullo personal. Al verificar tu ruta por GPS, obtienes medallas físicas de colección y hologramas digitales únicos como un souvenir material y virtual de tu hazaña.",
      icon: Sparkles,
      color: "text-techblue-500",
      bg: "bg-techblue-500/10",
      borderColor: "border-techblue-500/20",
      bulletPoints: [
        "6 medallas de metal coleccionables de edición limitada.",
        "Holograma 3D exclusivo desbloqueable por parada.",
        "Registro eterno de tu aventura en tu billetera digital.",
        "Un recuerdo tangible y de alto valor emocional."
      ],
      badge: "EMOCIONAL"
    }
  ];

  return (
    <section id="beneficios" className="py-24 relative bg-transparent border-b border-white/5">
      {/* Decorative blurred lights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-incagold-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-terracotta-500 font-semibold bg-terracotta-500/10 px-3 py-1 rounded-full">
            Ventajas Clave
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            ¿Por qué elegir QhapaqRoute?
          </h2>
          <p className="text-sm text-andean-50/70 font-light">
            Creamos un puente entre la sabiduría arqueológica y el entretenimiento digital, asegurando un viaje seguro, enriquecedor y mágico.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={benefit.id}
              className="p-8 rounded-[32px] glass hover:bg-white/5 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

              <div className="space-y-6">
                {/* Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[9px] px-2.5 py-1 rounded-full font-bold ${benefit.bg} ${benefit.color}`}>
                    {benefit.badge}
                  </span>
                  <div className={`w-10 h-10 rounded-xl ${benefit.bg} flex items-center justify-center`}>
                    <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                  </div>
                </div>

                {/* Card Titles */}
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                    {benefit.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white leading-snug">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {benefit.description}
                </p>

                <div className="h-px bg-white/10"></div>

                {/* Bullet Points */}
                <div className="space-y-3">
                  {benefit.bulletPoints.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <div className={`mt-0.5 rounded-full p-0.5 ${benefit.bg}`}>
                        <Check className={`w-3 h-3 ${benefit.color}`} />
                      </div>
                      <span className="text-xs text-white/60 font-light">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
