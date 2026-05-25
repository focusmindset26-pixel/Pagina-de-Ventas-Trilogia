import { useState, useEffect, MouseEvent } from 'react';
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
  Quote,
  Zap,
  AlertTriangle,
  X
} from 'lucide-react';

const scrollToCheckout = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
  e.preventDefault();
  const element = document.getElementById('checkout');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

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
    <div className="bg-accent-primary text-black text-center py-2 px-4 text-[10px] sm:text-xs font-black tracking-[3px] uppercase sticky top-0 z-[110] shadow-[0_5px_20px_rgba(255,106,0,0.2)] flex justify-center items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-black animate-ping" />
      <span>OFERTA DE ACCESO INMEDIATO • TERMINA EN: <span className="font-mono">{formatTime(timeLeft)}</span></span>
    </div>
  );
};

const Pillar = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, borderColor: 'rgba(255, 106, 0, 0.2)' }}
    className="flex flex-col items-center text-center p-8 bg-card-bg border border-card-border rounded-2xl group transition-all duration-300"
  >
    <div className="text-accent-primary mb-5 p-4 bg-accent-primary/5 rounded-full group-hover:scale-110 transition-transform duration-300">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="italic-bold text-xl mb-3 group-hover:text-accent-primary transition-colors">{title}</h3>
    <p className="text-text-muted text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const BookCard = ({ title, subtitle, description, highlights, benefits, step, image }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:border-accent-primary/30 transition-all duration-500 group glow-fire"
  >
    <div className="bg-gradient-to-b from-white/5 to-transparent h-64 rounded-xl mb-6 flex items-center justify-center text-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none" 
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="italic-bold text-2xl tracking-tighter leading-none select-none text-white/5 group-hover:text-accent-secondary/40 transition-colors">
          {title}<br />{subtitle}
        </span>
      )}
      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black border border-white/10 text-accent-primary tracking-widest uppercase z-20">
        PASO {step}
      </div>
    </div>
    
    <h3 className="italic-bold text-2xl mb-4 group-hover:text-accent-primary transition-colors flex items-center gap-2">
      <span>{title} <span className="text-accent-primary">{subtitle}</span></span>
    </h3>
    
    <p className="text-text-muted text-sm mb-6 flex-grow leading-relaxed">{description}</p>
    
    <div className="space-y-5">
      <div>
        <div className="text-[10px] text-accent-primary uppercase tracking-wider font-extrabold mb-3 flex items-center gap-2">
          <Play size={10} className="fill-accent-primary text-accent-primary" /> QUÉ ENCONTRARÁS
        </div>
        <ul className="space-y-2 mb-6">
          {highlights.map((item: string, i: number) => (
            <li key={i} className="text-xs text-[#ccc] flex gap-2 leading-relaxed">
              <span className="text-accent-primary select-none font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
        <div className="text-[10px] text-white uppercase tracking-wider font-extrabold mb-3 flex items-center gap-2">
          <span className="text-accent-emerald">✓</span> BENEFICIOS REALES
        </div>
        <ul className="space-y-2">
          {benefits.map((item: string, i: number) => (
            <li key={i} className="text-xs text-[#ccc] flex gap-2">
              <Check size={12} className="text-accent-emerald shrink-0 mt-0.5" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-8 pt-4 border-t border-card-border flex justify-between items-center text-[10px] text-[#555] font-bold tracking-wider uppercase">
      <span className="text-zinc-600">FASE DEL MÉTODO</span>
      <span className="text-accent-secondary bg-accent-secondary/5 border border-accent-secondary/10 px-2 py-0.5 rounded-md">EBOOK INCLUIDO</span>
    </div>
  </motion.div>
);

const BonusCard = ({ icon: Icon, title, description, originalPrice }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center group hover:border-accent-emerald/30 transition-all duration-300 glow-emerald"
  >
    <div className="w-16 h-16 bg-accent-emerald/5 border border-accent-emerald/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon size={28} className="text-accent-emerald animate-pulse" />
    </div>
    <h3 className="italic-bold text-xl mb-3 group-hover:text-accent-emerald transition-colors">{title}</h3>
    <p className="text-text-muted text-xs mb-6 flex-grow uppercase tracking-tight font-bold text-[10px] leading-relaxed">
      {description}
    </p>
    <div className="mt-auto pt-4 border-t border-white/5 w-full">
      <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 font-extrabold">VALOR FÍSICO / COMERCIAL</div>
      <div className="text-base text-zinc-500 line-through font-bold mb-1">${originalPrice.toFixed(2)} USD</div>
      <div className="text-accent-emerald italic-bold text-xs tracking-[2px] bg-accent-emerald/10 border border-accent-emerald/20 px-3 py-1 rounded-full inline-block">GRATIS PARA TI</div>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, role, quote }: any) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden group hover:border-accent-primary/20 transition-all duration-500 glow-fire flex flex-col justify-between h-full text-left"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-accent-primary/10 transition-colors" />
    <Quote className="absolute top-6 right-6 text-white/5 group-hover:text-white/10 transition-colors shrink-0" size={40} />
    
    <div>
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-accent-primary fill-accent-primary" />
        ))}
      </div>
      
      <p className="text-zinc-200 italic text-base sm:text-lg mb-8 leading-relaxed relative z-10 font-medium">
        "{quote}"
      </p>
    </div>
    
    <div>
      <div className="flex items-center gap-4 border-t border-white/5 pt-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-white/10 flex items-center justify-center italic-bold text-accent-primary shrink-0">
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
    </div>
  </motion.div>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-card-border bg-card-bg rounded-xl overflow-hidden mb-3 transition-colors duration-300 hover:border-accent-primary/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors focus:outline-none"
      >
        <span className="font-bold text-sm tracking-wide text-zinc-100 uppercase">{question}</span>
        <ChevronDown size={18} className={`transition-transform duration-300 text-accent-primary ${isOpen ? 'rotate-180' : ''}`} />
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

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToCheckout}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-[100] bg-accent-primary text-black italic-bold px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(255,106,0,0.4)] flex items-center gap-2 group transition-all duration-300 font-extrabold tracking-widest text-xs border border-accent-secondary/20"
        >
          <span>OBTENER TRILOGÍA</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};



