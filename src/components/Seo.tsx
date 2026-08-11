import { Helmet } from "react-helmet-async";
import { SITE_URL, absoluteOgImage, routeSeo } from "@/config/seo";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Route-relative OG image path, e.g. "/og/og-home.jpg". */
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  type?: string;
  noindex?: boolean;
}

const Seo = ({
  title,
  description,
  path,
  image = routeSeo.home.image,
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt,
  type = "website",
  noindex,
}: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : absoluteOgImage(image);
  const alt = imageAlt ?? title;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Harshad Harishchandra Pakhale" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={alt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={alt} />
    </Helmet>
  );
};

export default Seo;
