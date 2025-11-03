import { X, Check } from "lucide-react";

export const ComparisonSection = () => {
  const without = [
    "R$ 2.500/mês com R$ 500k investidos",
    "Dependência de aportes constantes",
    "30 anos para independência",
    "Rendimentos de 0,5% a 1% ao mês",
    "Vulnerável a crises",
  ];

  const with_ = [
    "Rendimentos acima da média",
    "Estrutura auto-sustentável",
    "7 anos para renda vitalícia",
    "Rendimentos de 4% a 6% ao mês",
    "Checklist de implementação imediato",
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Without */}
          <div className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              Sem a Arquitetura:
            </h3>
            <div className="space-y-4">
              {without.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* With */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-primary/10 to-green-dark/10 border border-green-primary/40 animate-fade-in shadow-lg shadow-green-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              Com a Arquitetura:
            </h3>
            <div className="space-y-4">
              {with_.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
