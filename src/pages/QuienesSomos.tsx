import staffDirectora from "@/assets/staff-directora.jpg";
import staffVicedirectora from "@/assets/staff-vicedirectora.jpg";
import staffSecretaria from "@/assets/staff-secretaria.png";
import staffAuxiliar1 from "@/assets/staff-auxiliar1.jpg";
import staffAuxiliar2 from "@/assets/staff-auxiliar2.jpg";
import staffAuxiliar3 from "@/assets/staff-auxiliar3.jpg";
import staffAuxiliar4 from "@/assets/staff-auxiliar4.jpg";
import staffAuxiliar5 from "@/assets/staff-auxiliar5.jpg";
import staffCoord1 from "@/assets/staff-coord1.webp";
import staffCoord2 from "@/assets/staff-coord2.jpg";

interface StaffMember {
  name: string;
  role: string;
  image: string;
}

interface StaffSection {
  title: string;
  members: StaffMember[];
}

const sections: StaffSection[] = [
  {
    title: "Dirección",
    members: [
      { name: "María Elena Gutiérrez", role: "Directora", image: staffDirectora },
      { name: "Laura Beatriz Domínguez", role: "Vicedirectora", image: staffVicedirectora },
    ],
  },
  {
    title: "Secretaría",
    members: [
      { name: "Gabriela Martínez", role: "Secretaria", image: staffSecretaria },
    ],
  },
  {
    title: "Auxiliares",
    members: [
      { name: "Andrea Soledad Fernández", role: "Auxiliar a cargo de 1° año", image: staffAuxiliar1 },
      { name: "Valeria Roxana García", role: "Auxiliar a cargo de 2° año", image: staffAuxiliar2 },
      { name: "Héctor Manuel Rodríguez", role: "Auxiliar a cargo de 3° año", image: staffAuxiliar3 },
      { name: "Daniela Sofía Peña", role: "Auxiliar a cargo de 4° año", image: staffAuxiliar4 },
      { name: "Juan Carlos Suárez", role: "Auxiliar a cargo de 5° y 6° año", image: staffAuxiliar5 },
    ],
  },
  {
    title: "Coordinadores",
    members: [
      { name: "Camila Andrea Torres", role: "Coordinadora académica", image: staffCoord1 },
      { name: "Patricia Alessandra Gómez", role: "Coordinadora de convivencia", image: staffCoord2 },
    ],
  },
];

function StaffCard({ member }: { member: StaffMember }) {
  return (
    <article className="group rounded-lg border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-accent transition-colors">{member.name}</h3>
        <p className="text-base text-gray-600 font-medium">{member.role}</p>
      </div>
    </article>
  );
}

export default function QuienesSomos() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-4 md:mb-6">
            Nuestra institución
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
            ¿Quiénes somos?
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            Conocé al equipo directivo, la secretaría, el personal auxiliar y la coordinación, que trabajan cada día de manera articulada para brindar una educación de calidad y acompañar el desarrollo integral de nuestros estudiantes.
          </p>
        </div>
      </section>

      {/* Staff sections */}
      <div className="bg-secondary/20 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-20 md:space-y-32">
          {sections.map((section, index) => (
              <section key={section.title} className="text-gray-900">
                <div className="flex items-center gap-4 mb-12 md:mb-16">
                  <div className="h-1 w-12 bg-accent rounded-full"></div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {section.members.map((member) => (
                    <StaffCard key={member.name} member={member} />
                  ))}
                </div>
                {index < sections.length - 1 && (
                  <div className="mt-20 md:mt-28 border-t border-gray-200"></div>
                )}
              </section>
            ))}
        </div>
      </div>
    </>
  );
}
