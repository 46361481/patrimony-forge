import { AlertCircle, TrendingDown, DollarSign, AlertTriangle } from "lucide-react";

export const TruthSection = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Ciclo Interminável",
      description: "30+ anos de acumulação sem liberdade financeira real",
    },
    {
      icon: DollarSign,
      title: "Dependência de Capital",
      description: "Precisa de milhões para gerar renda passiva significativa",
    },
    {
      icon: AlertTriangle,
      title: "Vulnerabilidade",
      description: "Patrimônio exposto a crises, inflação e má gestão",
    },
  ];

  const questions = [
    "Quantos anos a mais de trabalho intenso serão necessários?",
    "Como seria sua vida com R$ 30k/mês em renda passiva hoje?",
    "Que oportunidades você está adiando?",
    "Qual o custo de continuar nas estratégias convencionais?",
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-black-premium text-foreground">
      <div className="container mx-auto max-w-5xl">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Por que seu patrimônio cresce{" "}
          <span className="text-gradient-green">tão devagar?</span>
        </h2>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-black-soft border border-gray-800 hover:border-green-primary/40 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">❌ {problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Questions Box */}
        <div className="max-w-3xl mx-auto p-8 md:p-10 rounded-2xl bg-black-card border border-gray-800 mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
            Considere as implicações reais:
          </h3>
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl">💭</span>
                <p className="text-gray-300 text-lg leading-relaxed">{question}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center space-y-4 animate-slide-up">
          <p className="text-xl md:text-2xl text-gray-300">
            A diferença não está no capital investido.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-green-primary">
            A diferença está na arquitetura estratégica.
          </p>
        </div>
      </div>
    </section>
  );
};
