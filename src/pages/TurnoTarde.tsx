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
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20">
          <Button variant="heroOutline" size="sm" asChild className="mb-6">
            <Link to="/horarios">
              <ArrowLeft className="h-4 w-4 mr-1" /> Volver a Horarios
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-2">
            Turno Tarde
          </h1>
          <p className="text-primary-foreground/70 text-lg">
            Horario de ingreso: 13:00 hs — Horario de salida: 18:00 hs
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-20 space-y-12">
        <CicloSection title="Ciclo Básico" items={cicloBásico} />
        <CicloSection title="Ciclo Orientado — Economía y Gestión" items={cicloOrientado} />
      </section>
    </>
  );
}

function CicloSection({ title, items }: { title: string; items: { año: string; divisiones: string[] }[] }) {
  return (
    <div>
      <h2 className="text-2xl font-display font-semibold text-primary mb-6 tracking-tight">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.año} className="rounded-xl border bg-card p-6 space-y-3">
            <h3 className="text-lg font-semibold text-card-foreground">{item.año}</h3>
            <ul className="space-y-1.5">
              {item.divisiones.map((d) => (
                <li key={d} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
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
