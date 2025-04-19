import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Marquee, Navbar } from "@/components";
import Image from "next/image";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Marquee items={["MAKE IT BUNDLE!"]} speed={35} />

          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
