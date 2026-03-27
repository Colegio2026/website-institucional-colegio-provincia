import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LinkIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/20">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="mb-4 md:mb-6 text-6xl md:text-8xl font-bold text-primary/20">404</h1>
        <h2 className="mb-2 md:mb-4 text-2xl md:text-3xl font-bold text-gray-900">Página no encontrada</h2>
        <p className="mb-8 md:mb-12 text-base md:text-lg text-muted leading-relaxed">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
        >
          <LinkIcon className="h-4 w-4" />
          Volver a inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
