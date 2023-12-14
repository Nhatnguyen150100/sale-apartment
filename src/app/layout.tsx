import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import LanguageIcon from "@mui/icons-material/Language";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VNHA company",
  description: "The VNHA company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className={inter.className}>
        <div className="container h-auto flex flex-col justify-between">
          <TheHeader />
          {children}
          <TheFooter />
        </div>
        <div className="w-full bg-[#3b7da2] py-4 flex justify-center">
          <div className="flex flex-row">
            <LanguageIcon sx={{ color: "#e6ce40" }} />
            <span className="text-white italic ms-2 text-lg">VHNA company</span>
          </div>
        </div>
      </body>
    </html>
  );
}
