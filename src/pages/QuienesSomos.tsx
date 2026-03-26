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
    <article className="group rounded-xl border border-blue-100 bg-white overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-blue-50">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-bold text-black mb-2 group-hover:text-orange-500 transition-colors">{member.name}</h3>
        <p className="text-sm text-gray-600 font-medium">{member.role}</p>
      </div>
    </article>
  );
}

export default function QuienesSomos() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-4">
            Nuestra institución
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-primary-foreground mb-6">
            ¿Quiénes somos?
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl leading-relaxed font-light">
            Conocé al equipo directivo, la secretaría, el personal auxiliar y la coordinación, que trabajan cada día de manera articulada para brindar una educación de calidad y acompañar el desarrollo integral de nuestros estudiantes.
          </p>
        </div>
      </section>

      {/* Staff sections */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container space-y-20">
          {sections.map((section, index) => (
              <section key={section.title} className="text-black font-bold">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
                  <h2 className="text-3xl font-display font-bold text-black tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {section.members.map((member) => (
                    <StaffCard key={member.name} member={member} />
                  ))}
                </div>
                {index < sections.length - 1 && (
                  <div className="mt-20 border-t border-blue-100"></div>
                )}
              </section>
            ))}
        </div>
      </div>
    </>
  );
}
