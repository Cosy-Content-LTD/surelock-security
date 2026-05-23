import { Clock, MapPin, MessageSquare, Phone } from "lucide-react";
const FooterSection = () => {
  return (
    <footer className="bg-secondary text-white py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex flex-col mb-8">
              <span className="font-black text-4xl tracking-tight text-primary leading-none">
                SureLock
              </span>
              <span className="font-black text-sm tracking-[0.2em] text-white/40 uppercase leading-none mt-1">
                SECURITY
              </span>
            </a>
            <p className="text-white/60 leading-relaxed max-w-sm mb-10 text-base">
              SureLock Security is your trusted, fully insured locksmith service in Dulwich, Upper Sydenham, and across the London Borough of Southwark. Professional, reliable, and available 24/7.
            </p>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-white">24/7 Emergency Service</p>
                <p className="text-sm text-white/40">Open Weekends &amp; Bank Holidays</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-lg mb-8 text-white">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">24/7 Helpline</p>
                  <a href="tel:0234567891" className="text-2xl font-black hover:text-primary transition-colors duration-200">0234567891</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-black text-lg mb-8 text-white">Locations Served</h4>
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-white/60 leading-relaxed text-sm">
                Cox&apos;s Walk, Upper Sydenham, Dulwich, London Borough of Southwark, Greater London, SE26 and surrounding areas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs font-medium tracking-wider">
          <p>&copy; {new Date().getFullYear()} SURELOCK SECURITY LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors duration-200 uppercase">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200 uppercase">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/5 blur-[80px]" />
    </footer>
  );
};

export default FooterSection;