import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Promotion {
  year: number;
  title: string;
  description: string;
}

const promotions: Promotion[] = [
  {
    year: 2023,
    title: "Promoción 2023",
    description: "",
  },
  {
    year: 2024,
    title: "Promoción 2024",
    description: "",
  },
  {
    year: 2025,
    title: "Promoción 2025",
    description: "",
  },
  {
    year: 2026,
    title: "Promoción 2026",
    description: "",
  },
];

function PromotionCard({ promotion }: { promotion: Promotion }) {
  return (
    <article className="group relative rounded-lg border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300">
      {/* Year indicator - left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent/50 group-hover:w-1.5 transition-all duration-300"></div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col items-center justify-center h-full min-h-48">
        <h3 className="text-5xl md:text-6xl font-bold text-primary mb-6 group-hover:text-accent transition-colors">
          {promotion.year}
        </h3>

        <a href={`#promotion-${promotion.year}`} className="inline-block">
          <Button
            variant="outline"
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 gap-2 group/btn"
          >
            Ver promoción
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </article>
  );
}

export default function BitacoraPromociones() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-4 md:mb-6">
            Nuestro legado
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
            Bitácora de promociones
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            Recorrido histórico de las promociones de egresados de nuestra institución, celebrando el éxito y desarrollo de nuestros estudiantes año tras año.
          </p>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="bg-secondary/20 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {promotions.map((promotion) => (
              <PromotionCard key={promotion.year} promotion={promotion} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional info section (optional) */}
      <section className="bg-white py-16 md:py-24 lg:py-32 border-t border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Orgullo de nuestros egresados
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cada promoción representa el compromiso de nuestra institución con la excelencia educativa. Nuestros egresados están distribuidos en distintas universidades y espacios profesionales, llevando siempre los valores y conocimientos adquiridos en nuestras aulas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
