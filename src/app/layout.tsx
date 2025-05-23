import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.scss";
import { UserProvider } from "./context/UserContext";
import { Navbar } from "@/components/Navbar/Navbar";
import { LayoutContainer } from "@/components/LayoutContainer/LayoutContainer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // Add the weights you want to use
});

export const metadata: Metadata = {
  title: "BIF",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>BIF</title>
        <link rel="icon" href="/logo.png" />
        <script
          type="text/javascript"
          src="https://cdn.conekta.io/js/latest/conekta.js"
        ></script>
      </head>
      <body className={montserrat.className}>
        <Toaster />
        <UserProvider>
          <Navbar />
          <LayoutContainer>{children}</LayoutContainer>
        </UserProvider>
      </body>
    </html>
  );
}
