import { Amatic_SC, Poppins } from 'next/font/google'
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-amatic',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`
          flex flex-col min-h-screen 
          ${amatic.variable} 
          ${poppins.variable}
        `}>
        <Header />

        <main className="grow flex flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
