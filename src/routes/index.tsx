import { HeroMockup } from "@/components/site/HeroMockup";
import { ProcessStep } from "@/components/site/ProcessStep";
import { Testimonials } from "@/components/site/Testimonials";
import { QuoteForm } from "@/components/site/QuoteForm";
import { ModelPreview } from "@/components/site/ModelPreview";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export default function IndexPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-hidden selection:bg-purple-500 selection:text-white">
      <HeroMockup />
      <ModelPreview />
      <ProcessStep />
      <Testimonials />
      <QuoteForm />
      <WhatsAppFab />
    </div>
  );
}
