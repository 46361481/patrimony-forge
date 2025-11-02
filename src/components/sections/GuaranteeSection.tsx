import { Shield, Infinity } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-black-soft text-foreground">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-primary/10 mb-6">
            <Infinity className="w-10 h-10 text-green-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Garantia <span className="text-green-primary">Vitalícia</span> — Risco Zero!
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Participe do Dia 1. Se não gostar, devolvemos 100% sem perguntas.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-gray-400">
            <Shield className="w-5 h-5 text-green-primary" />
            <span>Garantia sem burocracia — mesmo meses ou anos depois</span>
          </div>
        </div>
      </div>
    </section>
  );
};
