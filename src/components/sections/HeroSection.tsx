import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Shield, Clock } from "lucide-react";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { ProgressBar } from "@/components/ui/progress-bar";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black-premium text-foreground py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black-soft border border-green-primary/30 text-foreground text-sm">
            <Sparkles className="w-4 h-4 text-green-primary" />
            <span>Para quem tem patrimônio acima de R$ 1 milhão</span>
            <span className="text-green-primary font-bold">| Evento Exclusivo</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 animate-slide-up leading-tight">
          3 Dias Construindo Sua{" "}
          <span className="text-gradient-green">Arquitetura Financeira</span>{" "}
          para Alavancar Seu Patrimônio de Forma Estruturada
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12 animate-fade-in leading-relaxed">
          Domine os 3 mecanismos de alavancagem que transformaram profissionais de alta renda em
          investidores com renda passiva de R$ 30 mil/mês em 7 anos — sem depender de sorte, timing
          de mercado ou aumentar seu capital inicial.
        </p>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">Mais Rentabilidade</p>
              <p className="text-sm text-gray-400">4% a 6% ao mês de forma consistente</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">Sem Se Matar de Trabalhar</p>
              <p className="text-sm text-gray-400">Arquitetura que funciona no automático</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">Aposentadoria em 7 Anos</p>
              <p className="text-sm text-gray-400">Não em 30 como o mercado tradicional prega</p>
            </div>
          </div>
        </div>

        {/* Pricing Box */}
        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-10 shadow-2xl animate-slide-up">
          <div className="text-center mb-6">
            <p className="text-gray-600 line-through text-lg mb-2">De R$ 1.075,00 por apenas:</p>
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="text-5xl md:text-6xl font-bold text-card-foreground">R$ 47</span>
              <span className="text-lg text-gray-600">,00</span>
            </div>
            <p className="text-gray-600">ou 12x de R$ 4,59</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">🔥 Ingressos vendidos</span>
              <span className="text-sm font-bold text-green-primary">73%</span>
            </div>
            <ProgressBar progress={73} />
          </div>

          {/* CTA Button */}
          <Button variant="cta" size="xl" className="w-full mb-6 animate-pulse-green">
            QUERO GARANTIR MINHA PARTICIPAÇÃO
          </Button>

          {/* Timer */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-primary" />
                <span className="font-bold text-card-foreground">
                  Última Turma — Nunca Mais Será Oferecido
                </span>
              </div>
              <div className="text-gray-600">📅 01, 02 e 03 de Dezembro | 20h — Ao Vivo no Zoom</div>
            </div>
            <CountdownTimer targetDate="2025-12-01T20:00:00" />
          </div>
        </div>
      </div>
    </section>
  );
};
