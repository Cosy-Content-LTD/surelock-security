import { AlertTriangle, ChevronRight, Droplets, Flame, PenTool, Siren, Wrench } from "lucide-react";
import { motion } from "framer-motion";
const services = [
  {
    icon: Flame,
    title: "Emergency Lockout",
    desc: "Locked out of your home, office, or car? Our rapid-response team will get you back inside quickly and safely.",
  },
  {
    icon: AlertTriangle,
    title: "Lock Replacement",
    desc: "Upgrade or replace worn, damaged, or compromised locks with high-security alternatives.",
  },
  {
    icon: Droplets,
    title: "Key Cutting & Duplication",
    desc: "Precision key cutting for all lock types. Get spare keys made quickly and accurately.",
  },
  {
    icon: Wrench,
    title: "Lock Repair",
    desc: "Stiff, broken, or malfunctioning lock? We diagnose and repair all lock mechanisms efficiently.",
  },
  {
    icon: PenTool,
    title: "Security Upgrades",
    desc: "Enhance your property&apos;s security with multi-point locking systems and high-grade deadbolts.",
  },
  {
    icon: Siren,
    title: "24/7 Emergency Service",
    desc: "Round-the-clock emergency locksmith support — no call-out surcharges for late nights or weekends.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-secondary">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            What We Do
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Professional Locksmith <br className="hidden sm:block" />
            <span className="text-primary">Services</span>
          </h2>
        </div>
        <p className="text-white/60 text-lg max-w-sm lg:text-right">
          Comprehensive locksmith solutions for homes and businesses across Greater London.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 hover:bg-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <s.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {s.title}
            </h3>
            <p className="text-white/60 leading-relaxed mb-6 flex-grow" dangerouslySetInnerHTML={{ __html: s.desc }} />
            <a
              href="tel:0234567891"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all duration-200"
            >
              Call to Book <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;