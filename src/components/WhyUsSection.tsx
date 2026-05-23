import { ShieldCheck, Clock, CreditCard, Award } from "lucide-react";
import { motion } from "framer-motion";
const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Locked out at midnight? We&apos;re always on call. Our locksmiths respond fast, any hour of the day.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprises. You&apos;ll always know the cost before we begin any work.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Certified",
    desc: "All our engineers are fully insured, certified professionals with proven locksmith expertise.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    desc: "A decade of trusted locksmith service in Dulwich, Upper Sydenham, and across Greater London.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Why Choose SureLock
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-heading leading-tight mb-6">
              The Locksmith You Can <span className="text-primary">Actually Trust</span>
            </h2>
            <p className="text-text text-lg leading-relaxed">
              For over 10 years, SureLock Security has been the go-to locksmith for homeowners and businesses across Dulwich and Greater London. Our certified professionals deliver reliable, insured service every time.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <f.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-heading mb-2">{f.title}</h3>
                <p className="text-sm text-text leading-relaxed" dangerouslySetInnerHTML={{ __html: f.desc }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;