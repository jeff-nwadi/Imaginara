import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";


// import { dark } from "@clerk/themes";
import { ClerkProvider, SignedOut } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Imaginara | Photographers social & Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
         {/* appearance={{
        // baseTheme: dark,
      }} */}
    <html lang="en" >
      <body className={inter.className, "bg-black" }>
        <Topbar />
        <main>
          {children}
        </main>
        </body>
    </html>
    </ClerkProvider>
  );
}
