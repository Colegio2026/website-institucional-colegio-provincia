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
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-4">
            Comunidad educativa
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-primary-foreground mb-6">
            Normas de convivencia
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl leading-relaxed font-light">
            Guía de convivencia que garantiza un ambiente seguro, respetuoso e inclusivo para todos los miembros de nuestra comunidad educativa.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20 md:py-24">
        <div className="container max-w-5xl mx-auto">
          {/* Intro */}
          <div className="mb-16 p-6 rounded-xl border border-blue-100 bg-white">
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-3">
                  Principios fundamentales
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  La convivencia escolar se fundamenta en el respeto mutuo, la responsabilidad, la inclusión y la solidaridad. Estas normas buscan crear un espacio de aprendizaje donde todos podamos desarrollarnos plenamente como personas y ciudadanos.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {secciones.map((seccion) => (
              <div key={seccion.title} className="bg-white rounded-xl shadow-sm p-6 md:p-8 border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                    {seccion.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    {seccion.title}
                  </h2>
                </div>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
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
          <div className="mt-12 p-6 md:p-8 rounded-xl border-2 border-blue-900 bg-blue-50">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              ⚠️ Importante
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              El incumplimiento de estas normas puede resultar en medidas disciplinarias que incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Amonestaciones verbales y escritas</li>
              <li>Pérdida de permisos y privilegios escolares</li>
              <li>Suspensión temporal</li>
              <li>Derivación a autoridades competentes en casos graves</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4 italic">
              Todas las sanciones respetarán el debido proceso y el derecho a defensa de los estudiantes.
            </p>
          </div>

          {/* Contact info */}
          <div className="mt-12 bg-white rounded-xl shadow-sm p-6 md:p-8 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Más información
            </h3>
            <p className="text-gray-700 mb-3">
              Para consultas o dudas sobre estas normas, podés comunicarte con:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Coordinación de Convivencia:</strong> convivencia@escuelaprovincia.edu.ar</p>
              <p><strong>Dirección:</strong> (02954) 42-1234 - Ext. 101</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
