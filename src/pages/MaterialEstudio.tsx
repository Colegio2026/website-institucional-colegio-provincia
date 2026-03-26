import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MaterialEstudio() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-primary-foreground mb-6">
            Trabajos integradores
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl leading-relaxed font-light">
            Accedé a los trabajos integradores correspondientes al ciclo lectivo 2025
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl border border-blue-100 bg-white p-8 md:p-12 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest mb-4">
                  Acceso a recursos
                </p>
                <h2 className="text-3xl font-bold text-black mb-4">
                  Trabajos integradores
                </h2>
               
                <a
                  href="https://drive.google.com/drive/folders/1ldgZtYNCfqD5lQN84ETHgzZmgKUMCdXv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
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
