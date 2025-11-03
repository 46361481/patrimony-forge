import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "O que é o Mecanismo de Alavancagem?",
      answer:
        "Jornada de 3 dias mostrando como construir renda passiva previsível e segura, mesmo que sua única fonte de renda seja o trabalho.",
    },
    {
      question: "Quem deve participar?",
      answer:
        "Empresários ou profissionais liberais com renda de R$ 30 mil/mês e patrimônio acima de R$ 1 milhão que buscam fazer o dinheiro trabalhar mais — sem apostas ou trabalhar mais horas.",
    },
    {
      question: "Preciso ter imóvel quitado?",
      answer:
        "Não. O evento apresenta ferramentas que funcionam desde o início, com estratégias acessíveis para começar da forma certa.",
    },
    {
      question: "Já tenho imóvel quitado. Isso ajuda?",
      answer:
        "Sim! Você vai aprender como transformar imóveis em ativos altamente lucrativos, sem vender, alugar ou assumir riscos.",
    },
    {
      question: "Já investi antes sem resultados. Vale a pena?",
      answer:
        "Sim. O Mecanismo foge do comum e já se provou eficaz para quem não teve sucesso com fundos, ações ou imóveis tradicionais.",
    },
    {
      question: "Preciso ser especialista em finanças?",
      answer:
        "Não. Linguagem simples, conteúdo direto ao ponto, sem enrolação técnica.",
    },
    {
      question: "Por que o evento custa R$ 47?",
      answer:
        "Esse valor é um filtro. Garante que apenas pessoas comprometidas participem. O conteúdo vale muito mais.",
    },
    {
      question: "E se eu me arrepender?",
      answer:
        "Garantia vitalícia. Devolução de 100% sem perguntas, sem burocracia — mesmo meses ou anos depois.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-card-foreground">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-white hover:text-green-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
