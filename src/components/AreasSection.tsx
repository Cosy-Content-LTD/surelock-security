import { MapPin } from "lucide-react";
const areas = [
  "Cox&apos;s Walk",
  "Upper Sydenham",
  "Dulwich",
  "London Borough of Southwark",
  "Greater London",
  "SE26",
  "Forest Hill",
  "Crystal Palace",
];

const AreasSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Coverage
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-heading leading-tight mb-4">
            Areas We Serve
          </h2>
          <p className="text-text text-lg">
            Providing professional locksmith services across Dulwich, Upper Sydenham, and the surrounding Greater London area.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-border bg-white text-sm font-semibold text-heading hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center"
            >
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: area }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;