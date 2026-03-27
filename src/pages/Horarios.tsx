import { Sun, Sunset, ExternalLink } from "lucide-react";

export default function Horarios() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-4 md:mb-6">
            Información académica
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
            Horarios
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            Seleccioná el turno para ver los cursos, divisiones y horarios correspondientes.
          </p>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TurnoCard
              href="https://drive.google.com/drive/folders/1sRDa9w3KitNfHmVLZkzHcf0SsZoTpPiC?usp=drive_link"
              icon={<Sun className="h-8 w-8" />}
              title="Turno Mañana"
              description="Ciclo Básico y Ciclo Orientado en Ciencias Naturales"
            />
            <TurnoCard
              href="https://drive.google.com/drive/folders/10Dr2UkLQMBWK7PcAokAaQ6jwOiyoV2ZC?usp=drive_link"
              icon={<Sunset className="h-8 w-8" />}
              title="Turno Tarde"
              description="Ciclo Básico y Ciclo Orientado en Economía y Gestión"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function TurnoCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center text-center gap-6 rounded-lg border border-gray-200 bg-white p-8 md:p-10 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      <div className="h-16 w-16 rounded-lg bg-primary/15 flex items-center justify-center text-primary group-hover:shadow-lg group-hover:scale-105 transition-all">
        {icon}
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">{title}</h2>
        <p className="text-sm md:text-base text-muted leading-relaxed">{description}</p>
      </div>
      <span className="text-sm font-semibold text-accent flex items-center gap-2 mt-auto group-hover:gap-3 transition-all">
        Ver horarios <ExternalLink className="h-4 w-4" />
      </span>
    </a>
  );
}
