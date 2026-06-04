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

const BonusCard = ({ icon: Icon, title, promise, benefits, accelerator, originalPrice }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col text-left group hover:border-accent-emerald/30 transition-all duration-300 glow-emerald relative overflow-hidden bg-white/[0.01]"
  >
    {/* Decorative blur inside card */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-accent-emerald/5 blur-2xl rounded-full" />

    <div className="flex items-center gap-4 mb-6 relative z-10">
      <div className="w-12 h-12 bg-accent-emerald/10 border border-accent-emerald/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Icon size={22} className="text-accent-emerald" />
      </div>
      <div>
        <span className="text-[8px] text-accent-emerald font-black tracking-[2px] uppercase block mb-0.5">BONO EXCLUSIVO</span>
        <h3 className="italic-bold text-lg text-white group-hover:text-accent-emerald transition-colors uppercase leading-tight">{title}</h3>
      </div>
    </div>

    {/* Grand Promise */}
    <div className="mb-4 relative z-10">
      <span className="text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest block mb-1">CARTA DE PROMESA:</span>
      <p className="text-xs sm:text-sm text-zinc-200 font-bold leading-relaxed italic">
        "{promise}"
      </p>
    </div>

    {/* Benefits Checklist */}
    <div className="mb-6 space-y-2 flex-grow relative z-10">
      <span className="text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest block mb-2">LO QUE ADQUIERES:</span>
      {benefits.map((benefit: string, idx: number) => (
        <div key={idx} className="flex gap-2 text-xs text-zinc-400">
          <Check className="text-accent-emerald shrink-0 mt-0.5" size={12} />
          <span className="leading-normal">{benefit}</span>
        </div>
      ))}
    </div>

    {/* Acceleration Catalyst */}
    <div className="mb-6 bg-accent-emerald/[0.02] border border-accent-emerald/10 rounded-xl p-4 relative z-10">
      <span className="text-[8px] text-accent-emerald font-black tracking-[2px] uppercase block mb-1">⚡️ CATALIZADOR DE RESULTADOS</span>
      <p className="text-[11px] text-zinc-400 leading-relaxed font-semibold">
        {accelerator}
      </p>
    </div>

    {/* Pricing details */}
    <div className="mt-auto pt-4 border-t border-white/5 w-full flex items-center justify-between gap-4 relative z-10">
      <div>
        <div className="text-[9px] text-zinc-500 uppercase tracking-wider font-extrabold mb-0.5">VALOR COMPROBADO</div>
        <div className="text-sm text-zinc-500 line-through font-bold">${originalPrice.toFixed(2)} USD</div>
      </div>
      <div className="text-accent-emerald italic-bold text-[10px] tracking-[1.5px] bg-accent-emerald/10 border border-accent-emerald/20 px-3 py-1.5 rounded-full uppercase">
        Incluido Gratis
      </div>
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
        <section className="container mx-auto px-4 pt-16 pb-12 text-center relative max-w-5xl">
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
            className="text-white/40 text-xs sm:text-sm font-black tracking-[4px] uppercase mb-4"
          >
            SABES EXACTAMENTE LO QUE TIENES QUE HACER. ¿POR QUÉ SIGUES SIN HACERLO?
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="italic-bold text-[2rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight mb-8"
          >
            SI LLEVAS AÑOS EMPEZANDO Y ABANDONANDO TUS OBJETIVOS, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">ESTA TRILOGÍA FUE CREADA PARA ROMPER ESE PATRÓN.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-text-muted text-base sm:text-lg max-w-3xl mx-auto mb-10 font-medium leading-relaxed"
          >
            Cada mañana vuelves a caer en la misma trampa: cambias tus metas financieras, tu vitalidad y tus proyectos a largo plazo por un puñado de <span className="text-white font-bold">dopamina barata de scroll infinito</span>. Tu problema no es la falta de ambición o de ver videos motivacionales. Si tus días se sienten caóticos, es porque careces de un manual científico para gobernar tu enfoque y reprogramar tu identidad.
          </motion.p>

          {/* Core Pain and Benefit Identifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-[#ff6a00]/30 transition-all">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-primary/50" />
              <div className="text-[10px] text-accent-primary font-black tracking-widest uppercase mb-2">Tomo I — Identidad Inquebrantable</div>
              <h3 className="italic-bold text-lg text-white mb-2 uppercase">Destruye el Auto-saboteo</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Reprograma tu autoconcepto subconsciente. Deja de buscar la validación del qué dirán y formatea tu mente desde tus rutinas para ser inmune al arrepentimiento.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-accent-secondary/30 transition-all">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-secondary/50" />
              <div className="text-[10px] text-accent-secondary font-black tracking-widest uppercase mb-2">Tomo II — Dominio de Hábitos</div>
              <h3 className="italic-bold text-lg text-white mb-2 uppercase">Hábitos Industriales</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Corta de raíz la pereza mediante un sistema práctico que diseña la fricción de tu espacio. Trabaja mecánicamente sin depender de la fuerza de voluntad.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-accent-emerald/30 transition-all">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-emerald/50" />
              <div className="text-[10px] text-accent-emerald font-black tracking-widest uppercase mb-2">Tomo III — Finanzas & Recuperación</div>
              <h3 className="italic-bold text-lg text-white mb-2 uppercase">Limpieza & Control</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Desbloquea tus topes de ahorro, audita el dinero que se desvanece en compras de micro-placer irracional y recupera tu capacidad de atención enfocándote en crecer.
              </p>
            </div>
          </motion.div>

          {/* direct response high converting copy Bullets of benefit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-xl mx-auto text-left space-y-4 mb-10 bg-gradient-to-br from-white/[0.02] to-transparent p-6 sm:p-8 rounded-2xl border border-white/5"
          >
            <h4 className="text-xs text-zinc-500 font-extrabold uppercase tracking-widest mb-2 text-center">LO QUE LOGRARÁS EN LOS PRÓXIMOS 21 DÍAS:</h4>
            <div className="flex gap-3 text-sm text-zinc-300">
              <Check className="text-accent-emerald shrink-0 mt-0.5" size={16} />
              <span><strong>Recuperar 3 horas productivas al día:</strong> Extirpando la dependencia de TikTok, Reels y las notificaciones basura de tu cerebro.</span>
            </div>
            <div className="flex gap-3 text-sm text-zinc-300">
              <Check className="text-accent-emerald shrink-0 mt-0.5" size={16} />
              <span><strong>Eliminar la culpa de acostarte frustrado:</strong> Termina tus jornadas sabiendo que de verdad avanzaste de forma agresiva hacia tus metas.</span>
            </div>
            <div className="flex gap-3 text-sm text-zinc-300">
              <Check className="text-accent-emerald shrink-0 mt-0.5" size={16} />
              <span><strong>Estructura financiera blindada:</strong> Detén el desangre de gastos hormiga provocados por tu propia ansiedad.</span>
            </div>
            <div className="flex gap-3 text-sm text-zinc-300">
              <Check className="text-accent-emerald shrink-0 mt-0.5" size={16} />
              <span><strong>Actuación racional sostenida:</strong> Convertirás la disciplina de estudio, ejercicio y control en algo tan involuntario como cepillarte los dientes.</span>
            </div>
          </motion.div>

          {/* High-converting Premium CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <button
              onClick={scrollToCheckout}
              className="w-full sm:w-auto bg-gradient-to-r from-accent-primary to-accent-secondary text-black font-extrabold tracking-widest text-sm uppercase px-12 py-5 rounded-full hover:scale-105 transition-transform shadow-[0_10px_35px_rgba(255,106,0,0.35)] duration-300 border border-accent-secondary/30"
            >
              ACCEDER A LA TRILOGÍA DIGITAL POR $9.99 USD
            </button>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold flex items-center gap-2">
              <Lock size={12} className="text-accent-emerald" /> Garantía de Satisfacción de 7 días • Entrega Digital Inmediata
            </p>
          </motion.div>
        </section>

        {/* PAS / Storytelling: Process of Transformation Section */}
        <section className="container mx-auto px-4 pt-8 pb-24 max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-accent-primary text-xs font-black tracking-[3px] uppercase mb-4">TU RUTA DE MUTACIÓN PERSONAL</div>
            <h2 className="italic-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase leading-none">
              EL PROCESO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">TRANSFORMACIÓN</span> REAL
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm uppercase tracking-wide mt-4 font-bold max-w-xl mx-auto leading-relaxed">
              No estás ante una simple lista de libros de autoayuda. Esto es un mapa exacto para cruzar el abismo que separa tu realidad de tu verdadero potencial.
            </p>
          </div>

          <div className="space-y-12 relative">
            {/* Timeline Connective Line (Only on Desktop) */}
            <div className="absolute left-[50%] top-8 bottom-8 w-[2px] bg-gradient-to-b from-red-500/20 to-accent-primary/20 hidden md:block -translate-x-1/2 pointer-events-none" />

            {/* Step 1: ANTES (El Bucle de la Inconsistencia) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative"
            >
              <div className="md:col-span-5 md:text-right flex flex-col md:items-end order-2 md:order-1">
                <span className="inline-block px-3 py-1 bg-red-950/40 border border-red-900/30 text-red-500 text-[10px] font-black tracking-widest uppercase rounded-full mb-3">
                  ESTADO 01: EL CONTROL PERDIDO
                </span>
                <h3 className="italic-bold text-2xl sm:text-3xl text-zinc-100 mb-4 uppercase">
                  ANTES: LA PRISIÓN DEL <span className="text-red-500">AUTO-SABOTEO</span>
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Vives en una lucha constante contra ti mismo, posponiendo lo inevitable y rindiéndote ante la comodidad instantánea que luego te llena de culpa.
                </p>
                <div className="space-y-4 w-full md:max-w-sm">
                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex gap-3 text-left">
                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">La Falsa Promesa del Mañana</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">Te acuestas con grandes planes de levantarte y ganar el día, pero al despertar tu cerebro exige su recompensa fácil y pospones la alarma otra vez.</p>
                    </div>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex gap-3 text-left">
                    <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">Hábitos Inconsistentes y de Papel</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">Empiezas el lunes con ferocidad. El miércoles te saltas la rutina. El viernes abandonas. Sientes que estás empujando un camión cuesta arriba sin tracción.</p>
                    </div>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex gap-3 text-left">
                    <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">Fuga en tus Finanzas por Ansiedad</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">Ganas dinero pero se escurre de tus manos. Compras pequeños caprichos para saciar un vacío temporal. Al final del mes, sigues en el mismo casillero financiero.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Node icon */}
              <div className="md:col-span-2 flex justify-center items-center z-10 order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-red-950/80 border-2 border-red-500/30 flex items-center justify-center text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                  <AlertTriangle size={20} />
                </div>
              </div>

              {/* Graphic container/quote */}
              <div className="md:col-span-5 order-3">
                <div className="bg-red-950/5 border border-red-900/10 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-red-500/50" />
                  <Quote className="text-red-500/5 absolute -right-4 -bottom-4" size={120} />
                  <p className="text-zinc-300 text-sm italic leading-relaxed font-medium">
                    "Es desesperante despertarte sabiendo exactamente de lo que eres capaz, mirar tus metas y, al final del día, darte cuenta de que volviste a perder el tiempo en redes sociales y micro-compras inútiles. Sentirte estancado no es por pereza física, es cansancio mental."
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-6 h-[1px] bg-red-500" />
                    <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest">El patrón de frustración recurrente</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2: PUNTO DE QUIEBRE (The Revelation / Breaking Point) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative py-8"
            >
              {/* Decorative background glow for the breaking point */}
              <div className="absolute inset-0 bg-accent-primary/5 blur-[60px] pointer-events-none rounded-full" />
              
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="bg-gradient-to-br from-zinc-950 to-bg border border-accent-primary/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden group shadow-[0_0_50px_rgba(255,106,0,0.1)]">
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-accent-primary to-accent-secondary" />
                  <div className="text-[10px] text-accent-primary font-black tracking-widest uppercase mb-3 flex items-center gap-1.5">
                    <Sparkles size={10} className="animate-spin text-accent-primary" /> LA REVELACIÓN DE HIERRO
                  </div>
                  <h4 className="italic-bold text-lg text-white uppercase mb-3 text-accent-primary">No estás roto. Solo careces de un manual de usuario.</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                    "Tus resultados actuales no reflejan tu capacidad de enfoque. Reflejan la ineficiencia de tu sistema actual. Intentas domar tus metas usando fuerza de voluntad temporal frente a algoritmos de distracción que facturan miles de millones. Necesitas reprogramar tu identidad para que la disciplina sea un proceso mecánico, no una tortura emocional."
                  </p>
                </div>
              </div>

              {/* Center Node icon */}
              <div className="md:col-span-2 flex justify-center items-center z-10 order-1 md:order-2">
                <div className="w-16 h-16 rounded-full bg-accent-primary/10 border-2 border-accent-primary flex items-center justify-center text-accent-primary shadow-[0_0_30px_rgba(255,106,0,0.4)] animate-pulse">
                  <Zap size={24} className="fill-accent-primary" />
                </div>
              </div>

              <div className="md:col-span-5 text-left flex flex-col items-start order-3">
                <span className="inline-block px-3 py-1 bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] font-black tracking-widest uppercase rounded-full mb-3">
                  FASE 02: EL PUNTO DE QUIEBRE
                </span>
                <h3 className="italic-bold text-2xl sm:text-3xl text-zinc-100 mb-4 uppercase">
                  ENTIENDES QUE TU <span className="text-accent-primary">POTENCIAL</span> NO ES TU LÍMITE
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Ocurre el momento exacto donde dejas de mentirte. Te das cuenta de que no necesitas ver más tutoriales ni buscar más motivación efímera en internet. Lo único que requiere tu mentalidad es un **diseño de hábitos rígido** con un cimiento identitario sólido.
                </p>
                <div className="text-xs text-[#ccc] bg-white/[0.02] border border-white/5 p-4 rounded-xl flex items-center gap-2 font-bold uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-accent-primary animate-ping" />
                  Ahí es donde el sistema se vuelve el verdadero puente.
                </div>
              </div>
            </motion.div>

            {/* Step 3: DESPUÉS (El Dominio Inquebrantable) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative"
            >
              <div className="md:col-span-5 text-left flex flex-col items-start order-2 md:order-1">
                <span className="inline-block px-3 py-1 bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-[10px] font-black tracking-widest uppercase rounded-full mb-3">
                  ESTADO 03: EL ACCESO LIBRE
                </span>
                <h3 className="italic-bold text-2xl sm:text-3xl text-zinc-100 mb-4 uppercase">
                  DESPUÉS: SEÑOR DE TU <span className="text-accent-emerald">ENFOQUE</span>
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Te transformas en el ingeniero de tu propia conducta. Las acciones fluyen sin batallas internas; el dolor de posponer se transforma en el orgullo de progresar.
                </p>
                <div className="space-y-4 w-full md:max-w-sm">
                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex gap-3 text-left">
                    <Check className="text-accent-emerald shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">Identidad Blindada a Prueba de Opiniones</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">No buscas aprobación ajena. Actúas bajo un autoconcepto implacable: haces lo que dices con sobria consistencia diaria.</p>
                    </div>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex gap-3 text-left">
                    <Check className="text-accent-emerald shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">Hábitos de Acero que Trabajan por Ti</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">Diseñaste tu entorno para obligarte al éxito. Estudiar, trabajar en tus metas y entrenar fluyen de forma tan pasiva como el piloto automático.</p>
                    </div>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex gap-3 text-left">
                    <Check className="text-accent-emerald shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">Control de tus Finanzas Militantes</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">Cada moneda es guiada conscientemente. Se disuelve la ansiedad de ahorro y estructuraras tu capital para multiplicar tu estatus de libertad mental.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Node icon */}
              <div className="md:col-span-2 flex justify-center items-center z-10 order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-accent-emerald/10 border-2 border-accent-emerald/30 flex items-center justify-center text-accent-emerald shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <Check size={20} />
                </div>
              </div>

              {/* Graphic container/quote */}
              <div className="md:col-span-5 order-3">
                <div className="bg-accent-emerald/5 border border-accent-emerald/10 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-accent-emerald/50" />
                  <Quote className="text-accent-emerald/5 absolute -right-4 -bottom-4" size={120} />
                  <p className="text-zinc-300 text-sm italic leading-relaxed font-medium">
                    "Pasas de la pesadez de sobrevivir los días a la plenitud absoluta de crear metas reales. La tranquilidad interna de apagar las pantallas, leer, saber que tu dinero está creciendo de verdad y organizando tu mente no tiene precio. Esto de verdad cura el estrés diario."
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-6 h-[1px] bg-accent-emerald" />
                    <span className="text-[10px] text-accent-emerald font-extrabold uppercase tracking-widest">El destino de la Trilogía Focus Mindset</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Emotional Pitch: Bridging the story directly to the system */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-to-br from-white/[0.02] to-transparent p-8 sm:p-12 rounded-3xl border border-white/5 max-w-4xl mx-auto backdrop-blur-sm"
          >
            <h3 className="italic-bold text-2xl sm:text-3xl text-white mb-4 uppercase">
              LA TRILOGÍA ES EL <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">PUENTE EXACTO</span> DE ESTE PROCESO
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              No tienes que reinventar la rueda ni sufrir años sufriendo parálisis por análisis. Hemos resumido las tácticas empíricas más potentes de neuro-productividad y desprogramación de identidad en un sistema secuencial de 3 pasos que puedes empezar a digerir hoy mismo por menos de lo que cuesta una cena de comida rápida.
            </p>
            <button 
              onClick={scrollToCheckout}
              className="w-full sm:w-auto bg-gradient-to-r from-accent-primary to-accent-secondary text-black font-extrabold tracking-widest text-xs uppercase px-10 py-5 rounded-full hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,106,0,0.25)] flex items-center justify-center gap-2 mx-auto"
            >
              <span>SÍ, ESTO ES EXACTAMENTE LO QUE NECESITO</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <BonusCard 
                icon={Smartphone}
                title="DETOX DIGITAL"
                promise="Reinicia tus receptores de atención en 72 horas y recupera hasta 3 horas muertas de tu día."
                benefits={[
                  "Corta el impulso mecánico de tocar el teléfono al despertar en tu cama.",
                  "Elimina la fatiga cerebral nocturna y la dispersión mental persistente.",
                  "Filtros de bloqueo ambiental para blindar tus horas de concentración masiva."
                ]}
                accelerator="ACELERADOR DE PROGRESO: Despeja de inmediato el desorden mental excesivo para que puedas absorber y ejecutar el Tomo I sin resistencia neurológica."
                originalPrice={10.00}
              />
              <BonusCard 
                icon={Sparkles}
                title="BIOMECÁNICA DE EJECUCIÓN SOBERANA"
                promise="Transforma tus anhelos y metas abstractas en comandos subconscientes de acción diaria involuntaria."
                benefits={[
                  "Sincroniza tus metas a largo plazo con tareas mecánicas cotidianas.",
                  "Disuelve de raíz la duda existencial y el perfeccionismo paralizante.",
                  "Diseña disparadores de conducta física para actuar sin excusas corporales."
                ]}
                accelerator="ACELERADOR DE PROGRESO: Fusiona la teoría identitaria del Tomo II con tu entorno material diario, forzando a tu mente a ejecutar sin batallas internas."
                originalPrice={10.00}
              />
              <BonusCard 
                icon={CircleDollarSign}
                title="SISTEMA DE AUDITORÍA FINANCIERA"
                promise="Detecta y detiene de forma instantánea el desangre silencioso de tus gastos compulsivos en menos de 24 horas."
                benefits={[
                  "Formularios dinámicos y limpios para registrar y ubicar fugas de capital.",
                  "Matriz de prioridades automáticas para acelerar el ahorro mensual.",
                  "Planilla de control autónomo para erradicar compras inducidas por la ansiedad."
                ]}
                accelerator="ACELERADOR DE PROGRESO: Te asegura retornos financieros inmediatos al frenar tus gastos hormiga involuntarios a medida que lees el Tomo III."
                originalPrice={10.00}
              />
            </div>

            <div className="mt-12 inline-block px-8 py-4 bg-accent-emerald/5 border border-accent-emerald/20 rounded-full text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              VALOR TOTAL DE REGALOS: <span className="text-accent-emerald font-black">$30.00 USD</span>
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
        <section id="checkout" className="container mx-auto px-4 py-16 max-w-5xl relative">
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-primary/5 blur-[100px] pointer-events-none z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 text-left">
            {/* Left Column: Stack of Value & Ethical Adjustments */}
            <div className="lg:col-span-7 space-y-6">
              {/* Value Stack */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 bg-white/[0.01]">
                <div className="text-[10px] text-accent-primary font-black tracking-[3px] uppercase mb-1">EL ARCHIVO COMPLETO DE TRANSFORMACIÓN</div>
                <h3 className="italic-bold text-xl sm:text-2xl text-white mb-6 uppercase">APILAMIENTO DE VALOR (VALUE STACK)</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <div className="flex items-start gap-2.5">
                      <Check className="text-accent-secondary shrink-0 mt-1" size={14} />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-zinc-200">Tomo I: Identidad Inquebrantable</h4>
                        <p className="text-[10px] text-zinc-500 font-medium uppercase">Manual de desprogramación de auto-saboteo</p>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-400 font-bold font-mono">$19.00 USD</span>
                  </div>

                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <div className="flex items-start gap-2.5">
                      <Check className="text-accent-secondary shrink-0 mt-1" size={14} />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-zinc-200">Tomo II: Dominio de Hábitos</h4>
                        <p className="text-[10px] text-zinc-500 font-medium uppercase">Diseño de fricción y sistemas de acero</p>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-400 font-bold font-mono">$19.00 USD</span>
                  </div>

                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <div className="flex items-start gap-2.5">
                      <Check className="text-accent-secondary shrink-0 mt-1" size={14} />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-zinc-200">Tomo III: Finanzas & Riqueza Mental</h4>
                        <p className="text-[10px] text-zinc-500 font-medium uppercase">Presupuesto táctico y liberación cognitiva</p>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-400 font-bold font-mono">$19.00 USD</span>
                  </div>

                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald mt-2" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#eee] flex items-center gap-1.5">
                          <span>Bono 1: DETOX DIGITAL</span>
                          <span className="text-[8px] bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald font-black px-1.5 py-0.5 rounded uppercase">Bono</span>
                        </h4>
                        <p className="text-[10px] text-zinc-500 font-medium uppercase">Recuperación extrema de receptores dopamínicos</p>
                      </div>
                    </div>
                    <span className="text-xs text-accent-emerald font-bold font-mono">$10.00 USD</span>
                  </div>

                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald mt-2" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#eee] flex items-center gap-1.5">
                          <span>Bono 2: Biomecánica de Ejecución Soberana</span>
                          <span className="text-[8px] bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald font-black px-1.5 py-0.5 rounded uppercase">Bono</span>
                        </h4>
                        <p className="text-[10px] text-zinc-500 font-medium uppercase font-sans">Acción física pasiva sin fuerza de voluntad</p>
                      </div>
                    </div>
                    <span className="text-xs text-accent-emerald font-bold font-mono">$10.00 USD</span>
                  </div>

                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald mt-2" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#eee] flex items-center gap-1.5">
                          <span>Bono 3: Sistema de Auditoría Financiera</span>
                          <span className="text-[8px] bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald font-black px-1.5 py-0.5 rounded uppercase">Bono</span>
                        </h4>
                        <p className="text-[10px] text-zinc-500 font-medium uppercase">Matriz de rastreo y contención de gastos hormiga</p>
                      </div>
                    </div>
                    <span className="text-xs text-accent-emerald font-bold font-mono">$10.00 USD</span>
                  </div>

                  <div className="flex justify-between items-center py-2.5">
                    <div className="flex items-start gap-2.5">
                      <Check className="text-accent-secondary shrink-0 mt-1" size={14} />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-zinc-200">Actualizaciones prioritarias de por vida</h4>
                        <p className="text-[10px] text-zinc-500 font-medium uppercase font-sans">Acceso inmediato a futuras revisiones sin costo adicional</p>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-400 font-bold font-mono">$19.00 USD</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                  <div className="text-xs text-zinc-500 font-extrabold uppercase tracking-widest">VALOR CONJUNTO REAL EVALUADO:</div>
                  <div className="text-base sm:text-lg text-zinc-400 font-black line-through font-mono">$106.00 USD</div>
                </div>
              </div>

              {/* Psychological Comparisons */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 bg-white/[0.01]">
                <div className="text-[10px] text-[#888] font-black tracking-[3px] uppercase mb-1">MESA DE PERSPECTIVAS LOGICOTEMPORALES</div>
                <h3 className="italic-bold text-xl text-white mb-6 uppercase">¿QUÉ REPRESENTAN REALMENTE $9.99 USD HOY?</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-xl">
                    <span className="text-[9px] text-red-500 font-black tracking-widest uppercase block mb-1">A) UN GASTO DE ESCAPISMO PASAJERO</span>
                    <h4 className="text-xs font-black text-white uppercase mb-2">Comida Rápida o 2 Cafés con Azúcar</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed font-semibold mb-2">Dura escasos 15 minutos de gratificación instantánea artificial, te produce un pico drástico de cansancio a las pocas horas e incrementa silenciosamente tu culpa de inacción diaria.</p>
                    <span className="text-[11px] text-red-500 font-bold uppercase">$9.99 USD perdidos para siempre.</span>
                  </div>

                  <div className="bg-accent-emerald/10 border border-accent-emerald/20 p-4 rounded-xl">
                    <span className="text-[9px] text-accent-emerald font-black tracking-widest uppercase block mb-1">B) UN ACTIVO DE LIBERACIÓN DE ATENCIÓN</span>
                    <h4 className="text-xs font-black text-white uppercase mb-2">Trilogía Focus Mindset + Bonos</h4>
                    <p className="text-xs text-zinc-300 leading-relaxed font-semibold mb-2">Frena tu desgano crónico, te reintegra el control absoluto de tus rutinas de mañana, bloquea tus fugas financieras de manera estable y te acompaña para siempre.</p>
                    <span className="text-[11px] text-accent-emerald font-black uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                      Inversión inteligente de por vida.
                    </span>
                  </div>
                </div>
              </div>

              {/* Clean Honest Pricing Justifications */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 bg-white/[0.01]">
                <div className="text-[10px] text-[#888] font-black tracking-[3px] uppercase mb-1">ÉTICA Y HONESTIDAD CIENTÍFICA</div>
                <h3 className="italic-bold text-xl text-white mb-6 uppercase">¿POR QUÉ CONCEDER ESTE VALOR POR SÓLO $9.99 USD?</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-lg bg-zinc-900 border border-white/5 text-xs text-accent-emerald flex items-center justify-center font-bold font-mono shrink-0">1</div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wide">Cero Costos de Impresión y Despacho Físico</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">Al operar bajo un sistema estricto de distribución digital, erradicamos por completo las fugas de logística, empaque y aranceles postales nacionales. Transferimos el total de ese ahorro directo a tu precio de acceso.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-lg bg-zinc-900 border border-white/5 text-xs text-accent-emerald flex items-center justify-center font-bold font-mono shrink-0">2</div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wide">Eliminación de Preocupaciones Económicas</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">La distracción digital, la procrastinación masiva y el agobio financiero dañan a cualquiera por igual. Queremos que el precio sea la menor de tus justificaciones para seguir estancado en tus hábitos.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-lg bg-zinc-900 border border-white/5 text-xs text-accent-emerald flex items-center justify-center font-bold font-mono shrink-0">3</div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wide">Una Relación Transparentemente Rentable</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">No te conocemos aún. Sabemos que si te vendemos un programa de $200 USD sin antes probar nuestro nivel táctico, desconfiarás con total razón. Al entregarte un producto colosalmente superior a su precio simbólico, nos ganamos tu fidelidad absoluta para siempre una vez veas tus primeros resultados reales.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Checkout Card Actions */}
            <div className="lg:col-span-5 lg:sticky lg:top-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-card-bg via-black/90 to-black rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-[0_0_85px_rgba(255,106,0,0.12)] border border-card-border"
              >
                {/* Pulsing border indicator */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-accent-secondary shadow-[0_0_20px_rgba(255,106,0,0.4)]" />
                
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent-primary/10 border border-accent-primary/20 rounded-full text-accent-primary text-[10px] font-black tracking-widest uppercase mb-8">
                  ⚡️ MEJOR PRECIO HABILITADO
                </div>
                
                <h2 className="italic-bold text-4xl sm:text-5xl mb-6 tracking-tighter uppercase leading-tight">
                  ÚNETE AL <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary font-black">1% DE ENFOQUE</span>
                </h2>

                <p className="text-xs text-zinc-400 mb-6 leading-relaxed max-w-xs mx-auto">
                  Adquiere la Trilogía Digital completa junto a los 3 programas de bonificación inmediata.
                </p>

                <div className="mb-8 bg-white/[0.01] border border-white/5 p-6 rounded-2xl">
                  <div className="text-zinc-500 line-through text-xs font-bold mb-1 uppercase tracking-wide">VALOR INDEPENDIENTE CONJUNTO: $106.00 USD</div>
                  
                  <div className="flex items-end justify-center gap-0.5 font-heading font-black text-5xl sm:text-7xl leading-none my-2 text-white">
                    <span className="text-accent-primary text-2xl mb-4">$</span>
                    9,99
                    <span className="text-text-muted text-sm font-normal leading-relaxed mb-4">USD</span>
                  </div>
                  <div className="text-[9px] text-accent-emerald font-black tracking-[2px] uppercase">
                    PAGO ÚNICO • ACCESO VITALICIO ILIMITADO
                  </div>
                </div>

                <motion.a 
                  href="https://pay.hotmart.com/V104008401K?off=0x7xdwbg"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary py-5 px-6 rounded-2xl italic-bold text-lg text-black shadow-[0_0_40px_rgba(255,106,0,0.3)] hover:scale-105 transition-all mb-8 block text-center font-black tracking-widest uppercase"
                >
                  OBTENER MI TRILOGÍA AHORA
                </motion.a>

                <div className="mb-8 border-t border-white/5 pt-6 text-left space-y-3">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <Check size={14} className="text-accent-emerald shrink-0" />
                    <span>3 Tomos Principales Listos Para Descarga</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <Check size={14} className="text-accent-emerald shrink-0" />
                    <span>3 Programas Aceleradores de Bono Gratis</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <Check size={14} className="text-accent-emerald shrink-0" />
                    <span>Soporte al Lector y Actualizaciones de por Vida</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-[9px] text-zinc-500 font-extrabold tracking-[2px] uppercase mb-3">MÉTODOS PROCESADOS CON SEGURIDAD MILITAR POR HOTMART</div>
                  <div className="flex justify-center max-w-[260px] mx-auto filter bg-white/[0.02] px-3 py-1.5 rounded-xl border border-white/5">
                    <img 
                      src="https://i.imgur.com/ThbziAr.png" 
                      alt="Métodos de Pago" 
                      className="w-full select-none object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-4 flex gap-4 text-left">
                  <div className="shrink-0 bg-white/5 p-1 rounded-full border border-white/10 flex items-center justify-center">
                    <img 
                      src="https://i.imgur.com/l7BL98b.png" 
                      alt="Garantía de Satisfacción" 
                      className="w-12 h-12 object-contain select-none shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] italic-bold text-white uppercase tracking-wider mb-1">GARANTÍA DE 7 DÍAS</div>
                    <div className="text-[9px] text-text-muted font-bold leading-normal uppercase text-zinc-400">Reembolso incondicional y sin burocracia. No corres riesgo alguno.</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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
