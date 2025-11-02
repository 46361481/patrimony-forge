import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Como médico, sempre investi de forma conservadora. Após implementar os mecanismos que o Rhuan ensina, consegui estruturar meu patrimônio para gerar R$ 35.000 mensais em renda passiva em apenas 14 meses, algo que meus consultores anteriores estimavam que levaria mais de 15 anos.",
      author: "Fernando Otani",
      role: "Cirurgião",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop",
    },
    {
      text: "Como advogada tributarista, sou naturalmente cética. Implementei os mecanismos inicialmente com apenas 20% do meu patrimônio. Os resultados foram tão expressivos que rapidamente reestruturei 100%. Em 2 anos, multipliquei meu patrimônio em 3,2x.",
      author: "Daniela Andrade Zeferino",
      role: "Advogada",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    },
    {
      text: "Como empresário, sempre busquei eficiência em todos os aspectos do meu negócio, mas nunca havia aplicado o mesmo rigor aos meus investimentos pessoais. As estratégias imobiliárias que o Rhuan ensina me permitiram criar uma estrutura de renda passiva que superou o faturamento da minha empresa em apenas 18 meses.",
      author: "Ricardo Mendes",
      role: "Empresário",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-card-foreground">
          Resultados Reais de Investidores Qualificados
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-background border border-gray-200 hover:border-green-primary/40 hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-green-primary mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.text}</p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-card-foreground">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
