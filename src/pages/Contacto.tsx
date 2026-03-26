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
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-4">
            ¿Necesitas ayuda?
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-primary-foreground mb-6">
            Contacto
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl leading-relaxed font-light">
            Estamos para ayudarte. Escribinos o visitanos en nuestra sede.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-black tracking-tight mb-2">
                  Información de contacto
                </h2>
                <p className="text-gray-600 text-sm">
                  Nos encontramos disponibles para brindarte la ayuda que necesites.
                </p>
              </div>
              <div className="space-y-6">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 rounded-lg bg-white border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{item.label}</p>
                      <p className="text-black font-medium mt-1">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-blue-100 aspect-[4/3] shadow-sm">
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
              <div className="rounded-xl border border-blue-100 bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-display font-bold text-blakc tracking-tight mb-8">
                  Envianos un mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-sm font-semibold text-gray-700">
                      Nombre completo
                    </Label>
                    <Input
                      id="nombre"
                      placeholder="Ej: Juan García"
                      value={form.nombre}
                      onChange={(e) => handleChange("nombre", e.target.value)}
                      maxLength={100}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    {errors.nombre && <p className="text-sm font-medium text-red-500">{errors.nombre}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Correo electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      maxLength={255}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    {errors.email && <p className="text-sm font-medium text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="text-sm font-semibold text-gray-700">
                      Mensaje
                    </Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Escribí tu consulta, sugerencia o comentario..."
                      rows={6}
                      value={form.mensaje}
                      onChange={(e) => handleChange("mensaje", e.target.value)}
                      maxLength={1000}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                    {errors.mensaje && <p className="text-sm font-medium text-red-500">{errors.mensaje}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={sending} 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all"
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
