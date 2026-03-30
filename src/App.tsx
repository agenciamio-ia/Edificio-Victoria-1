/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  MapPin,
  Maximize,
  Scale,
  DraftingCompass,
  Phone,
  Mail,
  Globe,
  Building2,
  Menu,
} from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

function ParallaxBanner({ image, title, description, buttonText, buttonHref, className = "h-[60vh]" }: { image: string, title?: string, description?: string, buttonText?: string, buttonHref?: string, className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className={`relative ${className} flex items-center justify-center overflow-hidden`}>
      <motion.div className="absolute inset-0 z-0" style={{ y, scale: 1.2 }}>
        <img src={image} alt="Banner" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
      </motion.div>
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {title && <h2 className="text-white font-headline text-4xl md:text-6xl tracking-tight mb-6">{title}</h2>}
        {description && <p className="text-white/90 font-body text-xl mb-8 font-light">{description}</p>}
        {buttonText && (
          <a href={buttonHref} target={buttonHref?.startsWith('http') ? "_blank" : undefined} rel={buttonHref?.startsWith('http') ? "noopener noreferrer" : undefined} className="bg-primary text-on-primary px-10 py-5 text-sm font-label tracking-widest uppercase gold-leaf-hover transition-all inline-block shadow-2xl">
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=+573024511960&text=deseo%20informaci%C3%B3n%20del%20Apto%20Victoria";

const FORM_OPTIONS = [
  "Deseo saber el precio",
  "Tiempo de Entrega",
  "Planos del proyecto",
  "Agendar una visita",
  "Requiero mas de 4 alcobas",
  "Tengo urgencia",
  "Tengo un requerimiento especial",
  "Trabajo o estudio cerca a calle 26 con Kr.30"
];

export default function App() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav flex justify-between items-center px-8 py-4 max-w-full mx-auto border-b border-outline-variant/20">
        <div className="text-2xl font-headline tracking-tighter text-on-surface">
          Edificio Victoria
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs tracking-widest uppercase"
            href="#ubicacion"
          >
            Ubicación
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs tracking-widest uppercase"
            href="#espacios"
          >
            Espacios
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs tracking-widest uppercase"
            href="#especificaciones"
          >
            Especificaciones
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs tracking-widest uppercase"
            href="#contacto"
          >
            Contacto
          </a>
          <a
            className="bg-primary text-on-primary px-6 py-2 font-label text-xs tracking-widest uppercase gold-leaf-hover transition-all"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Cita
          </a>
        </div>
        <button className="md:hidden text-on-surface">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div className="absolute -inset-[20%] z-0" style={{ y }}>
          <img
            className="w-full h-full object-cover"
            alt="Stunning panoramic architectural view of a luxury residential building facade in Bogotá at dusk with warm interior lights glowing"
            src="https://agenciamio.com/wp-content/uploads/2026/03/mapas-231-Ed-victoria-v01.png"
          />
          <div className="absolute inset-0 bg-secondary/40 mix-blend-multiply"></div>
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-center md:text-left">
          <div className="inline-block">
            <p className="font-label text-primary-fixed-dim tracking-[0.2rem] uppercase mb-6 text-sm font-semibold">
              CALLE 27 #33-24, BOGOTÁ
            </p>
            <h1 className="font-headline text-4xl md:text-6xl text-white max-w-4xl leading-tight tracking-tighter mb-8">
              Vive en el corazón internacional y estratégico de Bogotá
            </h1>
            <p className="font-body text-white/90 text-xl md:text-2xl max-w-2xl mb-12 font-light">
              Exclusivos apartamentos de 117m² con acabados personalizables en
              una ubicación privilegiada.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <a
                className="bg-primary text-on-primary px-10 py-5 text-sm font-label tracking-widest uppercase gold-leaf-hover transition-all inline-block shadow-2xl text-center"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                PEDIR INFO
              </a>
              <a
                className="border border-white text-white px-10 py-5 text-sm font-label tracking-widest uppercase hover:bg-white hover:text-on-surface transition-all inline-block text-center"
                href="#espacios"
              >
                VER ESPACIOS
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Value Propositions (Bento Grid) */}
      <section className="py-32 px-8 bg-surface" id="ubicacion">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <p className="font-label text-primary tracking-widest uppercase text-xs mb-4 font-semibold">
              EL PRIVILEGIO
            </p>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface tracking-tight">
              Arquitectura con Propósito
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Card */}
            <div className="md:col-span-8 bg-surface-container-lowest p-12 flex flex-col justify-between min-h-[500px] relative overflow-hidden">
              <div className="relative z-10">
                <MapPin className="text-primary w-10 h-10 mb-6" strokeWidth={1.5} />
                <h3 className="font-headline text-3xl mb-6 text-on-surface">
                  Ubicación Estratégica
                </h3>
                <p className="text-on-surface-variant max-w-md leading-relaxed text-lg">
                  Situado cerca de la Av. Calle 26 y Corferias, Edificio
                  Victoria ofrece conectividad total con los puntos neurálgicos
                  de la capital, ideal para el profesional moderno.
                </p>
              </div>
              <img
                className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-20 grayscale hover:grayscale-0 transition-all duration-700"
                alt="Modern urban map view of Bogotá high-traffic district"
                src="https://agenciamio.com/wp-content/uploads/2026/03/mapas-231-Ed-victoria-v2.png"
              />
            </div>

            {/* Tall Card */}
            <div className="md:col-span-4 bg-primary text-on-primary p-12 flex flex-col justify-center">
              <Maximize className="text-white w-10 h-10 mb-6" strokeWidth={1.5} />
              <h3 className="font-headline text-3xl mb-6">Espacios Amplios</h3>
              <p className="opacity-90 leading-relaxed">
                Desde 117.74 m² hasta 118.74 m². Diseñados con cocinas abiertas
                integradas para fomentar la amplitud y el estilo de vida
                contemporáneo.
              </p>
            </div>

            {/* Medium Card 1 */}
            <div className="md:col-span-6 bg-surface-container p-12">
              <Scale className="text-primary w-10 h-10 mb-6" strokeWidth={1.5} />
              <h3 className="font-headline text-2xl mb-4">Garantía Legal</h3>
              <p className="text-on-surface-variant">
                Contamos con licencia de construcción vigente y cumplimiento
                estricto de normas sismo-resistentes para su total tranquilidad.
              </p>
            </div>

            {/* Medium Card 2 */}
            <div className="md:col-span-6 bg-surface-container-highest p-12 flex items-center justify-between group">
              <div>
                <h3 className="font-headline text-2xl mb-2">
                  Acabados de Lujo
                </h3>
                <p className="text-on-surface-variant">
                  Personaliza tu espacio a tu medida.
                </p>
              </div>
              <DraftingCompass className="text-primary w-12 h-12 group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Banner 1 */}
      <ParallaxBanner
        image="https://agenciamio.com/wp-content/uploads/2026/03/mapas-231-Ed-victoria-v3.png"
        buttonText="Agendar Cita"
        buttonHref={WHATSAPP_LINK}
        className="h-[85vh]"
      />

      {/* Technical Specs & Lead Capture 1 */}
      <section className="bg-surface-container-low py-32 px-8" id="especificaciones">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <p className="font-label text-primary tracking-widest uppercase text-xs mb-4 font-semibold">
              DETALLES TÉCNICOS
            </p>
            <h2 className="font-headline text-4xl md:text-5xl mb-12 leading-tight">
              Especificaciones de Clase Mundial
            </h2>
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <span className="text-primary font-headline text-3xl">01</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Respaldo Técnico y Legal ⚖️</h4>
                  <p className="text-on-surface-variant">
                    Garantizamos la seguridad de tu inversión con documentación completa (Vo.Bo. Enero 2026).
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-primary font-headline text-3xl">02</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Sistema Estructural</h4>
                  <p className="text-on-surface-variant">
                    Cimentación por pilotaje bajo norma sismoresistente. Muros en bloque con amarre en perfilería y concreto reforzado.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-primary font-headline text-3xl">03</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Certificaciones</h4>
                  <p className="text-on-surface-variant">
                    Cumplimiento de norma RETIE para red eléctrica y diseño hidráulico avalado.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-primary font-headline text-3xl">04</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Legalidad y Tranquilidad</h4>
                  <p className="text-on-surface-variant">
                    Licencia de construcción vigente, estudio de suelos y presupuesto notarial al día.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-primary font-headline text-3xl">05</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Entrega Semi-Terminada</h4>
                  <p className="text-on-surface-variant">
                    Ofrecemos la base perfecta para que apliques tus propios acabados de lujo y transformes la propiedad en tu hogar ideal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-12 relative border border-outline-variant/30">
            <h3 className="font-headline text-2xl mb-8">
              Solicita el Brochure Técnico
            </h3>
            <form action="https://formsubmit.co/contacto@agenciamio.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="Nuevo contacto - Brochure Edificio Victoria" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label className="block text-xs font-label tracking-widest uppercase mb-2 text-on-surface-variant">
                  Nombres
                </label>
                <input
                  name="Nombres"
                  required
                  className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary transition-all py-3 px-0 outline-none"
                  placeholder="Ej: Julian Martinez"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-label tracking-widest uppercase mb-2 text-on-surface-variant">
                  WhatsApp
                </label>
                <input
                  name="WhatsApp"
                  required
                  className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary transition-all py-3 px-0 outline-none"
                  placeholder="+57 300 000 0000"
                  type="tel"
                />
              </div>
              <div>
                <label className="block text-xs font-label tracking-widest uppercase mb-2 text-on-surface-variant">
                  Correo Electrónico
                </label>
                <input
                  name="Correo"
                  required
                  className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary transition-all py-3 px-0 outline-none"
                  placeholder="julian@empresa.com"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-xs font-label tracking-widest uppercase mb-3 text-on-surface-variant">
                  ¿En qué podemos ayudarte?
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {FORM_OPTIONS.map((option, idx) => (
                    <label key={idx} className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" name="Intereses" value={option} className="mt-1 w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-transparent" />
                      <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors leading-tight">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="w-full bg-primary text-on-primary py-5 font-label tracking-widest uppercase gold-leaf-hover transition-all mt-4 text-sm">
                DESCARGAR BROCHURE
              </button>
            </form>
            <p className="text-xs text-on-surface-variant mt-6 text-center italic">
              Reciba los planos detallados y lista de precios en su correo.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Gallery (Asymmetric) */}
      <section className="py-32 bg-surface-container-lowest" id="espacios">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 h-[600px]">
              <img
                className="w-full h-full object-cover"
                alt="Ultra-modern open kitchen and living area"
                src="https://agenciamio.com/wp-content/uploads/2026/03/edificio-alvaro-fachada-principal-1.jpg"
              />
            </div>
            <div className="md:col-span-5 h-[600px] flex flex-col gap-4">
              <div className="h-1/2">
                <img
                  className="w-full h-full object-cover"
                  alt="Close-up of luxury bedroom finishing"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD7pbmASc9pvOQTZdfgLTD2HAwSw-yne2yabwEfH8-H_pys01RSWnt9SCdpD0WdS-W4R4P9qEEPLXfcL_LINuejVDMhz9MHcJ9SRi2aQ_Hjxj-kYQt92fnNxffArGlxaEf33marrSlcisE3J22wdL_ruEXiqamXGz03zAHGk4KCNGa0CJjmol3zyIBoyc-x1QsWUwltuUTfQA3pcz_DsJI1WMlYf_Lpc1MAy4T4QYI-hbXyDkZG3qzlAXLcNFDkgcJcBfC6GgxRAjb"
                />
              </div>
              <div className="h-1/2 bg-surface-container flex flex-col justify-center px-12">
                <h4 className="font-headline text-2xl mb-4">
                  Planos Flexibles
                </h4>
                <p className="text-on-surface-variant mb-6 text-sm">
                  Diseño arquitectónico que permite la redistribución de áreas
                  sociales según sus necesidades.
                </p>
                <a
                  className="text-primary font-label text-xs tracking-widest uppercase underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity w-fit"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Catálogo de Planos
                </a>
              </div>
            </div>
            <div className="md:col-span-12 h-[400px]">
              <img
                className="w-full h-full object-cover"
                alt="Wide angle view of a contemporary apartment interior"
                src="https://agenciamio.com/wp-content/uploads/2026/03/edificio-alvaro-fachada-principal-13.jpg"
              />
            </div>
            {/* 5 Nuevas Fotos */}
            <div className="md:col-span-4 h-[300px]">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Espacio interior 1"
                src="https://picsum.photos/seed/victoria1/800/600"
              />
            </div>
            <div className="md:col-span-4 h-[300px]">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Espacio interior 2"
                src="https://picsum.photos/seed/victoria2/800/600"
              />
            </div>
            <div className="md:col-span-4 h-[300px]">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Espacio interior 3"
                src="https://picsum.photos/seed/victoria3/800/600"
              />
            </div>
            <div className="md:col-span-5 h-[400px]">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Espacio interior 4"
                src="https://picsum.photos/seed/victoria4/800/800"
              />
            </div>
            <div className="md:col-span-7 h-[400px]">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Espacio interior 5"
                src="https://picsum.photos/seed/victoria5/1200/800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zonas Comunes */}
      <section className="py-32 px-8 bg-surface" id="zonas-comunes">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <p className="font-label text-primary tracking-widest uppercase text-xs mb-4 font-semibold">
              AMENIDADES
            </p>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface tracking-tight">
              Zonas Comunes del Edificio Victoria
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Tanques de almacenamiento de agua para zonas comunes",
              "Terraza con pisos impermeabilizados y enchapados",
              "Escaleras y áreas de tráfico terminadas y enchapadas",
              "Barandas en metal y vidrio en terraza, anterior y posterior",
              "Parqueaderos demarcados. Mas Visitante",
              "Baño de servicios generales con cerámica",
              "Cuarto de aseo totalmente enchapado con lavamanos",
              "Área dedicada para bicicletas y basuras"
            ].map((item, i) => (
              <div key={i} className="bg-surface-container p-8 border-t-2 border-primary/20 hover:border-primary transition-colors flex flex-col justify-start">
                <div className="text-primary font-headline text-3xl mb-4 opacity-50">0{i + 1}</div>
                <p className="text-on-surface-variant font-body text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Lead Capture */}
      <section className="py-32 px-8 bg-surface-dim" id="contacto">
        <div className="max-w-5xl mx-auto bg-surface-container-lowest grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 md:p-20 bg-secondary text-on-secondary flex flex-col justify-center">
            <p className="font-label text-primary-fixed-dim tracking-widest uppercase text-xs mb-4 font-semibold">
              ATENCIÓN EXCLUSIVA
            </p>
            <h2 className="font-headline text-4xl mb-8">
              Solicita una asesoría personalizada
            </h2>
            <p className="opacity-80 mb-12 font-light leading-relaxed">
              Nuestros asesores están listos para mostrarte por qué Edificio
              Victoria es la mejor inversión en el mercado inmobiliario actual
              de Bogotá.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4">
                <Phone className="text-primary-fixed-dim w-5 h-5" />
                <span>+57 (601) 345-6789</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-primary-fixed-dim w-5 h-5" />
                <span>ventas@edificiovictoria.co</span>
              </div>
            </div>
          </div>
          <div className="p-12 md:p-20">
            <form action="https://formsubmit.co/contacto@agenciamio.com" method="POST" className="space-y-8">
              <input type="hidden" name="_subject" value="Nuevo contacto - Asesoría Edificio Victoria" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label className="block text-xs font-label tracking-widest uppercase mb-3 text-on-surface-variant">
                  Nombres
                </label>
                <input
                  name="Nombres"
                  required
                  className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-2 px-0 text-lg outline-none bg-transparent"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-label tracking-widest uppercase mb-3 text-on-surface-variant">
                  WhatsApp
                </label>
                <input
                  name="WhatsApp"
                  required
                  className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-2 px-0 text-lg outline-none bg-transparent"
                  type="tel"
                />
              </div>
              <div>
                <label className="block text-xs font-label tracking-widest uppercase mb-3 text-on-surface-variant">
                  Correo Electrónico
                </label>
                <input
                  name="Correo"
                  required
                  className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-2 px-0 text-lg outline-none bg-transparent"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-xs font-label tracking-widest uppercase mb-4 text-on-surface-variant">
                  Me interesa:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FORM_OPTIONS.map((option, idx) => (
                    <label key={idx} className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" name="Intereses" value={option} className="mt-1 w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-transparent" />
                      <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors leading-tight">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="bg-primary text-on-primary w-full py-6 font-label tracking-widest uppercase gold-leaf-hover transition-all text-sm">
                AGENDAR LLAMADA
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Parallax Banner 2 */}
      <ParallaxBanner
        image="https://picsum.photos/seed/bogota-skyline/1920/1080"
        title="¿Para cuándo desea la entrega?"
        description="Contamos con diferentes etapas de entrega para adaptarnos a sus planes de inversión y mudanza. Asegure su futuro hoy mismo."
        buttonText="Consultar Plazos"
        buttonHref={WHATSAPP_LINK}
      />

      {/* Footer */}
      <footer className="bg-surface-container w-full py-12 border-t-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12 max-w-7xl mx-auto">
          <div>
            <div className="text-xl font-headline text-on-surface mb-6">
              Edificio Victoria
            </div>
            <p className="font-body text-sm text-on-surface-variant max-w-xs leading-relaxed">
              Un proyecto arquitectónico de vanguardia que redefine el estándar
              de vida en el centro internacional de Bogotá.
            </p>
          </div>
          <div>
            <h5 className="font-label text-xs tracking-widest uppercase text-primary mb-6 font-semibold">
              Enlaces Legales
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Tratamiento de Datos
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Licencia de Construcción
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Mapa del Sitio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-label text-xs tracking-widest uppercase text-primary mb-6 font-semibold">
              Oficina de Ventas
            </h5>
            <p className="text-sm text-on-surface-variant mb-4">
              Calle 27 #33-24, Teusaquillo
              <br />
              Bogotá, Colombia
            </p>
            <div className="flex gap-4">
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                <Building2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-xs">
            © 2024 Edificio Victoria. Bogotá, Colombia. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white w-16 h-16 flex items-center justify-center rounded-full shadow-2xl hover:scale-110 active:opacity-80 transition-transform"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.011 0-3.986-.51-5.742-1.472l-6.251 1.691zm5.989-4.72c1.567.936 3.124 1.403 4.629 1.403 5.409 0 9.811-4.401 9.811-9.811 0-2.615-1.025-5.086-2.887-6.948-1.862-1.861-4.327-2.883-6.924-2.883-5.409 0-9.811 4.401-9.811 9.811 0 1.9.533 3.655 1.543 5.093l-.991 3.621 3.63-.986z"></path>
        </svg>
      </a>
    </div>
  );
}
