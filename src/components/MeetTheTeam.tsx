import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import teamImg from "@/assets/about-plumbing.jpg";
const MeetTheTeam = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
              About SureLock Security
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-heading leading-tight mb-6">
              A Decade of Trusted <span className="text-primary">Locksmith Expertise</span>
            </h2>
            <p className="text-text text-lg leading-relaxed mb-8">
              SureLock Security has proudly served Dulwich, Upper Sydenham, and the wider London Borough of Southwark for over 10 years. Our fully insured, certified professionals are committed to protecting what matters most to you.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "10+ Years of Professional Locksmith Service",
                "Fully Insured &amp; Certified Professionals",
                "Serving Dulwich, Sydenham &amp; Greater London",
                "Transparent Pricing — No Hidden Costs",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-text" dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 gap-3 hover:scale-105 transition-all duration-200" asChild>
              <a href="tel:0234567891">
                <Phone className="w-5 h-5" />
                Call Us: 0234567891
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80"
              alt="SureLock Security professional team"
              className="w-full h-full object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-white font-bold text-lg leading-snug">&quot;Your security is our priority. We treat every job with the care and precision it deserves.&quot;</p>
                <p className="text-white/70 text-sm mt-2 font-medium">— SureLock Security Team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;