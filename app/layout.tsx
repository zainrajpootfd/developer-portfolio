// import type React from "react";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Head from "next/head";

// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Zain Ali - Full Stack Developer",
//   description:
//     "Portfolio of Zain Ali, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
//   keywords:
//     "Zain Ali, Full Stack Developer, React, Next.js, TypeScript, Web Development, Portfolio",
//   authors: [{ name: "Zain Ali" }],
//   creator: "Zain Ali",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://zain-ali-portfolio.vercel.app",
//     title: "Zain Ali - Full Stack Developer",
//     description:
//       "Portfolio of Zain Ali, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
//     siteName: "Zain Ali Portfolio",
//     images: [],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Zain Ali - Full Stack Developer",
//     description:
//       "Portfolio of Zain Ali, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
//     creator: "@zainali",
//     images: [
//       {
//         url: "https://zain-ali-portfolio.vercel.app/zain.png",
//         alt: "Zain Ali Portfolio",
//       },
//     ],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <Head>
//         <link rel="icon" href="/zain.png" type="image/png" />
//       </Head>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zain Ali - Full Stack Developer",
  description:
    "Portfolio of Zain Ali, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords:
    "Zain Ali, Full Stack Developer, React, Next.js, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Zain Ali" }],
  creator: "Zain Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zain-ali-portfolio.vercel.app",
    title: "Zain Ali - Full Stack Developer",
    description:
      "Portfolio of Zain Ali, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Zain Ali Portfolio",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Ali - Full Stack Developer",
    description:
      "Portfolio of Zain Ali, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
    creator: "@zainali",
    images: [
      {
        url: "https://zain-ali-portfolio.vercel.app/zain.png",
        alt: "Zain Ali Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/zain.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
