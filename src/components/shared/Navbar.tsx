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
      <nav className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        {/* Logo/Brand */}
        <Link 
          to="/" 
          className="flex flex-col shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded py-1"
        >
          <span className="text-lg md:text-xl font-bold text-primary leading-tight">
            Provincia
          </span>
          <span className="text-xs font-semibold text-primary/70 leading-none">
            La Pampa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap",
                pathname === to
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="container px-4 py-3 space-y-1 md:px-6">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200",
                  pathname === to
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-primary"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
