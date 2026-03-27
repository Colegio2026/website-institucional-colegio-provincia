import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const cicloBásico = [
  { año: "1º Año", divisiones: ["División I", "División II"] },
  { año: "2º Año", divisiones: ["División I", "División II"] },
  { año: "3º Año", divisiones: ["División I", "División II"] },
];

const cicloOrientado = [
  { año: "4º Año", divisiones: ["Economía y Gestión"] },
  { año: "5º Año", divisiones: ["Economía y Gestión"] },
  { año: "6º Año", divisiones: ["Economía y Gestión"] },
];

export default function TurnoTarde() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="container px-4 md:px-6 py-16 md:py-24">
          <Button variant="outline" size="sm" asChild className="mb-6 border-white text-white hover:bg-white/20">
            <Link to="/horarios" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver a Horarios
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 md:mb-4">
            Turno Tarde
          </h1>
          <p className="text-white/90 text-base md:text-lg">
            Horario de ingreso: 13:00 hs — Horario de salida: 18:00 hs
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-16 md:py-24 lg:py-32 space-y-16 md:space-y-24">
        <CicloSection title="Ciclo Básico" items={cicloBásico} />
        <CicloSection title="Ciclo Orientado — Economía y Gestión" items={cicloOrientado} />
      </section>
    </>
  );
}

function CicloSection({ title, items }: { title: string; items: { año: string; divisiones: string[] }[] }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 md:mb-10 tracking-tight">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item) => (
          <div key={item.año} className="rounded-lg border border-gray-200 bg-white p-6 md:p-7 space-y-4 hover:shadow-md hover:border-primary/30 transition-all">
            <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.año}</h3>
            <ul className="space-y-3">
              {item.divisiones.map((d) => (
                <li key={d} className="text-sm md:text-base text-muted flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
