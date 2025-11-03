import { Check } from "lucide-react";

export const QualificationSection = () => {
  const qualifications = [
    "Tem renda acima de R$ 30 mil/mês",
    "Possui patrimônio a partir de R$ 1 milhão",
    "Já investe em fundos, ações ou imóveis mas sente que os resultados são lentos demais",
    "Quer construir uma estrutura de renda passiva previsível e vitalícia",
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-card-foreground">
          Este evento é para você que:
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {qualifications.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-background border border-green-primary/20 hover:border-green-primary/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-primary" />
              </div>
              <p className="text-white leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
