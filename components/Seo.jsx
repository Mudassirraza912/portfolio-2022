import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Seo(props) {
  const router = useRouter();
  const meta = {
    title: 'Portfolio --Mudassir Raza',
    site_name: 'Mudassir Raza portfolio',
    description:
      'I am a highly motivated MERN stack developer with 3 years of experience',
    url: 'https://mudassirraza.com',
    image:
      'https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.6435-9/49446044_2229505403984172_60802795533416[…]Qbe6KebdRR7atpxoLDcNHuHjyXABnWLbc5kSyZwzg&oe=621845E1',
    type: 'website',
    robots: 'follow, index',
    ...props,
  };

  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.site_name}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.site_name} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@th_clarence' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Mudassir Raza'
          />
        </>
      )}
    </Head>
  );
}
