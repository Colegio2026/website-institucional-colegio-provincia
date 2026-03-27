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
      <div className="container px-4 md:px-6 py-16 md:py-24">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Institución */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-tight">
              Escuela Secundaria
            </h3>
            <p className="text-sm leading-relaxed opacity-90">
              Provincia de La Pampa. Formando ciudadanos comprometidos con la comunidad.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider opacity-90">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider opacity-90">
              Contacto
            </h4>
            <div className="flex flex-col gap-4 text-sm opacity-80">
              <a 
                href="tel:+540295400000"
                className="flex items-center gap-3 hover:opacity-100 transition-opacity duration-200 group"
              >
                <Phone className="h-4 w-4 shrink-0 group-hover:opacity-100" />
                <span>(02954) 00-0000</span>
              </a>
              <a 
                href="mailto:contacto@lapampa.gob.ar"
                className="flex items-center gap-3 hover:opacity-100 transition-opacity duration-200 group"
              >
                <Mail className="h-4 w-4 shrink-0 group-hover:opacity-100" />
                <span>contacto@lapampa.gob.ar</span>
              </a>
              <a 
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:opacity-100 transition-opacity duration-200 group"
              >
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 group-hover:opacity-100" />
                <span>Santa Rosa,<br/>La Pampa, Argentina</span>
              </a>
            </div>
          </div>

          {/* Info adicional */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider opacity-90">
              Horario
            </h4>
            <div className="text-sm opacity-80 space-y-2">
              <p><strong className="opacity-100">Turno Mañana:</strong><br/>7:30 - 12:50</p>
              <p><strong className="opacity-100">Turno Tarde:</strong><br/>12:50 - 18:10</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-70">
          <p>
            © {new Date().getFullYear()} Provincia de La Pampa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacidad</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Términos</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Accesibilidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