const TESTIMONIALS_DATA = [
  {
    name: "ADRIÁN M.",
    role: "EMPRENDEDOR",
    category: "emprendedor",
    quote: "Llevaba meses procrastinando mis metas financieras. Con la Trilogía Inquebrantable logré ordenar mis gastos y, lo más importante, mi cabeza. El cambio de identidad es real."
  },
  {
    name: "CARLA R.",
    role: "PROFESIONAL",
    category: "profesional",
    quote: "Lo que más me sirvió fue el dominio de los hábitos. He recuperado mi enfoque y mis niveles de energía. Siento que por fin tengo un sistema que funciona a largo plazo."
  },
  {
    name: "JAVIER S.",
    role: "ESTUDIANTE",
    category: "estudiante",
    quote: "Increíble cómo explican la psicología del dinero. No es solo ahorrar, es cambiar cómo ves la abundancia. Es la mejor inversión que he hecho este año."
  },
  {
    name: "MATEO T.",
    role: "CREADOR DE CONTENIDO",
    category: "emprendedor",
    quote: "La ingeniería de dopamina que explican en el tomo 2 me permitió apagar el celular por 4 horas al día y triplicar mi producción de contenido de alta calidad. Es absurda la velocidad con la que notas el cambio."
  },
  {
    name: "VALERIA G.",
    role: "DESARROLLADORA DE SOFTWARE",
    category: "profesional",
    quote: "Como programadora, mi mente siempre estaba en 'modo caos'. La reestructuración de mi autoconcepto me dio la paz mental para crear un negocio alternativo sin desgastarme."
  },
  {
    name: "SANTIAGO L.",
    role: "ESTUDIANTE UNIVERSITARIO",
    category: "estudiante",
    quote: "Salí de la parálisis por análisis gracias al método de la regla del impulso. En menos de un mes aumenté mi promedio académico y fundé mi primera consultoría júnior."
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredTestimonials = selectedCategory === 'todos' 
    ? TESTIMONIALS_DATA 
    : TESTIMONIALS_DATA.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent-secondary/5 blur-[120px] pointer-events-none z-0" />
      
      <TopBar />
      <FloatingCTA />

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-16 pb-4 text-center relative max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-accent-primary text-[10px] sm:text-xs font-black tracking-[3px] uppercase">
              ATENCIÓN: SÓLO PARA PERSONAS COMPROMETIDAS CON SU VIDA
            </span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/40 text-xs sm:text-sm font-black tracking-[4px] uppercase mb-6"
          >
            MÉTODO DE PROGRAMACIÓN NEURONAL • FOCUS MINDSET
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="italic-bold text-[2.6rem] xs:text-5xl sm:text-7xl md:text-8xl lg:text-[105px] leading-[0.95] tracking-tight mb-8"
          >
            DOMINA TU MENTE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">ORDENA</span> TU VIDA.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-text-muted text-base sm:text-xl max-w-2xl mx-auto mb-0 font-semibold leading-relaxed"
          >
            El sistema práctico, científico y sin rodeos diseñado para reconfigurar tu mentalidad limitante, eliminar la distracción digital y estructurar tus finanzas.
          </motion.p>


        </section>

        {/* PAS / Problem agitation vs solution section */}
        <section className="container mx-auto px-4 pt-4 pb-24 max-w-5xl text-center">
          <div className="text-accent-primary text-xs font-black tracking-[3px] uppercase mb-4">¿SEGUIRÁS EN LA DERIVA?</div>
          <h2 className="italic-bold text-4xl sm:text-5xl md:text-6xl mb-16 tracking-tighter">
            EL ABISMO DE LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">DIFERENCIA</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            {/* El Camino Común */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-red-950/5 border border-red-900/10 hover:border-red-500/15 transition-colors relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/5 blur-[80px]" />
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-red-500" size={24} />
                <h3 className="italic-bold text-xl text-red-500">EL CAMINO COMÚN (TU FRUSTRACIÓN)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-zinc-300">
                  <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Procrastinación Crónica:</strong> Sabes perfectamente lo que debes hacer, pero el teléfono vence tu disciplina cada mañana.</span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-300">
                  <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Dopamina Barata:</strong> Esclavitud mental por gratificación inmediata (redes, Reels, TikTok) bloqueando tu claridad profunda.</span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-300">
                  <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Fuga y Caos Financiero:</strong> Los ingresos se escurren de forma inconsciente en compras de micro-placer para calmar la ansiedad.</span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-300">
                  <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Identidad por Validación:</strong> Operar bajo el temor del qué dirán, limitándote a ti mismo por baja autoestima.</span>
                </li>
              </ul>
            </motion.div>

            {/* El Camino Inquebrantable */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-accent-emerald/5 border border-accent-emerald/10 hover:border-accent-emerald/20 transition-colors relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-emerald/5 blur-[80px]" />
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-accent-emerald" size={24} />
                <h3 className="italic-bold text-xl text-accent-emerald">EL CAMINO INQUEBRANTABLE (TU CONTROL)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-zinc-300">
                  <Check className="text-accent-emerald shrink-0 mt-0.5" size={16} />
                  <span><strong>Ejecución Mecánica:</strong> Planificar y actuar automáticamente sin depender de la motivación pasajera o del estado de ánimo.</span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-300">
                  <Check className="text-accent-emerald shrink-0 mt-0.5" size={16} />
                  <span><strong>Ayuno de Dopamina Consciente:</strong> Recuperación racional de tu capacidad cognitiva, mejorando la retención y foco de trabajo.</span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-300">
                  <Check className="text-accent-emerald shrink-0 mt-0.5" size={16} />
                  <span><strong>Inversión Cognitiva:</strong> Multiplicación sistemática del capital, priorizando activos mentales que compren tu futura tranquilidad.</span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-300">
                  <Check className="text-accent-emerald shrink-0 mt-0.5" size={16} />
                  <span><strong>Autoconcepto Altivo:</strong> Una seguridad inmutable fundamentada en tus procesos diarios, libre de la opinión de extraños.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>



        {/* System Section */}
        <section className="container mx-auto px-4 py-24 text-center max-w-6xl">
          <h2 className="italic-bold text-4xl sm:text-5xl md:text-6xl mb-4 tracking-tighter">
            EL SISTEMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">INQUEBRANTABLE</span>
          </h2>
          <div className="text-text-muted text-xs sm:text-sm font-black tracking-[4px] uppercase mb-16">
            TU HOJA DE RUTA HACIA EL ALTO RENDIMIENTO (MÁS DE 50,000 COPIAS LEÍDAS)
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <BookCard 
              step="1"
              title="IDENTIDAD"
              subtitle="INQUEBRANTABLE"
              image="https://i.imgur.com/EmSDggL.png"
              description="El cimiento indiscutible de toda mutación personal: quién eres realmente cuando nobody is watching."
              highlights={[
                "Auditoría de Autoconcepto profundo: Revela qué hilos invisibles te frenan.",
                "Cerradura de Creencias: Elimina el software nocivo y limitante de tu entorno.",
                "Estrategia de Blindaje del Círculo Social: Filtra y protege tu atención de parásitos sociales."
              ]}
              benefits={[
                "Desarrollarás inmunidad psicológica total a críticas de terceros.",
                "Seguridad radical para tomar determinaciones incómodas obligatorias.",
                "Claridad y propósito inquebrantable para levantarte motivado cada día."
              ]}
            />
            <BookCard 
              step="2"
              title="DOMINIO DE"
              subtitle="HÁBITOS"
              image="https://i.imgur.com/S9Fq7Wf.png"
              description="La ingeniería exacta de tu rutina diaria para asimilar y automatizar el éxito duradero."
              highlights={[
                "Alineamiento Dopamínico: Hackea tu mente para priorizar el esfuerzo a largo plazo.",
                "Dispositivos de Fricción Práctica: Diseña tu espacio para que procrastinar sea casi imposible.",
                "Mecánica del Impulso Inicial: Las pautas para no rendirte en mitad del ciclo nunca más."
              ]}
              benefits={[
                "Erradicación total de la pereza crónica al sentarte a trabajar.",
                "Niveles de atención y vitalidad mantenidos a lo largo de tu jornada.",
                "Estructura invisible de disciplina instalada firmemente sin sufrir fricciones corporales."
              ]}
            />
            <BookCard 
              step="3"
              title="FINANZAS Y"
              subtitle="RIQUEZA MENTAL"
              image="https://i.imgur.com/WDXcmqy.png"
              description="La psicología subyacente de la prosperidad unida a la gestión empírica moderna de tus cuentas."
              highlights={[
                "Arquitectura Financiera del 1%: ¿Cómo ve las oportunidades la gente de capital estable?",
                "Tácticas de Presupuesto Rígido pero Dinámico para crecimiento acelerado.",
                "La Matrix Inversionista: Claves primarias para diferenciar un multiplicador de un gasto."
              ]}
              benefits={[
                "Felicidad y orden interno financiero al registrar rigurosamente cada dólar.",
                "Ruptura de los topes invisibles que dictan cuánto puedes autoestimar ganar.",
                "Una base estructural de reservas seguras para apalancar proyectos de libertad."
              ]}
            />
          </div>
        </section>

        {/* Bonus Section */}
        <section className="bg-white/[0.02] border-y border-white/5 py-24">
          <div className="container mx-auto px-4 text-center max-w-6xl">
            <div className="inline-block px-4 py-2 bg-accent-emerald/5 border border-accent-emerald/20 rounded-full text-accent-emerald text-[10px] font-black tracking-[2px] uppercase mb-8">
              🎁 OFERTA EXCLUSIVA DE ENTRADA
            </div>
            <h2 className="italic-bold text-4xl sm:text-5xl md:text-6xl mb-4 tracking-tighter">
              TUS 3 <span className="text-accent-emerald">BONUS</span> COMPLETAMENTE GRATIS
            </h2>
            <div className="text-text-muted text-xs font-bold tracking-[2px] uppercase mb-16">
              INCLUIDOS SÓLO DURANTE LA CAMPAÑA ACTUAL DE HOY
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BonusCard 
                icon={Smartphone}
                title="DETOX DIGITAL"
                description="Hojas de ruta prácticas para desintoxicar tus receptores dopamínicos eliminando la adicción al scroll pasivo."
                originalPrice={10.00}
              />
              <BonusCard 
                icon={Sparkles}
                title="MANIFESTACIÓN REAL"
                description="La sincronización real entre la visualización profunda y la mecánica de ejecución diaria, sin fantasías ficticias."
                originalPrice={10.00}
              />
              <BonusCard 
                icon={CircleDollarSign}
                title="EDUCACIÓN COMPLETA"
                description="Formularios y herramientas para organizar, salvaguardar y expandir tus ahorros sistemáticos paso a paso."
                originalPrice={10.00}
              />
            </div>

            <div className="mt-12 inline-block px-8 py-4 bg-accent-emerald/5 border border-accent-emerald/20 rounded-full text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              VALOR COMPROBADO DE REGALOS: <span className="text-accent-emerald font-black">$30.00 USD</span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-24 text-center max-w-6xl">
          <div className="text-accent-primary text-xs font-black tracking-[3px] uppercase mb-4">★ PRUEBA SOCIAL INCONTESTABLE</div>
          <h2 className="italic-bold text-4xl sm:text-5xl md:text-6xl mb-8 tracking-tighter">
            PROGRESO REAL DE<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">NUESTROS ALUMNOS</span>
          </h2>

          {/* Interactive Categories filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-lg mx-auto">
            {['todos', 'emprendedor', 'profesional', 'estudiante'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 border ${
                  selectedCategory === cat 
                    ? 'bg-accent-primary text-black border-accent-primary shadow-[0_5px_15px_rgba(255,106,0,0.3)] scale-105' 
                    : 'bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat === 'todos' ? 'Ver Todos' : cat === 'profesional' ? 'Profesionales' : cat === 'estudiante' ? 'Estudiantes' : 'Emprendedores'}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredTestimonials.map((testimonial) => (
                <motion.div
                  layout
                  key={testimonial.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <TestimonialCard 
                    name={testimonial.name}
                    role={testimonial.role}
                    quote={testimonial.quote}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Checkout Section */}
        <section id="checkout" className="container mx-auto px-4 py-12 max-w-4xl relative">
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-primary/5 blur-[100px] pointer-events-none z-0" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-gradient-to-b from-card-bg via-black/80 to-black rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden shadow-[0_0_80px_rgba(255,106,0,0.1)] border border-card-border"
          >
            {/* Pulsing border indicator */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-emerald shadow-[0_0_20px_rgba(255,106,0,0.4)]" />
            
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent-primary/10 border border-accent-primary/20 rounded-full text-accent-primary text-[10px] sm:text-xs font-black tracking-widest uppercase mb-10">
              ⚡️ MEJOR PRECIO DEL AÑO HABILITADO
            </div>
            
            <h2 className="italic-bold text-5xl sm:text-7xl mb-10 tracking-tighter">
              ÚNETE AL <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-emerald font-black">1%</span>
            </h2>

            <div className="mb-10 bg-white/[0.01] border border-white/5 p-6 rounded-2xl max-w-md mx-auto">
              <div className="text-zinc-500 line-through text-lg font-bold mb-1">$24,99 <span className="text-[10px] no-underline tracking-[2px] font-black opacity-40 uppercase">VALOR REAL</span></div>
              
              <div className="flex items-end justify-center gap-1 font-heading font-black text-6xl sm:text-8xl leading-none my-2">
                <span className="text-accent-primary text-3xl mb-4 sm:mb-6">$</span>
                9,99
                <span className="text-text-muted text-base sm:text-xl font-normal leading-relaxed mb-4 sm:mb-6">USD</span>
              </div>
              <div className="text-[9px] text-accent-emerald font-black tracking-[2px] uppercase">
                PAGO ÚNICO • ACCESO DIGITAL COMPLETO PARA SIEMPRE
              </div>
            </div>

            <ul className="text-left max-w-sm mx-auto space-y-4 mb-12 font-bold text-sm bg-white/[0.01] p-6 rounded-2xl border border-white/5">
              <li className="flex items-center gap-3 text-zinc-200">
                <Check className="text-accent-emerald shrink-0" size={18} /> 
                <span>Trilogía Completa Focus Mindset (3 Libros)</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-200">
                <Check className="text-accent-emerald shrink-0" size={18} /> 
                <span>Bonus 1: Guía Detox Digital</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-200">
                <Check className="text-accent-emerald shrink-0" size={18} /> 
                <span>Bonus 2: Programación Neuronal Manifestada</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-200">
                <Check className="text-accent-emerald shrink-0" size={18} /> 
                <span>Bonus 3: Planilla de Gestión de Riqueza</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-200">
                <Check className="text-accent-primary shrink-0 animate-pulse" size={18} /> 
                <span>Compilación de Actualizaciones de por Vida</span>
              </li>
            </ul>

            <motion.a 
              href="https://pay.hotmart.com/V104008401K?off=0x7xdwbg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary py-6 px-10 rounded-2xl italic-bold text-xl sm:text-2xl text-black shadow-[0_0_50px_rgba(255,106,0,0.3)] hover:scale-105 transition-all mb-12 block text-center font-black tracking-widest"
            >
              OBTENER MI TRILOGÍA AHORA
            </motion.a>

            <div className="mb-10">
              <div className="text-[10px] text-zinc-500 font-extrabold tracking-[2px] uppercase mb-4">MÉTODOS DE PAGO SEGUROS Y PROCESADOS POR HOTMART</div>
              <div className="flex justify-center max-w-[320px] mx-auto filter bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <img 
                  src="https://i.imgur.com/ThbziAr.png" 
                  alt="Métodos de Pago" 
                  className="w-full transition-all duration-300 select-none object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left mb-10">
              <div className="shrink-0 bg-white/5 p-2 rounded-full border border-white/10">
                <img 
                  src="https://i.imgur.com/l7BL98b.png" 
                  alt="Garantía de Satisfacción" 
                  className="w-20 h-20 object-contain select-none shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="text-[14px] italic-bold text-white uppercase tracking-wider mb-2">7 DÍAS DE GARANTÍA INCONDICIONAL</div>
                <div className="text-[11px] text-text-muted font-bold leading-relaxed uppercase">Satisfacción total o te devolvemos el 100% de tu dinero de inmediato y sin preguntas capciosas. Operas bajo riesgo cero absoluto.</div>
              </div>
            </div>

            <div className="flex justify-center gap-8 text-[9px] text-[#444] font-black tracking-widest uppercase">
              <span className="flex items-center gap-1.5"><Lock size={10} className="text-zinc-500" /> Seguro</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={10} className="text-zinc-500" /> Garantía</span>
              <span className="flex items-center gap-1.5"><Smartphone size={10} className="text-zinc-500" /> Digital</span>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-24 max-w-3xl">
          <h2 className="italic-bold text-center text-4xl mb-12 tracking-tight">PREGUNTAS FRECUENTES</h2>
          <div className="space-y-4">
            <FAQItem 
              question="¿Es un libro físico o qué recibiré?" 
              answer="Es un material 100% digital en formato PDF de alta resolución optimizado para teléfonos móviles, tablets y ordenadores. Al realizar el pago, obtienes las claves y descargas al instante."
            />
            <FAQItem 
              question="¿Cómo accedo al contenido tras la compra?" 
              answer="Recibirás un correo directo e instantáneo de Hotmart con tu acceso prioritario. Podrás visualizarlo online o descargarlo para leer sin conexión en cualquier lugar del planeta."
            />
            <FAQItem 
              question="¿Los datos de mi tarjeta están protegidos?" 
              answer="Sí, absolutamente. Todo el proceso está asegurado por la plataforma bancaria internacional de Hotmart, que utiliza cifrados automáticos SSL de nivel militar de la más alta seguridad comercial en línea."
            />
            <FAQItem 
              question="¿Es este sistema apto para mi situación actual?" 
              answer="Sí. Hemos eliminado los rodeos teóricos innecesarios. El método va directo al grano mediante diagramas, auditorías claras y plantillas de hábitos diseñadas para personas que quieren ver resultados inmediatos."
            />
          </div>
        </section>

        {/* Community Section */}
        <section className="container mx-auto px-4 py-24 text-center max-w-4xl relative">
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-primary/5 blur-[100px] pointer-events-none z-0" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-accent-primary mb-8 flex justify-center"
          >
            <Instagram size={48} strokeWidth={1.5} className="animate-bounce" />
          </motion.div>
          <h2 className="italic-bold text-4xl sm:text-6xl mb-4 tracking-tighter">
            COMUNIDAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">FOCUS MINDSET</span>
          </h2>
          <div className="text-text-muted text-xs font-black tracking-[3px] uppercase mb-16">
            ÚNETE A MILES QUE YA TOMARON EL CONTROL DE SU FUTURO COGNITIVO
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-10 overflow-hidden rounded-3xl glass-card border border-white/5 shadow-[0_15px_40px_rgba(255,106,0,0.15)] glow-fire"
          >
            <img 
              src="https://i.imgur.com/v2KtC5h.jpeg" 
              alt="Focus Mindset Community" 
              className="w-full h-auto hover:scale-105 transition-transform duration-700 select-none cursor-pointer"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <a 
            href="https://www.instagram.com/focusmindsetok/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-black font-black uppercase rounded-full px-10 py-5 tracking-widest text-sm hover:scale-105 transition-all shadow-[0_10px_35px_rgba(255,255,255,0.1)] border border-transparent hover:bg-zinc-200"
          >
            SÍGUENOS @FOCUSMINDSETOK
          </a>
          <p className="mt-8 text-[10px] text-[#555] font-black tracking-[4px] uppercase">👥 +50.000 SEGUIDORES ACTIVO EN REDES</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 px-4 text-center bg-black/60 relative z-20">
        <div className="mb-8 flex justify-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
          <Target size={28} className="text-accent-primary" />
        </div>
        <p className="text-[10px] text-zinc-600 font-extrabold tracking-[4px] uppercase mb-4">
          © 2026 FOCUS MINDSET • EL ORDEN ES PODER ABSOLUTO.
        </p>
        <p className="text-[9px] text-zinc-700 font-semibold uppercase tracking-wider max-w-sm mx-auto">
          Cualquier resultado alcanzado está supeditado a tu propio esfuerzo, constancia y disciplina mental.
        </p>
      </footer>
    </div>
  );
}
