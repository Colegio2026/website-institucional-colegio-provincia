import { AlertCircle, BookOpen, Users, Smartphone, HandshakeIcon } from "lucide-react";

interface NormaSection {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const secciones: NormaSection[] = [
  {
    title: "Normas generales",
    icon: <BookOpen className="h-6 w-6" />,
    items: [
      "Asistencia regular y puntualidad en todos los encuentros escolares",
      "Respeto por la diversidad de opiniones, religiones y culturas",
      "Cuidado y responsabilidad con los bienes comunes de la institución",
      "Uniforme escolar según disposiciones vigentes",
      "Prohibición de fumar, beber alcohol y consumir drogas dentro del establecimiento",
      "Prohibición de traer armas blancas o de fuego",
    ],
  },
  {
    title: "En el aula",
    icon: <Users className="h-6 w-6" />,
    items: [
      "Respeto hacia docentes y compañeros durante las clases",
      "Participación activa y responsable en las actividades pedagógicas",
      "Uso adecuado de los espacios y materiales educativos",
      "Prohibición de distracciones innecesarias (redes sociales, juegos)",
      "Entrega de trabajos y tareas en los plazos establecidos",
      "Comportamiento que favorezca el aprendizaje de todos",
    ],
  },
  {
    title: "Convivencia",
    icon: <HandshakeIcon className="h-6 w-6" />,
    items: [
      "Trato respetuoso y cordial con todos los miembros de la comunidad educativa",
      "Resolución pacífica de conflictos a través del diálogo",
      "No se tolera el bullying, acoso o discriminación",
      "Solidaridad con compañeros en dificultades",
      "Participación responsable en actividades comunitarias",
      "Respeto por las decisiones y límites establecidos por autoridades",
    ],
  },
  {
    title: "Uso de tecnología",
    icon: <Smartphone className="h-6 w-6" />,
    items: [
      "Uso responsable de dispositivos digitales durante actividades autorizadas",
      "Prohibición de fotografiar o grabar sin consentimiento de las personas involucradas",
      "No publicar información personal o de otros en redes sociales",
      "Respetar la privacidad y seguridad de los datos de la institución",
      "Prohibición de acceder a contenido inapropiado o ilegal",
      "Cuidado de equipamiento tecnológico institucional",
    ],
  },
];

export default function NormasConvivencia() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-4 md:mb-6">
            Comunidad educativa
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
            Normas de convivencia
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            Guía de convivencia que garantiza un ambiente seguro, respetuoso e inclusivo para todos los miembros de nuestra comunidad educativa.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-secondary/20 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          {/* Intro */}
          <div className="mb-12 md:mb-16 p-6 md:p-8 rounded-lg border border-gray-200 bg-white hover:shadow-md hover:border-primary/30 transition-all">
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Principios fundamentales
                </h2>
                <p className="text-muted leading-relaxed">
                  La convivencia escolar se fundamenta en el respeto mutuo, la responsabilidad, la inclusión y la solidaridad. Estas normas buscan crear un espacio de aprendizaje donde todos podamos desarrollarnos plenamente como personas y ciudadanos.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6 md:space-y-8">
            {secciones.map((seccion) => (
              <div key={seccion.title} className="bg-white rounded-lg shadow-sm p-6 md:p-8 border-l-4 border-accent hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="h-10 w-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                    {seccion.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {seccion.title}
                  </h2>
                </div>
                <ul className="list-disc pl-6 space-y-3 text-muted leading-relaxed">
                  {seccion.items.map((item, index) => (
                    <li key={index} className="text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-lg border-2 border-primary bg-primary/5">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4 flex items-center gap-2">
              ⚠️ Importante
            </h3>
            <p className="text-gray-900 leading-relaxed mb-4">
              El incumplimiento de estas normas puede resultar en medidas disciplinarias que incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>Amonestaciones verbales y escritas</li>
              <li>Pérdida de permisos y privilegios escolares</li>
              <li>Suspensión temporal</li>
              <li>Derivación a autoridades competentes en casos graves</li>
            </ul>
            <p className="text-sm text-muted mt-4 italic">
              Todas las sanciones respetarán el debido proceso y el derecho a defensa de los estudiantes.
            </p>
          </div>

          {/* Contact info */}
          <div className="mt-12 md:mt-16 bg-white rounded-lg shadow-sm p-6 md:p-8 border-l-4 border-primary hover:shadow-md transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              Más información
            </h3>
            <p className="text-muted mb-4">
              Para consultas o dudas sobre estas normas, podés comunicarte con:
            </p>
            <div className="space-y-3 text-gray-900">
              <p><strong className="text-primary">Coordinación de Convivencia:</strong> <span className="text-muted">convivencia@escuelaprovincia.edu.ar</span></p>
              <p><strong className="text-primary">Dirección:</strong> <span className="text-muted">(02954) 42-1234 - Ext. 101</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
