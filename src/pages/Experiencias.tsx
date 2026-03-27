import expCiencias from "@/assets/exp-ciencias.jpg";
import expTeatro from "@/assets/exp-teatro.jpg";
import expSalida from "@/assets/exp-salida.jpg";
import expMural from "@/assets/exp-mural.jpg";
import expDeporte from "@/assets/exp-deporte.jpg";
import expTecnologia from "@/assets/exp-tecnologia.jpg";

const experiencias = [
  {
    title: "Feria de Ciencias",
    description:
      "Estudiantes de 4º y 5º año presentaron proyectos de investigación sobre energías renovables y su impacto en la comunidad pampeana.",
    image: expCiencias,
  },
  {
    title: "Obra de Teatro Anual",
    description:
      "El elenco escolar representó una adaptación de clásicos argentinos en el salón de actos, con vestuario y escenografía diseñados por los alumnos.",
    image: expTeatro,
  },
  {
    title: "Salida Educativa a la Reserva",
    description:
      "Recorrimos la Reserva Natural Parque Luro para estudiar la flora y fauna autóctona de la región, integrando contenidos de Biología y Geografía.",
    image: expSalida,
  },
  {
    title: "Mural Colectivo",
    description:
      "El taller de arte coordinó la creación de un mural en el patio de la escuela, reflejando la identidad cultural de La Pampa.",
    image: expMural,
  },
  {
    title: "Torneo Deportivo Interescolar",
    description:
      "Nuestros equipos de vóley y handball participaron en el torneo provincial, promoviendo el trabajo en equipo y la vida saludable.",
    image: expDeporte,
  },
  {
    title: "Taller de Tecnología y Programación",
    description:
      "Alumnos del ciclo orientado aprendieron fundamentos de programación y robótica, desarrollando prototipos con materiales reciclados.",
    image: expTecnologia,
  },
];

export default function Experiencias() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-4 md:mb-6">
            Vivencias escolares
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
            Experiencias escolares
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            Proyectos, salidas y actividades que enriquecen la formación integral de nuestros estudiantes.
          </p>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {experiencias.map((exp) => (
              <article
                key={exp.title}
                className="group rounded-lg overflow-hidden border border-gray-200 bg-white hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-7 flex flex-col h-full">
                  <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted leading-relaxed line-clamp-4 flex-1">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
