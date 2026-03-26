import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import NormasConvivencia from "./pages/NormasConvivencia";
import Horarios from "./pages/Horarios";
import TurnoManana from "./pages/TurnoManana";
import TurnoTarde from "./pages/TurnoTarde";
import Experiencias from "./pages/Experiencias";
import MaterialEstudio from "./pages/MaterialEstudio";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/normas" element={<NormasConvivencia />} />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/horarios/turno-manana" element={<TurnoManana />} />
            <Route path="/horarios/turno-tarde" element={<TurnoTarde />} />
            <Route path="/experiencias" element={<Experiencias />} />
            <Route path="/material-estudio" element={<MaterialEstudio />} />
            <Route path="/contacto" element={<Contacto />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
