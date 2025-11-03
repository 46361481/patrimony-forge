import rhuanPhoto from "@/assets/rhuan-christo.jpg";

export const MentorSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-black-premium text-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="animate-fade-in">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-green-primary/30 shadow-2xl overflow-hidden">
              <img
                src={rhuanPhoto}
                alt="Rhuan Christo"
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up space-y-6">
            <div>
              <p className="text-green-primary font-bold mb-2">Seu Mentor Estratégico</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">Rhuan Christo</h2>
              <p className="text-gray-400 text-sm">
                Especialista em Estratégias Avançadas de Alavancagem Patrimonial
              </p>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Rhuan Christo é especialista em estratégias avançadas de alavancagem patrimonial e
                mentor de investidores qualificados que buscam otimizar sua jornada rumo à
                independência financeira.
              </p>

              <p>
                Com mais de uma década de experiência nos mercados financeiro e imobiliário, Rhuan
                desenvolveu metodologias proprietárias que já auxiliaram centenas de profissionais de
                alto desempenho a transformarem seu patrimônio em estruturas geradoras de renda
                passiva substancial.
              </p>

              <p>
                Sua própria trajetória — desde seu primeiro investimento aos 22 anos até alcançar seu
                primeiro milhão aos 30 e conquistar independência financeira aos 32 — demonstra a
                eficácia dos mecanismos que compartilha.
              </p>

              <p className="text-green-primary font-semibold">
                Desenvolvedor da metodologia "Mecanismo de Alavancagem".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
