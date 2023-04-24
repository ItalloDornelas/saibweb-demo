import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <base href="/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#9f00a7" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#8e44ad" />

        <meta charSet="utf-8" />
        <meta name="SaibRetest" content="Saib retest" />
        <meta name="theme-color" content="#8e44ad" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
