import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/variables.css"
import "@fontsource/unbounded";
import '@fontsource/aclonica';
import '@fontsource/inter';
import '@fontsource/montserrat';
import "./globals.css";
import GoogleCaptchaWrapper from "./captcha/google-captcha-wrapper";
import { Providers } from "./providers";
import LanguageChanger from "@/components/LanguageChanger/LanguageChanger";
import { I18nProvider } from "@/i18n-context";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import SchemaOrg from "./schemaOrg";

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
  title: 'InRealArt | NFT & Art de Luxe | Marketplace Phygitale',
  description: 'Découvrez InRealArt, la première marketplace de NFT d\'art de luxe en France. Collectionnez des œuvres d\'art physiques et numériques uniques certifiées par la blockchain.',
  keywords: 'NFT art, art de luxe, marketplace NFT, art digital, art physique, blockchain art, collection art, galerie NFT',
  openGraph: {
    title: 'InRealArt | NFT & Art de Luxe',
    description: 'Marketplace d\'art de luxe physique et digital certifié par NFT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InRealArt | NFT & Art de Luxe',
    description: 'Marketplace d\'art de luxe physique et digital certifié par NFT'
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en'>
      <head>
        <SchemaOrg/>
      </head>
      <GoogleAnalytics />
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Providers>
            <LanguageChanger />
            {children}
          </Providers>
        </body>
      
    </html>
  );
}
