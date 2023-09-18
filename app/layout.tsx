import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import { getCurrentUser } from "./actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextBnB",
  description: "NextBnB clone built with Next.js and Tailwind CSS",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser =  await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
         <ToasterProvider />
         <LoginModal  />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
