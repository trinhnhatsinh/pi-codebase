import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  noIndex?: boolean;
  schema?: object; // Dành cho schema markup (JSON-LD)
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  url,
  noIndex = false,
  schema,
  canonicalUrl,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Noindex/Nofollow */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Schema Markup */}
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
    </Head>
  );
};

export default SEO;
