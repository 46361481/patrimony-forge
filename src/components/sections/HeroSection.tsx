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
            <span className="text-white">Mecanismo de Alavancagem</span>
            <span className="text-gray-300">WORKSHOP</span>
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
        <div className="grid lg:grid-cols-2 gap-12 mb-8 items-center">
          {/* Left: Headlines */}
          <div className="animate-slide-up">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-gray-900">
              3 Dias Construindo Sua{" "}
              <span className="text-gradient-green">Arquitetura Financeira</span>{" "}
              para Alavancar Seu Patrimônio de Forma Estruturada
            </h1>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Domine os 3 mecanismos de alavancagem que transformaram profissionais de alta renda em
              investidores com renda passiva de R$ 30 mil/mês em 7 anos.
            </p>
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
            <p className="font-bold text-gray-900 mb-2">MAIS LUCRO</p>
            <p className="text-sm text-gray-700">4% a 6% ao mês de forma consistente</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-green-primary" />
            </div>
            <p className="font-bold text-gray-900 mb-2">SEM PRECISAR CONTRATAR</p>
            <p className="text-sm text-gray-700">Arquitetura que funciona no automático</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-green-primary" />
            </div>
            <p className="font-bold text-gray-900 mb-2">APLICAÇÃO IMEDIATA</p>
            <p className="text-sm text-gray-700">Resultados em 7 anos, não em 30</p>
          </div>
        </div>

        {/* Pricing Box */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-2xl animate-slide-up border border-gray-200">
          <div className="text-center mb-6">
            <p className="text-gray-500 line-through text-lg mb-2">De R$ 1.075,00 por apenas:</p>
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="text-5xl md:text-6xl font-bold text-gray-900">R$ 47</span>
              <span className="text-lg text-gray-700">,00</span>
            </div>
            <p className="text-gray-700">ou 12x de R$ 4,59</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-700 font-medium">🔥 Ingressos vendidos</span>
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-primary" />
                <span className="font-bold text-gray-900">
                  Última Turma — Nunca Mais Será Oferecido
                </span>
              </div>
              <div className="text-gray-700 font-medium">📅 01, 02 e 03 de Dezembro | 20h — Ao Vivo no Zoom</div>
            </div>
            <CountdownTimer targetDate="2025-12-01T20:00:00" />
          </div>
        </div>
      </div>
    </section>
  );
};
