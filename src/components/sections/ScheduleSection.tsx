import { Calendar, CheckCircle } from "lucide-react";

export const ScheduleSection = () => {
  const schedule = [
    {
      day: "Dia 1 (01/12)",
      title: "As Armadilhas do Mercado",
      topics: [
        "Armadilhas que drenam o potencial dos investidores qualificados",
        "Por que produtos tradicionais limitam sua renda passiva",
        "Mecanismo #1: Como dobrar rentabilidade sem aumentar capital",
      ],
    },
    {
      day: "Dia 2 (02/12)",
      title: "Máquina de Fazer Dinheiro",
      topics: [
        "Mecanismo #2: Transformar investimentos em geradores de renda automáticos",
        'Como criar "patrimônio” geradores de renda passiva. ',
        "Demonstração prática para implementar imediatamente",
      ],
    },
    {
      day: "Dia 3 (03/12)",
      title: "De 30 Para 7 Anos",
      topics: [
        "Mecanismo #3: O segredo dos ultra-ricos",
        "Como usar imóveis para alavancagem sem riscos",
        "Checklist completo de implementação",
        "Mapa estratégico para renda vitalícia em 7 anos",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Programação Completa
        </h2>

        <div className="space-y-8">
          {schedule.map((day, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-gray-200 hover:border-green-primary/40 transition-all duration-300 shadow-md hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-primary" />
                </div>
                <div>
                  <p className="text-green-primary font-bold">{day.day}</p>
                  <h3 className="text-2xl font-bold text-card-foreground">{day.title}</h3>
                </div>
              </div>

              <div className="ml-0 md:ml-15 space-y-3 mt-6">
                <p className="font-semibold text-gray-700 mb-4">
                  {index === 0 ? "O que você vai descobrir:" : index === 1 ? "Rhuan vai revelar:" : "No último dia:"}
                </p>
                {day.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-primary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
