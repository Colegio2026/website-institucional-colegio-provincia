import { Sun, Sunset, ExternalLink } from "lucide-react";

export default function Horarios() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-4">
            Información académica
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-primary-foreground mb-6">
            Horarios
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl leading-relaxed font-light">
            Seleccioná el turno para ver los cursos, divisiones y horarios correspondientes.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
      className="group flex flex-col items-center text-center gap-6 rounded-xl border border-blue-100 bg-white p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-orange-200"
    >
      <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white group-hover:shadow-lg group-hover:scale-110 transition-all">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold text-black mb-3 group-hover:text-orange-500 transition-colors">{title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
      <span className="text-sm font-semibold text-orange-500 flex items-center gap-2 mt-auto group-hover:gap-3 transition-all">
        Ver horarios <ExternalLink className="h-4 w-4" />
      </span>
    </a>
  );
}
