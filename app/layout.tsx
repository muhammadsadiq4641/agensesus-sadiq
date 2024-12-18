import type { Metadata } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";
import Web3ModalProvider from "@/src/components/connect-wallet";
import { Toaster } from "react-hot-toast";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chakra.className}>
        <Web3ModalProvider>
          <Toaster />

          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}