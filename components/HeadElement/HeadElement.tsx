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
    </Head>
  );
}
