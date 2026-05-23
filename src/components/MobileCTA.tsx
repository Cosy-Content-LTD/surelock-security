import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const MobileCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-4 bg-background/90 backdrop-blur-lg border-t border-border flex gap-3">
      <Button className="flex-1 gap-3 h-14 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-xl hover:scale-105 transition-all duration-200" asChild>
        <a href="tel:0234567891">
          <Phone className="h-5 w-5" />
          Call 0234567891
        </a>
      </Button>
    </div>
  );
};

export default MobileCTA;