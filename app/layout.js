import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'

const inter = Vazirmatn({ subsets: ["latin"] }

);

export const metadata = {
  title: "شرکت آرتا اکسپورت",
  description: "شرکت آرتا اکسپورت",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <meta name="robots" content="noindex,nofollow" />
      <body className={inter.className} >
        <div className='font-medium bg-back min-h-screen  flex flex-col relative'>
          <Header />

          {children}
        </div>
      </body>
    </html >
  );
}
