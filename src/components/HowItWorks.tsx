import { motion } from "framer-motion";
import { MessageSquare, FileText, CheckCircle2 } from "lucide-react";
const steps = [
  {
    icon: MessageSquare,
    title: "1. Call or Message Us",
    desc: "Reach out any time — phone or message. We respond immediately to assess your situation.",
  },
  {
    icon: FileText,
    title: "2. Receive a Clear Quote",
    desc: "Our locksmith provides a transparent, upfront quote before any work begins. No surprises.",
  },
  {
    icon: CheckCircle2,
    title: "3. Problem Solved",
    desc: "We complete the job efficiently and professionally, leaving your property fully secure.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Our Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-heading leading-tight mb-4">
            Fast &amp; Simple Process
          </h2>
          <p className="text-text text-lg">
            Getting locked in or out shouldn&apos;t be complicated. We make it easy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/30 group-hover:scale-110 transition-all duration-300">
                <step.icon className="w-10 h-10" />
              </div>
              <div className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full">
                <h3 className="text-xl font-bold text-heading mb-3">{step.title}</h3>
                <p className="text-text leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;