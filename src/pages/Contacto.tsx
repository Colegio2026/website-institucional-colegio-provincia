import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Ingresá un email válido").max(255, "Máximo 255 caracteres"),
  mensaje: z.string().trim().min(1, "El mensaje es obligatorio").max(1000, "Máximo 1000 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

const infoItems = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Teléfono",
    value: "(02954) 42-1234",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Correo electrónico",
    value: "contacto@escuelaprovincia.edu.ar",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Dirección",
    value: "Av. San Martín 450, Santa Rosa, La Pampa",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Horario de atención",
    value: "Lunes a viernes de 7:30 a 18:00 hs",
  },
];

export default function Contacto() {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof ContactForm;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ nombre: "", email: "", mensaje: "" });
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos a la brevedad.",
      });
    }, 1200);
  };

  return (
    <>
      <section className="bg-primary text-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-4 md:mb-6">
            ¿Necesitas ayuda?
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
            Contacto
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            Estamos para ayudarte. Escribinos o visitanos en nuestra sede.
          </p>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                  Información de contacto
                </h2>
                <p className="text-muted text-base">
                  Nos encontramos disponibles para brindarte la ayuda que necesites.
                </p>
              </div>
              <div className="space-y-6">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex gap-4 p-5 md:p-6 rounded-lg bg-white border border-gray-200 hover:shadow-md hover:border-primary/20 transition-all">
                    <div className="h-12 w-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs md:text-sm font-semibold text-muted uppercase tracking-wide">{item.label}</p>
                      <p className="text-base font-medium text-gray-900 mt-2">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-lg overflow-hidden border border-gray-200 aspect-[4/3] shadow-sm">
                <iframe
                  title="Ubicación de la escuela"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-64.30%2C-36.63%2C-64.26%2C-36.61&layer=mapnik"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-lg border border-gray-200 bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                  Envianos un mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="nombre" className="text-sm font-semibold text-gray-900">
                      Nombre completo
                    </Label>
                    <Input
                      id="nombre"
                      placeholder="Ej: Juan García"
                      value={form.nombre}
                      onChange={(e) => handleChange("nombre", e.target.value)}
                      maxLength={100}
                      className="rounded-lg border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.nombre && <p className="text-sm font-medium text-red-600">{errors.nombre}</p>}
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-900">
                      Correo electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      maxLength={255}
                      className="rounded-lg border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.email && <p className="text-sm font-medium text-red-600">{errors.email}</p>}
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="mensaje" className="text-sm font-semibold text-gray-900">
                      Mensaje
                    </Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Escribí tu consulta, sugerencia o comentario..."
                      rows={6}
                      value={form.mensaje}
                      onChange={(e) => handleChange("mensaje", e.target.value)}
                      maxLength={1000}
                      className="rounded-lg border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                    {errors.mensaje && <p className="text-sm font-medium text-red-600">{errors.mensaje}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={sending} 
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-lg transition-all"
                  >
                    {sending ? "Enviando..." : "Enviar mensaje"}
                    {!sending && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
