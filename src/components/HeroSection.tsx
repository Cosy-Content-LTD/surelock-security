import { MessageSquare, Phone, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-plumbing.jpg";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-secondary overflow-hidden"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Dulwich &amp; Greater London&apos;s Trusted Locksmith
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-white mb-6">
              Secure Your Home <br />
              <span className="text-primary">With Confidence</span>
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm font-semibold text-white">
                4.9/5 <span className="text-white/60 font-normal ml-1">based on 200+ reviews</span>
              </p>
            </div>

            <p className="text-lg text-white/75 leading-relaxed max-w-xl mb-10">
              SureLock Security delivers fast, professional locksmith services across Dulwich, Upper Sydenham, and Greater London. Fully insured, certified professionals you can trust — day or night.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="h-16 px-10 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30 font-bold text-lg gap-4 group hover:scale-105 transition-all duration-200" asChild>
                <a href="tel:0234567891">
                  <Phone className="h-6 w-6" />
                  Call 0234567891
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 rounded-xl border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 font-bold text-lg hover:scale-105 transition-all duration-200" asChild>
                <a href="#services">
                  Our Services
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 border-t border-white/10 pt-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Certified Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating stats card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-12 right-8 hidden lg:flex bg-white shadow-2xl rounded-2xl p-6 border border-border gap-6 divide-x divide-border"
        >
          <div className="text-center">
            <p className="text-4xl font-black text-primary">10+</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-text mt-1">Years Expert</p>
          </div>
          <div className="pl-6 text-center">
            <p className="text-4xl font-black text-primary">24/7</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-text mt-1">Available</p>
          </div>
          <div className="pl-6 text-center">
            <p className="text-4xl font-black text-primary">100%</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-text mt-1">Insured</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;