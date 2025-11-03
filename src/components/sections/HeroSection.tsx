import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Clock } from "lucide-react";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { ProgressBar } from "@/components/ui/progress-bar";
import heroPerson1 from "@/assets/hero-person-1.jpg";
import heroPerson2 from "@/assets/hero-person-2.jpg";
import heroPerson3 from "@/assets/hero-person-3.jpg";
import heroPerson4 from "@/assets/hero-person-4.jpg";
export const HeroSection = () => {
  return <section className="relative min-h-screen bg-gray-50 text-foreground py-4 md:py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Top info badges */}
        

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

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-800 font-medium">🔥 Ingressos vendidos</span>
                <span className="text-sm font-bold text-green-primary">73%</span>
              </div>
              <ProgressBar progress={73} />
            </div>

            {/* CTA Button */}
            <Button variant="cta" size="xl" className="w-full mb-4 animate-pulse-green text-base md:text-lg font-bold">
              QUERO GARANTIR MINHA PARTICIPAÇÃO
            </Button>

            {/* Última Turma */}
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-gray-800" />
              <span className="text-sm font-bold text-gray-900">
                Última Turma — Nunca Mais Será Oferecido
              </span>
            </div>
          </div>

          {/* Right: Photo grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={heroPerson1} alt="Investidor 1" className="w-full h-full object-cover aspect-square" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
              <img src={heroPerson2} alt="Investidor 2" className="w-full h-full object-cover aspect-square" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg -mt-8">
              <img src={heroPerson3} alt="Investidor 3" className="w-full h-full object-cover aspect-square" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={heroPerson4} alt="Investidor 4" className="w-full h-full object-cover aspect-square" />
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
    </section>;
};