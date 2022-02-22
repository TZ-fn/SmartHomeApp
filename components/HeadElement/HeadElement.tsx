import Head from 'next/head';

export default function HeadElement(): JSX.Element {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>Smart Home Dashboard</title>
      {/* <link rel='canonical' href='' /> */}
      <meta name='description' content='Dashboard for a smart home app' />
      <meta name='author' content='Tomasz Ziółkowski' />
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <link rel='icon' href='/reshot-icon-home-UKNYQCE6B2.svg' type='image/svg+xml' />
      <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      <link rel='manifest' href='/manifest.webmanifest' />
    </Head>
  );
}
