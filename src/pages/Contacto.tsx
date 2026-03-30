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
    value: "Chile 220, L6300, Santa Rosa, La Pampa, Argentina",
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
          {/* Column Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Información de contacto
              </h2>
              <p className="text-base md:text-lg text-gray-900 mt-2">
                Nos encontramos disponibles para brindarte la ayuda que necesites.
              </p>
            </div>
            <div className="md:flex md:flex-col md:justify-start">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Envianos un mensaje
              </h2>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Info Section */}
            <div className="order-2 md:order-1 space-y-6">
              {infoItems.map((item) => (
                <div key={item.label} className="flex gap-4 p-5 md:p-6 rounded-lg bg-white border border-gray-200 hover:shadow-md hover:border-primary/20 transition-all">
                  <div className="h-12 w-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wide">{item.label}</p>
                    <p className="text-base font-medium text-gray-900 mt-2">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form Section */}
            <div className="order-1 md:order-2">
              <div className="rounded-lg border border-gray-200 bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
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

          {/* Map Section */}
          <div className="w-full">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Ubicación de la escuela
              </h2>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm aspect-video md:aspect-[16/9] lg:aspect-[21/9]">
              <iframe 
                title="Ubicación de la escuela"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.9693637330415!2d-64.30341082476853!3d-36.62712406715618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cd0359c0e3eb%3A0xac00772985ad2874!2sChile%20220%2C%20L6300CZF%20Santa%20Rosa%2C%20La%20Pampa!5e0!3m2!1ses!2sar!4v1774895398160!5m2!1ses!2sar" 
                className="h-full w-full border-0"
                style={{border: 0}}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

