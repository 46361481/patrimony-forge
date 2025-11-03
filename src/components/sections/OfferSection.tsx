import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const OfferSection = () => {
  const items = [
    { name: "Acesso aos 3 dias ao vivo", value: "R$ 497" },
    { name: "Plataforma de iniciação", value: "R$ 197" },
    { name: "Checklist do Mecanismo", value: "R$ 97" },
    { name: "Comunidade privada", value: "R$ 97" },
    { name: "Material complementar", value: "R$ 187" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-green-primary/5 to-green-light/5">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-green-primary/30 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-card-foreground">
            Mecanismo de Alavancagem
          </h2>

          <div className="space-y-4 mb-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-background rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-primary flex-shrink-0" />
                  <span className="text-white">{item.name}</span>
                </div>
                <span className="font-semibold text-gray-600">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-gray-200 pt-6 mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl font-semibold text-gray-700">Valor total:</span>
              <span className="text-2xl font-bold text-gray-400 line-through">R$ 1.075,00</span>
            </div>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-sm text-gray-600">Por apenas</span>
              <span className="text-5xl md:text-6xl font-bold text-green-primary">R$ 47</span>
              <span className="text-xl text-gray-600">,00</span>
            </div>
            <p className="text-center text-gray-600">ou 12x de R$ 4,59</p>
          </div>

          <div className="flex justify-center px-4">
            <Button variant="cta" size="xl" className="px-8 md:px-16 animate-pulse-green text-sm sm:text-base md:text-lg w-full md:w-auto leading-tight">
              <span className="flex flex-col items-center">
                <span>QUERO GARANTIR</span>
                <span>MINHA PARTICIPAÇÃO</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
