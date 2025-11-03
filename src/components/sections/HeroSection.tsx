import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Clock } from "lucide-react";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { ProgressBar } from "@/components/ui/progress-bar";
import rhuanHero from "@/assets/rhuan-hero.jpg";
export const HeroSection = () => {
  return <section className="relative min-h-screen bg-black text-white py-4 md:py-8 overflow-hidden">
      {/* Black background overlay to ensure solid black */}
      <div className="absolute inset-0 bg-black z-0" />
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-[60%_40%] gap-0 mb-8 items-center min-h-[90vh]">
          {/* Left: Headlines and CTA with gradient background */}
          <div className="relative z-10 animate-slide-up py-8 lg:py-12 pr-0 lg:pr-8">
            {/* Gradient overlay on left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-primary/20 via-green-primary/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">
                3 Dias Construindo Sua{" "}
                <span className="text-gradient-green">Arquitetura Financeira</span>{" "}
                para Alavancar Seu Patrimônio de Forma Estruturada
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                Domine os 3 mecanismos de alavancagem que transformaram profissionais de alta renda em
                investidores com renda passiva de R$ 30 mil/mês em 7 anos — sem depender de sorte, timing de mercado ou aumentar seu capital inicial.
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-300 font-medium">🔥 Ingressos vendidos</span>
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
                <Clock className="w-4 h-4 text-gray-300" />
                <span className="text-sm font-bold text-white">
                  Última Turma — Nunca Mais Será Oferecido
                </span>
              </div>
            </div>
          </div>

          {/* Right: Photo with zoom */}
          <div className="relative h-full min-h-[500px] lg:min-h-[90vh] -mr-4 lg:-mr-8">
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={rhuanHero} 
                alt="Rhuan Christo" 
                className="w-full h-full object-cover scale-120" 
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in px-4">
          <div className="text-center p-6 bg-white/5 rounded-xl shadow-sm border border-white/10 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-green-primary/20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-primary" />
            </div>
            <p className="font-bold text-white mb-2">✓ Mais Rentabilidade</p>
            <p className="text-sm text-gray-300">4% a 6% ao mês de forma consistente</p>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-xl shadow-sm border border-white/10 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-green-primary/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-green-primary" />
            </div>
            <p className="font-bold text-white mb-2">✓ Sem Se Matar de Trabalhar</p>
            <p className="text-sm text-gray-300">Arquitetura que funciona no automático</p>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-xl shadow-sm border border-white/10 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-green-primary/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-green-primary" />
            </div>
            <p className="font-bold text-white mb-2">✓ Aposentadoria em 7 Anos</p>
            <p className="text-sm text-gray-300">Não em 30 como o mercado tradicional prega</p>
          </div>
        </div>

      </div>
    </section>;
};