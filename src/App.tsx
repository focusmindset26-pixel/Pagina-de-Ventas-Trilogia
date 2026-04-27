/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, 
  Target, 
  TrendingUp, 
  Check, 
  Play, 
  Star, 
  ShieldCheck, 
  Instagram, 
  ArrowRight,
  ChevronDown,
  Lock,
  Smartphone,
  Sparkles,
  CircleDollarSign,
  Quote
} from 'lucide-react';

const TopBar = () => {
  const [timeLeft, setTimeLeft] = useState(897); // 14:57 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-accent-primary text-black text-center py-2 text-[10px] sm:text-xs font-bold tracking-[2px] uppercase sticky top-0 z-50">
      Oferta por tiempo limitado • Termina en: {formatTime(timeLeft)}
    </div>
  );
};

const Pillar = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col items-center text-center p-6"
  >
    <div className="text-accent-primary mb-4">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <h3 className="italic-bold text-lg mb-2">{title}</h3>
    <p className="text-text-muted text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const BookCard = ({ title, subtitle, description, highlights, benefits, step, image }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="glass-card rounded-2xl p-8 flex flex-col h-full hover:border-accent-primary/30 transition-colors group glow-fire"
  >
    <div className="bg-linear-to-b from-white/5 to-transparent h-60 rounded-lg mb-6 flex items-center justify-center text-center px-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="italic-bold text-2xl tracking-tighter leading-none select-none text-white/5 group-hover:text-accent-secondary/40 transition-colors">
          {title}<br />{subtitle}
        </span>
      )}
    </div>
    <h3 className="italic-bold text-xl mb-4">{title} {subtitle}</h3>
    <p className="text-text-muted text-sm mb-6 flex-grow">{description}</p>
    
    <div className="space-y-4">
      <div>
        <div className="text-[10px] text-accent-primary uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
          <Play size={10} className="fill-accent-primary" /> QUÉ ENCONTRARÁS
        </div>
        <ul className="space-y-2 mb-6">
          {highlights.map((item: string, i: number) => (
            <li key={i} className="text-xs text-[#ccc] flex gap-2">
              <span className="text-[#555]">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
        <div className="text-[10px] text-white uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
          <span className="text-accent-primary">❖</span> BENEFICIOS REALES
        </div>
        <ul className="space-y-2">
          {benefits.map((item: string, i: number) => (
            <li key={i} className="text-xs text-[#ccc] flex gap-2">
              <Check size={12} className="text-accent-primary shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-8 pt-4 border-t border-card-border flex justify-between items-center text-[10px] text-[#555] font-bold tracking-wider uppercase">
      <span>PASO {step}</span>
      <span className="text-accent-primary">EBOOK INCLUIDO</span>
    </div>
  </motion.div>
);

const BonusCard = ({ icon: Icon, title, description, originalPrice }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card rounded-2xl p-8 flex flex-col items-center text-center group hover:border-accent-emerald/30 transition-colors"
  >
    <div className="w-14 h-14 bg-accent-emerald/5 border border-accent-emerald/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon size={24} className="text-accent-emerald" />
    </div>
    <h3 className="italic-bold text-lg mb-2">{title}</h3>
    <p className="text-text-muted text-sm mb-6 flex-grow uppercase tracking-tight font-medium text-[10px] leading-relaxed">
      {description}
    </p>
    <div className="mt-auto">
      <div className="text-[10px] text-[#555] uppercase tracking-widest mb-1 font-bold">VALORADO EN</div>
      <div className="text-lg text-[#555] line-through font-bold mb-1">${originalPrice.toFixed(2)}</div>
      <div className="text-accent-emerald italic-bold text-sm tracking-widest">GRATIS PARA TI</div>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, role, quote }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card rounded-3xl p-10 relative overflow-hidden group hover:border-accent-primary/20 transition-all duration-500 glow-fire"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-accent-primary/10 transition-colors" />
    <Quote className="absolute top-6 right-6 text-white/5 group-hover:text-white/10 transition-colors" size={40} />
    
    <div className="flex gap-1 mb-8">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="text-accent-primary fill-accent-primary" />
      ))}
    </div>
    
    <p className="text-zinc-300 italic text-lg mb-10 leading-relaxed relative z-10 font-medium">
      "{quote}"
    </p>
    
    <div className="flex items-center gap-4 border-t border-white/5 pt-8">
      <div className="w-12 h-12 rounded-full bg-linear-to-br from-accent-primary/20 to-accent-secondary/20 border border-white/10 flex items-center justify-center italic-bold text-accent-primary">
        {name.charAt(0)}
      </div>
      <div className="text-left">
        <div className="italic-bold text-white text-base tracking-wider">{name}</div>
        <div className="text-[10px] text-accent-primary font-black uppercase tracking-[3px] mt-0.5">{role}</div>
      </div>
    </div>
    
    <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-white/5 text-white/40 text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[2px]">
      <ShieldCheck size={12} className="text-accent-primary" /> Testimonio Verificado
    </div>
  </motion.div>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-card-border bg-card-bg rounded-xl overflow-hidden mb-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-bold text-sm uppercase tracking-wide">{question}</span>
        <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-5 pb-5 overflow-hidden"
          >
            <p className="text-text-muted text-sm border-t border-card-border pt-4 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-primary/5 blur-[120px] pointer-events-none z-0" />
      
      <TopBar />

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-16 pb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8 text-accent-primary text-[10px] font-bold tracking-[2px] uppercase"
          >
            SISTEMA DE ALTO RENDIMIENTO
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/40 text-xs sm:text-sm font-bold tracking-[4px] uppercase mb-6"
          >
            Método Focus Mindset
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="italic-bold text-4xl sm:text-6xl md:text-8xl mb-8 tracking-tighter"
          >
            DOMINA TU MENTE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">ORDENA</span> TU VIDA.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          >
            El sistema práctico para reconstruir tu identidad, dominar tus hábitos y tomar el control total de tus finanzas.
          </motion.p>
        </section>

        {/* Pillars Section */}
        <section className="border-y border-white/5 bg-white/[0.01]">
          <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Pillar 
              icon={Clock} 
              title="Ingeniería Mental" 
              description="Aprende a desprogramar las creencias limitantes y a configurar una mentalidad orientada a resultados."
              delay={0.1}
            />
            <Pillar 
              icon={Target} 
              title="Foco Radical" 
              description="Elimina las distracciones y la procrastinación mediante sistemas de hábitos probados."
              delay={0.2}
            />
            <Pillar 
              icon={TrendingUp} 
              title="Poder Financiero" 
              description="Entiende la psicología del dinero y cómo gestionar tu capital para construir libertad real."
              delay={0.3}
            />
          </div>
        </section>

        {/* System Section */}
        <section className="container mx-auto px-6 py-24 text-center">
          <h2 className="italic-bold text-4xl sm:text-5xl md:text-6xl mb-4">
            EL SISTEMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">INQUEBRANTABLE</span>
          </h2>
          <div className="text-text-muted text-xs sm:text-sm font-bold tracking-[3px] uppercase mb-16">
            TU HOJA DE RUTA HACIA EL ALTO RENDIMIENTO
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <BookCard 
              step="1"
              title="IDENTIDAD"
              subtitle="INQUEBRANTABLE"
              image="https://i.imgur.com/EmSDggL.png"
              description="El cimiento de toda transformación real: quién eres cuando nadie te ve."
              highlights={[
                "Auditoría de Autoconcepto: Identifica qué te frena.",
                "Reprogramación de Creencias: Elimina el software antiguo.",
                "Diseño de Entorno Social: Cómo filtrar influencias."
              ]}
              benefits={[
                "Inmunidad total al juicio y crítica ajena.",
                "Confianza radical para tomar decisiones difíciles.",
                "Claridad absoluta sobre tu propósito de vida."
              ]}
            />
            <BookCard 
              step="2"
              title="DOMINIO DE"
              subtitle="HÁBITOS"
              image="https://i.imgur.com/S9Fq7Wf.png"
              description="La ingeniería de tu día a día para automatizar el éxito."
              highlights={[
                "Gestión de Dopamina: Recupera tu capacidad de enfoque.",
                "Sistemas de Fricción: Haz que lo malo sea difícil.",
                "La Regla del Impulso: Cómo no fallar nunca más."
              ]}
              benefits={[
                "Eliminación definitiva de la procrastinación.",
                "Niveles de energía constantes durante todo el día.",
                "Disciplina sin esfuerzo mediante sistemas invisibles."
              ]}
            />
            <BookCard 
              step="3"
              title="FINANZAS Y"
              subtitle="RIQUEZA MENTAL"
              image="https://i.imgur.com/WDXcmqy.png"
              description="La psicología detrás de la abundancia y la gestión inteligente."
              highlights={[
                "Patrones del 1%: Cómo piensa la gente próspera.",
                "Estrategia de Presupuesto Consciente.",
                "Mentalidad de Inversión vs. Mentalidad de Gasto."
              ]}
              benefits={[
                "Paz mental financiera al saber dónde va cada centavo.",
                "Ruptura de techos de cristal en tus ingresos.",
                "Construcción de una base sólida para tu libertad real."
              ]}
            />
          </div>
        </section>

        {/* Bonus Section */}
        <section className="bg-white/[0.02] border-y border-white/5 py-24">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-block px-4 py-2 bg-accent-emerald/5 border border-accent-emerald/20 rounded-full text-accent-emerald text-[10px] font-bold tracking-[2px] uppercase mb-8">
              🎁 REGALOS EXCLUSIVOS
            </div>
            <h2 className="italic-bold text-4xl sm:text-5xl md:text-6xl mb-4">
              TUS 3 <span className="text-accent-emerald">BONUS</span><br />COMPLETAMENTE GRATIS
            </h2>
            <div className="text-text-muted text-xs font-bold tracking-[2px] uppercase mb-16">
              SÓLO DISPONIBLES CON LA TRILOGÍA HOY
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BonusCard 
                icon={Smartphone}
                title="DETOX DIGITAL"
                description="Recupera tu capacidad de asombro y enfoque eliminando la adicción a las pantallas."
                originalPrice={10.00}
              />
              <BonusCard 
                icon={Sparkles}
                title="MANIFESTACIÓN REAL"
                description="El puente entre el pensamiento y la acción, sin magia, solo programación neuronal."
                originalPrice={10.00}
              />
              <BonusCard 
                icon={CircleDollarSign}
                title="EDUCACIÓN FINANCIERA"
                description="Herramientas prácticas para gestionar, proteger y hacer crecer tu capital hoy mismo."
                originalPrice={10.00}
              />
            </div>

            <div className="mt-12 inline-block px-8 py-4 glass-card rounded-full text-sm font-bold tracking-widest uppercase">
              VALOR TOTAL DE LOS REGALOS: <span className="text-accent-emerald">$30.00 USD</span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-6 py-24 text-center">
          <div className="text-accent-primary text-xs font-bold tracking-[3px] uppercase mb-4">★ RESULTADOS REALES</div>
          <h2 className="italic-bold text-4xl sm:text-5xl md:text-6xl mb-16">
            LO QUE DICEN<br /><span className="text-accent-primary">NUESTROS ALUMNOS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="ADRIÁN M."
              role="EMPRENDEDOR"
              quote="Llevaba meses procrastinando mis metas financieras. Con la Trilogía Inquebrantable logré ordenar mis gastos y, lo más importante, mi cabeza. El cambio de identidad es real."
            />
            <TestimonialCard 
              name="CARLA R."
              role="PROFESIONAL INDEPENDIENTE"
              quote="Lo que más me sirvió fue el dominio de los hábitos. He recuperado mi enfoque y mis niveles de energía. Siento que por fin tengo un sistema que funciona a largo plazo."
            />
            <TestimonialCard 
              name="JAVIER S."
              role="ESTUDIANTE DE ALTO RENDIMIENTO"
              quote="Increíble cómo explican la psicología del dinero. No es solo ahorrar, es cambiar cómo ves la abundancia. Es la mejor inversión que he hecho este año."
            />
          </div>
        </section>

        {/* Checkout Section */}
        <section id="checkout" className="container mx-auto px-6 py-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_0_80px_rgba(16,185,129,0.1)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-primary shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            
            <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-accent-primary text-[10px] font-bold tracking-widest uppercase mb-10">
              ACCESO INSTANTÁNEO
            </div>
            
            <h2 className="italic-bold text-5xl sm:text-7xl mb-12 tracking-tighter">
              ÚNETE AL<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">1%</span>
            </h2>

            <div className="mb-12">
              <div className="text-[#555] line-through text-lg font-bold mb-1">$24,99 <span className="text-[10px] no-underline tracking-widest font-black opacity-50 uppercase">VALOR REAL</span></div>
              <div className="flex items-end justify-center gap-1 font-heading font-black text-7xl sm:text-8xl leading-none">
                <span className="text-accent-primary text-3xl mb-4 sm:mb-6">$</span>
                14,99
                <span className="text-text-muted text-base sm:text-xl font-normal leading-relaxed mb-4 sm:mb-6">USD</span>
              </div>
            </div>

            <ul className="text-left max-w-[280px] mx-auto space-y-4 mb-12 font-bold text-sm">
              <li className="flex items-center gap-3"><Check className="text-accent-primary shrink-0" size={18} /> Trilogía Completa (3 Libros)</li>
              <li className="flex items-center gap-3"><Check className="text-accent-primary shrink-0" size={18} /> 3 Bonus de Mentalidad</li>
              <li className="flex items-center gap-3"><Check className="text-accent-primary shrink-0" size={18} /> Acceso de por vida</li>
            </ul>

            <motion.a 
              href="https://pay.hotmart.com/V104008401K?off=0x7xdwbg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-accent-primary py-6 px-10 rounded-2xl italic-bold text-xl sm:text-2xl text-black shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-105 transition-all mb-12 block text-center"
            >
              OBTENER TRILOGÍA AHORA
            </motion.a>

            <div className="mb-10">
              <div className="text-[9px] text-[#555] font-black tracking-widest uppercase mb-6">PAGA DE FORMA SEGURA CON</div>
              <div className="flex justify-center max-w-[320px] mx-auto">
                <img 
                  src="https://i.imgur.com/ThbziAr.png" 
                  alt="Métodos de Pago" 
                  className="w-full transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left mb-10">
              <div className="shrink-0">
                <img 
                  src="https://i.imgur.com/l7BL98b.png" 
                  alt="Garantía de Satisfacción" 
                  className="w-20 h-20 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="text-[14px] italic-bold text-white uppercase tracking-wider mb-2">7 DÍAS DE GARANTÍA</div>
                <div className="text-[11px] text-text-muted font-bold leading-relaxed uppercase">Satisfacción total o te devolvemos el 100% de tu dinero sin preguntas.</div>
              </div>
            </div>

            <div className="flex justify-center gap-8 text-[9px] text-[#444] font-black tracking-widest uppercase">
              <span className="flex items-center gap-1.5"><Lock size={10} /> Seguro</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={10} /> Garantía</span>
              <span className="flex items-center gap-1.5"><Smartphone size={10} /> Digital</span>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 py-24 max-w-3xl">
          <h2 className="italic-bold text-center text-4xl mb-12">PREGUNTAS FRECUENTES</h2>
          <div className="space-y-4">
            <FAQItem 
              question="¿ES UN LIBRO FÍSICO?" 
              answer="No, es un material 100% digital en formato PDF para que puedas acceder inmediatamente después del pago y leerlo en cualquier dispositivo."
            />
            <FAQItem 
              question="¿CÓMO RECIBO EL MATERIAL?" 
              answer="Recibirás un correo electrónico automático de Hotmart con tus claves de acceso apenas se confirme la transacción."
            />
            <FAQItem 
              question="¿EL PAGO ES SEGURO?" 
              answer="Absolutamente. Utilizamos la tecnología de cifrado de Hotmart para garantizar que tu información personal y financiera esté 100% protegida."
            />
            <FAQItem 
              question="¿SIRVE PARA CUALQUIER EDAD?" 
              answer="Sí. El sistema Focus Mindset está diseñado para cualquier persona que busque mejorar su rendimiento, disciplina y finanzas, sin importar su edad actual."
            />
          </div>
        </section>

        {/* Community Section */}
        <section className="container mx-auto px-6 py-24 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-accent-primary mb-8 flex justify-center"
          >
            <Instagram size={40} strokeWidth={1.5} />
          </motion.div>
          <h2 className="italic-bold text-4xl sm:text-6xl mb-4">COMUNIDAD <span className="text-accent-primary">FOCUS MINDSET</span></h2>
          <div className="text-text-muted text-xs font-bold tracking-[2px] uppercase mb-16">ÚNETE A MILES QUE YA ESTÁN TOMANDO EL CONTROL</div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-10 overflow-hidden rounded-3xl glass-card glow-fire"
          >
            <img 
              src="https://i.imgur.com/v2KtC5h.jpeg" 
              alt="Focus Mindset Community" 
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <a 
            href="https://www.instagram.com/focusmindsetok/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-black font-black uppercase rounded-full px-10 py-5 tracking-widest text-sm hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          >
            SÍGUENOS @FOCUSMINDSETOK
          </a>
          <p className="mt-8 text-[10px] text-[#444] font-black tracking-[3px] uppercase">👥 +50.000 SEGUIDORES EN LA RED</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 px-6 text-center bg-black/50">
        <div className="mb-8 flex justify-center opacity-20 grayscale">
          <Target size={24} />
        </div>
        <p className="text-[10px] text-[#333] font-black tracking-[3px] uppercase mb-4">© 2024 FOCUS MINDSET • EL ORDEN ES PODER.</p>
      </footer>
    </div>
  );
}
