import SupabaseProvider from './supabase-provider';
import { PropsWithChildren } from 'react';
import '@/styles/globals.css';
import { ThemeProvider } from './theme-provider';

export const dynamic = 'force-dynamic';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="horizon-ui.com"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <title>
          Live Preview - Free & Open-source Shadcn UI NextJS Boilerplate ChatGPT
          UI AI Template - Horizon AI Boilerplate
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!--  Social tags   --> */}
        <meta
          name="description"
          content="Launch your SaaS startup within a few days with the first Shadcn UI NextJS boilerplate. Get started with Horizon AI Boilerplate today! Horizon AI Boilerplate is the first open source OpenAI ChatGPT AI Template made for Shadcn UI, NextJS and Tailwind CSS! Start creating outstanding Chat AI SaaS Apps faster."
        />
        {/* <!-- Schema.org markup for Google+ --> */}
        <meta
          itemProp="name"
          content="Live Preview - Free & Open-source Shadcn UI NextJS Boilerplate ChatGPT UI AI Template - Horizon AI Boilerplate"
        />
        <meta
          itemProp="description"
          content="Launch your SaaS startup within a few days with the first Shadcn UI NextJS boilerplate. Get started with Horizon AI Boilerplate today! Horizon AI Boilerplate is the first open source OpenAI ChatGPT AI Template made for Shadcn UI, NextJS and Tailwind CSS! Start creating outstanding Chat AI SaaS Apps faster."
        />
        <meta
          itemProp="image"
          content="https://i.ibb.co/Bc0jZ2S/horizon-free-boilerplate-shadcn-image.png"
        />
        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:card" content="product" />
        <meta
          name="twitter:title"
          content="Live Preview - Free & Open-source Shadcn UI NextJS Boilerplate ChatGPT UI AI Template - Horizon AI Boilerplate"
        />
        <meta
          name="twitter:description"
          content="Launch your SaaS startup within a few days with the first Shadcn UI NextJS boilerplate. Get started with Horizon AI Boilerplate today! Horizon AI Boilerplate is the first open source OpenAI ChatGPT AI Template made for Shadcn UI, NextJS and Tailwind CSS! Start creating outstanding Chat AI SaaS Apps faster."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/Bc0jZ2S/horizon-free-boilerplate-shadcn-image.png"
        />
        {/* <!-- Open Graph data --> */}
        <meta
          property="og:title"
          content="Live Preview - Free & Open-source Shadcn UI NextJS Boilerplate ChatGPT UI AI Template - Horizon AI Boilerplate"
        />
        <meta property="og:type" content="product" />
        <meta
          property="og:url"
          content="https://horizon-ui.com/shadcn-nextjs-boilerplate"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/Bc0jZ2S/horizon-free-boilerplate-shadcn-image.png"
        />
        <meta
          property="og:description"
          content="Launch your SaaS startup within a few days with the first Shadcn UI NextJS boilerplate. Get started with Horizon AI Boilerplate today! Horizon AI Boilerplate is the first open source OpenAI ChatGPT AI Template made for Shadcn UI, NextJS and Tailwind CSS! Start creating outstanding Chat AI SaaS Apps faster."
        />
        <meta
          property="og:site_name"
          content="Live Preview - Free & Open-source Shadcn UI NextJS Boilerplate ChatGPT UI AI Template - Horizon AI Boilerplate"
        />
        <link
          rel="canonical"
          href="https://horizon-ui.com/shadcn-nextjs-boilerplate"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body id={'root'} className="loading bg-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SupabaseProvider>
            {/* @ts-ignore */}
            <main id="skip">{children}</main>
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
