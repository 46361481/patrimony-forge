export const TopBar = () => {
  return (
    <div className="w-full bg-black-premium text-white py-3 px-4">
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-1">
        <span className="text-sm md:text-base font-medium text-center">
          Para quem tem patrimônio acima de R$ 1 milhão | Evento Exclusivo
        </span>
        <span className="text-sm md:text-base font-medium text-center">
          📅 01, 02 e 03 de Dezembro | 20h - Ao Vivo no Zoom
        </span>
      </div>
    </div>
  );
};
