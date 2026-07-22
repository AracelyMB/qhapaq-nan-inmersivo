import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, MessageCircle, Mail, MapPin, Sparkles, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interestType: "Turista",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-speed rapid loading/submit form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", interestType: "Turista", message: "" });
    }, 1500);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("¡Hola Qhapaq Ñan Inmersivo! Estoy interesado en conocer más sobre sus experiencias de turismo tecnológico con realidad aumentada.");
    // Simulate real high converting WhatsApp redirect
    window.open(`https://wa.me/593992414366?text=${text}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background radial gradient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Info & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-terracotta-500 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-terracotta-500 font-semibold">
                  Contacto Comercial
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight uppercase">
                ¿Listo para iniciar la aventura?
              </h2>
              <p className="text-xs sm:text-sm text-andean-50/70 font-light leading-relaxed">
                ¿Eres una agencia buscando diferenciarte? ¿Un municipio queriendo revalorizar su patrimonio? ¿O un caminante listo para la RA? Contáctanos y responderemos en menos de 24 horas.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-terracotta-500/15 flex items-center justify-center text-terracotta-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 font-mono">CORREO ELECTRÓNICO</span>
                  <a href="mailto:info@qhapaqnaninmersivo.com" className="text-sm font-semibold text-white hover:underline">
                    info@qhapaqnaninmersivo.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-incagold-500/15 flex items-center justify-center text-incagold-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 font-mono">SEDE PRINCIPAL</span>
                  <span className="text-sm font-semibold text-white">
                    Cusco, Perú (Valle Sagrado)
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp Premium CTA Button */}
            <div className="pt-4 space-y-3">
              <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                Atención Directa e Inmediata
              </h4>
              <button
                onClick={openWhatsApp}
                className="group w-full inline-flex items-center justify-between p-5 rounded-3xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all duration-300 shadow-xl shadow-emerald-950/20 hover:shadow-emerald-500/25"
                id="btn-whatsapp-direct"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                    <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] text-emerald-100 font-mono tracking-wider font-semibold">WHATSAPP CHAT</span>
                    <span className="block text-sm">Habla con nosotros</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Side: Interactive Forms Container */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[32px] glass shadow-2xl relative">
              <AnimatePresence mode="wait">
                
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="contact-form-el"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-lg text-white">
                        Envíanos un mensaje
                      </h3>
                      <p className="text-xs text-white/40 font-light">
                        Por favor completa tus datos y te contactaremos en breve.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ingresa tu nombre"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-white/35 focus:border-terracotta-500 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="correo@ejemplo.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-white/35 focus:border-terracotta-500 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Interest selector */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                        ¿Cómo te gustaría colaborar?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                        {["Turista", "Agencia", "Municipio", "Museo", "Guía Certificado"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, interestType: type })}
                            className={`py-2 px-1.5 rounded-xl text-[9px] font-semibold border transition-all duration-300 ${
                              formData.interestType === type
                                ? "bg-terracotta-500 border-terracotta-500 text-white shadow-lg"
                                : "bg-white/5 border-white/5 text-white/50 hover:bg-white/10"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                        Tu Mensaje
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Escribe tu mensaje o consulta aquí..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-white/35 focus:border-terracotta-500 focus:outline-none transition-all duration-300 resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full py-4 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden shadow-xl shadow-terracotta-950/20 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensaje
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-black text-2xl text-white">
                        ¡Mensaje Enviado con Éxito!
                      </h3>
                      <p className="text-xs text-andean-50/70 max-w-sm mx-auto font-light leading-relaxed">
                        Gracias por ponerte en contacto con QhapaqRoute. Uno de nuestros ingenieros de patrimonio te responderá en las próximas horas.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-andean-500/30 bg-andean-500/10 hover:bg-andean-500/25 text-white font-semibold text-xs transition-all duration-300"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                )}
                
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
