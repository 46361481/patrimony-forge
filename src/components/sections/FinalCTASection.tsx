import { Button } from "@/components/ui/button";
import { Calendar, Video } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section id="inscricao" className="py-16 md:py-24 px-4 bg-black-premium text-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            São apenas 3 dias que podem redefinir sua{" "}
            <span className="text-gradient-green">trajetória financeira</span>.
          </h2>

          <p className="text-4xl md:text-5xl font-bold text-green-primary">
            7 anos em vez de 30.
          </p>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A escolha é sua: continuar no caminho ortodoxo ou implementar uma arquitetura financeira
            superior.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 py-8">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-green-primary" />
              <span>Ao Vivo no Zoom</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-primary" />
              <span>01, 02 e 03 de Dezembro | 20h</span>
            </div>
          </div>

          <Button variant="cta" size="xl" className="px-12 animate-pulse-green">
            QUERO GARANTIR MINHA PARTICIPAÇÃO
          </Button>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto pt-8">
            Evento direcionado exclusivamente para investidores qualificados. O investimento de R$47
            funciona como filtro para garantir comprometimento genuíno.
          </p>
        </div>
      </div>
    </section>
  );
};
