import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MaterialEstudio() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
            Trabajos integradores
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            Accedé a los trabajos integradores correspondientes al ciclo lectivo 2025
          </p>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-lg border border-gray-200 bg-white p-10 md:p-16 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="text-center">
                <p className="text-xs md:text-sm font-semibold text-muted uppercase tracking-widest mb-4 md:mb-6">
                  Acceso a recursos
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10">
                  Trabajos integradores
                </h2>
               
                <a
                  href="https://drive.google.com/drive/folders/1ldgZtYNCfqD5lQN84ETHgzZmgKUMCdXv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white gap-2 font-semibold">
                    Ir a trabajos integradores <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
