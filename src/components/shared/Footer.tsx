import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { to: "/quienes-somos", label: "¿Quiénes somos?" },
  { to: "/horarios", label: "Horarios" },
  { to: "/experiencias", label: "Experiencias escolares" },
  { to: "/material-estudio", label: "Material de estudio" },
  { to: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Institucional */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-3">
              Provincia de La Pampa
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Portal oficial de información, servicios y experiencias culturales
              de la Provincia de La Pampa, Argentina.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
              Navegación
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
              Contacto
            </h4>
            <div className="flex flex-col gap-3 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Santa Rosa, La Pampa, Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(02954) 00-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contacto@lapampa.gob.ar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-xs opacity-60">
          © {new Date().getFullYear()} Provincia de La Pampa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
