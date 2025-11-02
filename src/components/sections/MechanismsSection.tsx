import { Rocket, DollarSign, TrendingUp } from "lucide-react";

export const MechanismsSection = () => {
  const mechanisms = [
    {
      icon: Rocket,
      number: "#1",
      title: "Aceleração Exponencial",
      description:
        "Reduzir de 30 para 7 anos o caminho para independência financeira absoluta.",
    },
    {
      icon: DollarSign,
      number: "#2",
      title: "Renda Consistente",
      description:
        "Transformar ativos em geradores de 4% a 6% ao mês — previsível e replicável.",
    },
    {
      icon: TrendingUp,
      number: "#3",
      title: "Alavancagem Estratégica",
      description:
        "Usar imóveis para multiplicação patrimonial acelerada, sem vender ou alugar.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-card-foreground">
          Nos dias 01, 02 e 03 de dezembro,
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Rhuan Christo revelará:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {mechanisms.map((mechanism, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-background border border-gray-200 hover:border-green-primary/40 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-primary to-green-light flex items-center justify-center mb-6 shadow-lg shadow-green-primary/30">
                <mechanism.icon className="w-8 h-8 text-black-premium" />
              </div>
              <div className="mb-4">
                <span className="text-green-primary font-bold text-lg">Mecanismo {mechanism.number}</span>
                <h3 className="text-2xl font-bold text-card-foreground mt-2">{mechanism.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{mechanism.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
