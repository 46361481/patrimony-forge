import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Clock } from "lucide-react";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { ProgressBar } from "@/components/ui/progress-bar";
import heroPerson1 from "@/assets/hero-person-1.jpg";
import heroPerson2 from "@/assets/hero-person-2.jpg";
import heroPerson3 from "@/assets/hero-person-3.jpg";
import heroPerson4 from "@/assets/hero-person-4.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gray-50 text-foreground py-4 md:py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Top badges and info */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black-premium text-white text-sm font-medium w-fit">
            <span className="text-white">Para quem tem patrimônio acima de R$ 1 milhão</span>
            <span className="text-gray-300">| Evento Exclusivo</span>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="px-4 py-2 rounded-full border border-gray-300 bg-white text-sm text-gray-800 font-medium">
              01, 02 e 03 de Dezembro | Ao Vivo
            </div>
            <div className="px-4 py-2 rounded-full border border-gray-300 bg-white text-sm text-gray-800 font-medium">
              Online
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-8 items-start">
          {/* Left: Headlines and CTA */}
          <div className="animate-slide-up">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-gray-900">
              3 Dias Construindo Sua{" "}
              <span className="text-gradient-green">Arquitetura Financeira</span>{" "}
              para Alavancar Seu Patrimônio de Forma Estruturada
            </h1>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
              Domine os 3 mecanismos de alavancagem que transformaram profissionais de alta renda em
              investidores com renda passiva de R$ 30 mil/mês em 7 anos — sem depender de sorte, timing de mercado ou aumentar seu capital inicial.
            </p>

            {/* CTA Box */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
              {/* Pricing */}
              <div className="text-center mb-6">
                <p className="text-gray-500 line-through text-base mb-2">De R$ 1.075,00 por apenas:</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">R$ 47</span>
                  <span className="text-lg text-gray-700">,00</span>
                </div>
                <p className="text-gray-700 text-sm">ou 12x de R$ 4,59</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-800 font-medium">🔥 Ingressos vendidos</span>
                  <span className="text-sm font-bold text-green-primary">73%</span>
                </div>
                <ProgressBar progress={73} />
              </div>

              {/* CTA Button */}
              <Button variant="cta" size="xl" className="w-full mb-6 animate-pulse-green text-base md:text-lg font-bold">
                QUERO GARANTIR MINHA PARTICIPAÇÃO
              </Button>

              {/* Timer Section */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex flex-col gap-3 mb-4 text-xs md:text-sm">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-green-primary flex-shrink-0 mt-0.5" />
                    <span className="font-bold text-gray-900 leading-tight">
                      ⏰ Última Turma — Nunca Mais Será Oferecido
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-800 font-medium leading-tight">
                      📅 01, 02 e 03 de Dezembro | 20h — Ao Vivo no Zoom
                    </span>
                  </div>
                </div>
                <CountdownTimer targetDate="2025-12-01T20:00:00" />
              </div>
            </div>
          </div>

          {/* Right: Photo grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroPerson1}
                alt="Investidor 1"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
              <img
                src={heroPerson2}
                alt="Investidor 2"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg -mt-8">
              <img
                src={heroPerson3}
                alt="Investidor 3"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroPerson4}
                alt="Investidor 4"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-primary" />
            </div>
            <p className="font-bold text-gray-900 mb-2">✓ Mais Rentabilidade</p>
            <p className="text-sm text-gray-700">4% a 6% ao mês de forma consistente</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-green-primary" />
            </div>
            <p className="font-bold text-gray-900 mb-2">✓ Sem Se Matar de Trabalhar</p>
            <p className="text-sm text-gray-700">Arquitetura que funciona no automático</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-green-primary" />
            </div>
            <p className="font-bold text-gray-900 mb-2">✓ Aposentadoria em 7 Anos</p>
            <p className="text-sm text-gray-700">Não em 30 como o mercado tradicional prega</p>
          </div>
        </div>

      </div>
    </section>
  );
};
