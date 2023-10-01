import AppLayout from "@/components/layout";
import { ThemeProvider } from "@/components/utils/theme-provider";
import { getWebsite } from "@/utils/app-request";
import { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { ReactNode } from "react";
import "../styles/globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const NAME = process.env.NEXT_PUBLIC_NAME;
  const SITE_URL = process.env.NEXT_PUBLIC_URL as string;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: NAME,
      template: ` - ${NAME}`,
      absolute: ``,
    },
    icons: {
      icon: "/icons/favicon.ico",
      apple: "/icons/apple-touch-icon.png",
      shortcut: "/icons/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const website = await getWebsite();

  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme={website.defaultTheme?.toLowerCase()}
          enableSystem
        >
          <AppLayout website={website}>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
