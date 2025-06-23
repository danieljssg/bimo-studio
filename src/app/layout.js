import "./globals.css";

export const metadata = {
  title: "BIMO ESTUDIO - Arquitectura y Diseño",
  description: "Estudio de arquitectura especializado en...",
};
export default function RootLayout({ children }) {
  return (
    <html lang="es-VE">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
