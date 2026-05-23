import { Star } from "lucide-react";
import { motion } from "framer-motion";
const reviews = [
  {
    name: "Michael T.",
    location: "Dulwich, SE21",
    text: "Locked out late on a weeknight — SureLock arrived within the hour. Professional, efficient, and priced fairly. Couldn&apos;t ask for more.",
  },
  {
    name: "Claire B.",
    location: "Upper Sydenham, SE26",
    text: "Had all the locks replaced after a break-in. The team was reassuring, fast, and left everything spotless. Highly recommend their service.",
  },
  {
    name: "David K.",
    location: "London Borough of Southwark",
    text: "Used SureLock for a full security upgrade — new multi-point locks throughout. Excellent advice and top quality installation. Very happy.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              Client Reviews
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-6 py-4 border border-white/10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <div>
              <p className="font-black text-white text-xl">4.9/5</p>
              <p className="text-white/50 text-xs">200+ reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="text-5xl font-black text-primary/30 leading-none mb-4">&quot;</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-white/75 leading-relaxed mb-6 flex-grow" dangerouslySetInnerHTML={{ __html: r.text }} />
              <div className="border-t border-white/10 pt-4">
                <p className="font-bold text-white">{r.name}</p>
                <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">{r.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;