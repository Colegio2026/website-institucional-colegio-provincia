import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/quienes-somos", label: "¿Quiénes somos?" },
  { to: "/normas", label: "Normas de convivencia" },
  { to: "/horarios", label: "Horarios" },
  { to: "/experiencias", label: "Experiencias escolares" },
  { to: "/material-estudio", label: "Trabajos integradores" },
  { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold text-black tracking-tight hover:text-orange-500 transition-colors">
          Provincia de La Pampa
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "text-sm font-semibold transition-colors duration-200",
                pathname === to
                  ? "text-orange-500"
                  : "text-black hover:text-orange-500"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md text-black hover:text-orange-500 hover:bg-gray-100 transition-colors"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-3 py-2.5 rounded-md text-sm font-semibold transition-all duration-200",
                  pathname === to
                    ? "text-orange-500 bg-orange-50"
                    : "text-black hover:text-orange-500 hover:bg-gray-50"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
