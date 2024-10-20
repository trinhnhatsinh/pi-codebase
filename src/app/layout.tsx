import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

import ComponentFooter from '@/app/components/layout/footer';
import ComponentHeader from '@/app/components/layout/header';
import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.appName}`,
  },
  description: siteConfig.description,
  keywords: "thiết kế website chuyên nghiệp, dịch vụ SEO, website chuẩn SEO, tối ưu SEO, thiết kế website thương mại điện tử, phát triển website",
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: siteConfig.image,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
    creator: '19team',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  authors: [
    {
      name: '19team',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '19team.com',
    url: 'https://19team.com',
    logo: 'https://images.prismic.io/xpixel/Zw6OdIF3NbkBXeJ-_Group13.png?auto=format,compress',
    sameAs: [
      'https://www.facebook.com/hellohoainhon',
      'https://www.youtube.com/@hellohoainhon',
      'https://www.instagram.com/hellohoainhon',
      'https://www.tiktok.com/@hellohoainhon',
      'https://www.pinterest.com/hello_hoainhon',
    ],
  };

  return (
    <html lang="vi">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="p:domain_verify" content="32a6c66b205cbc5991e08f69de7bfc1d" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-E1W5CGY7CB" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E1W5CGY7CB');
        `}
        </Script> */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </head>
      <body>
        <ComponentHeader key="header" />
        {children}
        <ComponentFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
