import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import StyledComponentsRegistry from "@/registry";
import Header from "./Header";
import Providers from "@/redux/Provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Flight Booking",
  description: "Filght booking sytem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <StyledComponentsRegistry>
            <Header />
            <div className="mt-5 pt-5">
              {children}
            </div>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
