import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Newspaper, ArrowRight, Calendar, Users } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";
import exp1 from "@/assets/experiencias-1.jpg";
import exp2 from "@/assets/experiencias-2.jpg";
import exp3 from "@/assets/experiencias-3.jpg";

const experiencias = [
  {
    title: "Proyecto de Ciencias",
    description: "Estudiantes de 4to año desarrollaron experimentos sobre energías renovables con impacto en la comunidad local.",
    image: exp1,
  },
  {
    title: "Salida Educativa a la Pampa",
    description: "Recorrimos la reserva natural Parque Luro para estudiar el ecosistema autóctono de la región.",
    image: exp2,
  },
  {
    title: "Festival Cultural Anual",
    description: "Música, teatro y arte se unieron en una jornada que celebró la identidad pampeana.",
    image: exp3,
  },
];

const noticias = [
  {
    date: "12 Mar 2026",
    title: "Inscripciones abiertas para el ciclo lectivo 2026",
    summary: "Ya podés inscribirte de forma presencial o virtual. Conocé los requisitos y fechas importantes.",
  },
  {
    date: "5 Mar 2026",
    title: "Nuevo laboratorio de informática",
    summary: "La escuela inauguró un espacio equipado con tecnología de última generación para los estudiantes.",
  },
  {
    date: "28 Feb 2026",
    title: "Jornada de convivencia escolar",
    summary: "Actividades de integración para alumnos de primer año durante la primera semana de clases.",
  },
  {
    date: "20 Feb 2026",
    title: "Reunión de padres — Turno mañana",
    summary: "Encuentro informativo para familias sobre el plan académico y actividades del año.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Escuela Secundaria Provincia de La Pampa"
            className="h-full w-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-blue-950/50" />
        </div>
        <div className="container relative z-10 py-20 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-4 animate-fade-in">
              Educación pública de calidad
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-8 leading-tight animate-fade-in">
              Escuela Secundaria Provincia de La Pampa
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-2xl font-light animate-fade-in">
              Formamos ciudadanos comprometidos con su comunidad, integrando
              conocimiento, cultura y valores en el corazón de la pampa argentina.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button variant="hero" size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link to="/contacto">
                  Contactanos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white hover:bg-white">
                <Link to="/quienes-somos">Conocé la escuela</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Acceso rápido */}
      <section className="bg-white py-20 md:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-black font-semibold uppercase tracking-widest mb-3">
                Acceso rápido
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-black fonto-bold mb-4">
                Secciones principales
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Accedé rápidamente a la información que necesitás
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <QuickCard
                icon={<Clock className="h-8 w-8" />}
                title="Horarios"
                description="Consultá los horarios de cursada para todos los turnos y años."
                to="/horarios"
              />
              <QuickCard
                icon={<BookOpen className="h-8 w-8" />}
                title="Material de estudio"
                description="Accedé a guías, bibliografía y recursos educativos."
                to="/material-estudio"
              />
              <QuickCard
                icon={<Calendar className="h-8 w-8" />}
                title="Calendario escolar"
                description="Fechas de exámenes, feriados y eventos institucionales."
                to="/horarios"
              />
            </div>
          </div>
      </section>

      {/* Experiencias */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-16 gap-4 flex-wrap">
            <div>
              <p className="text-black font-semibold uppercase tracking-widest mb-3">
                Vivencias
              </p>
              <h2 className="text-3xl md:text-4xl font-display text-black font-bold tracking-tight">
                Experiencias escolares
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl">
                Actividades que enriquecen la formación de nuestros estudiantes y generan recuerdos permanentes.
              </p>
            </div>
            <Button variant="outline" asChild className="border-blue-900 text-blue-900 hover:bg-blue-50">
              <Link to="/experiencias">
                  Ver todas
                  <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {experiencias.map((exp) => (
              <article
                key={exp.title}
                className="group rounded-xl overflow-hidden border border-blue-100 bg-white shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-blue-50">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-black fonto-bold  mb-2 group-hover:text-orange-500 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="container py-20 md:py-24">
        <div className="flex items-center gap-3 mb-16">
          <div className="h-1 w-12 bg-orange-500 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-display text-black font-bold tracking-tight">
            Novedades
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {noticias.map((n) => (
            <article
              key={n.title}
              className="flex gap-5 p-6 rounded-xl border border-blue-100 bg-white hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <Calendar className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors" />
                </div>
              </div>
              <div className="flex-1">
                <time className="text-xs  text-black font-bold uppercase tracking-widest">
                  {n.date}
                </time>
                <h3 className=" text-black font-bold mt-2 mb-2 group-hover:text-orange-500 transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {n.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function QuickCard({
  icon,
  title,
  description,
  to,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col gap-4 rounded-xl border border-blue-100 bg-white p-8 hover:shadow-xl hover:scale-[1.02] hover:border-orange-300 transition-all duration-300"
    >
      <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white group-hover:shadow-lg group-hover:scale-110 transition-all">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg text-black mb-2 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-gray-700 transition-colors">
          {description}
        </p>
      </div>
      <span className="text-sm font-semibold text-orange-500 flex items-center gap-2 mt-auto group-hover:gap-3 transition-all">
        Ver más <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
