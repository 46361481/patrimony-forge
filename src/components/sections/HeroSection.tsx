import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Clock } from "lucide-react";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { ProgressBar } from "@/components/ui/progress-bar";
import rhuanHero from "@/assets/rhuan-hero-new.jpg";
export const HeroSection = () => {
  return <section className="relative min-h-screen overflow-hidden overflow-x-hidden bg-black">
      {/* Mobile background - Split layout */}
      <div className="absolute inset-0 md:hidden flex bg-black">
        {/* Left 40% - Solid Black */}
        <div className="w-[40%] bg-black"></div>
        
        {/* Right 60% - Photo Background */}
        <div className="w-[60%] bg-black relative" style={{
        backgroundImage: `url(${rhuanHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
      }}>
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 30%, transparent 100%)'
        }}></div>
        </div>
      </div>

      {/* Desktop Split background: 60% black + 40% photo */}
      <div className="absolute inset-0 hidden md:flex bg-black">
        {/* Left 60% - Solid Black */}
        <div className="w-[60%] bg-black"></div>
        
        {/* Right 40% - Photo Background */}
        <div className="w-[40%] bg-black relative" style={{
        backgroundImage: `url(${rhuanHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
          {/* Gradient overlay - transição suave do preto para a foto */}
          <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 30%, transparent 100%)'
        }}></div>
          {/* Sombra interna para profundidade */}
          <div className="absolute inset-0" style={{
          boxShadow: 'inset -20px 0 60px -20px rgba(0, 0, 0, 0.8)'
        }}></div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 py-4 md:py-8 px-4 w-full">
        {/* Main content */}
        <div className="max-w-3xl mb-8">
          {/* Headlines and CTA */}
          <div className="animate-slide-up">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">
              3 Dias Construindo Sua{" "}
              <span className="text-gradient-green">Arquitetura Financeira</span>{" "}
              para Alavancar Seu Patrimônio de Forma Estruturada
            </h1>
            
            {/* Mobile version */}
            <p className="text-lg text-gray-100 leading-relaxed mb-8 md:hidden">Domine os 3 mecanismos de alavancagem que 
transformaram profissionais de alta renda em investidores com renda passiva de R$ 30 mil/mês em 7 anos sem depender de sorte, timing de mercado ou aumentar seu capital inicial.</p>
            
            {/* Tablet version */}
            <p className="hidden md:block lg:hidden text-xl text-gray-100 leading-relaxed mb-8">
              Domine os 3 mecanismos de alavancagem que<br />
              transformaram profissionais de alta renda<br />
              em investidores com renda passiva de R$ 30 mil/mês<br />
              em 7 anos sem depender de sorte, timing de mercado<br />
              ou aumentar seu capital inicial.
            </p>
            
            {/* Desktop version */}
            <p className="hidden lg:block text-xl text-gray-100 leading-relaxed mb-8">
              Domine os 3 mecanismos de alavancagem que transformaram profissionais de alta<br />
              renda em investidores com renda passiva de R$ 30 mil/mês em 7 anos sem depender<br />
              de sorte, timing de mercado ou aumentar seu capital inicial.
            </p>

            {/* Pricing - Apenas R$ 47 */}
            <div className="mb-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Apenas </span>
                <span className="text-green-primary">R$ 47</span>
              </h2>
            </div>

            {/* Última Turma */}
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-red-500" />
              <span className="text-sm font-bold text-red-500">PRIMEIRO LOTE</span>
            </div>

            {/* CTA Button */}
            <Button variant="cta" size="xl" className="max-w-xl w-full mb-4 animate-pulse-green text-base md:text-lg font-bold" onClick={() => document.getElementById('inscricao')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              QUERO GARANTIR MINHA PARTICIPAÇÃO
            </Button>

            {/* Progress Bar */}
            <div className="mb-2 max-w-xl">
              <ProgressBar progress={73} />
            </div>
            
            {/* Progress Text */}
            <p className="text-sm text-white font-medium mb-1">73% das vagas preenchidas</p>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
          <div className="text-center p-6 bg-white/10 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-green-primary/20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-primary" />
            </div>
            <p className="font-bold text-white mb-2">✓ Mais Rentabilidade</p>
            <p className="text-sm text-gray-200">4% a 6% ao mês de forma consistente</p>
          </div>

          <div className="text-center p-6 bg-white/10 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-green-primary/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-green-primary" />
            </div>
            <p className="font-bold text-white mb-2">✓ Sem Se Matar de Trabalhar</p>
            <p className="text-sm text-gray-200">Arquitetura que funciona no automático</p>
          </div>

          <div className="text-center p-6 bg-white/10 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-green-primary/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-green-primary" />
            </div>
            <p className="font-bold text-white mb-2">✓ Aposentadoria em 7 Anos</p>
            <p className="text-sm text-gray-200">Não em 30 como o mercado tradicional prega</p>
          </div>
        </div>

      </div>
    </section>;
};