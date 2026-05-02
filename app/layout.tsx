import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BookingModal from "./components/BookingModal";
import GlobalBackground from "./components/GlobalBackground";
import Footer from "./components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DreyCutz Barber Shop",
  description: "Premium cuts, sharp lines, and professional grooming in Montreal. Book your appointment at DreyCutz Studio.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <GlobalBackground />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <BookingModal />
      </body>
    </html>
  );
}
