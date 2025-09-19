import { Metadata } from 'next';
import { BUSINESS_INFO } from './constants';

const siteUrl = 'https://www.vashudevan.com'; // Replace with your actual domain

export function generateSeoMetadata({
  title,
  description,
  pathname,
}: { 
  title: string;
  description: string;
  pathname: string;
}): Metadata {
  const url = `${siteUrl}${pathname}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS_INFO.name,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/og-image.jpg`, // TODO: Create and add an OG image
          width: 1200,
          height: 630,
          alt: `${BUSINESS_INFO.name} - Global Metal Traders`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/images/og-image.jpg`], // TODO: Create and add a Twitter image
    },
    // TODO: Add more metadata like icons, manifest, etc.
  };
}

export const jsonLd = {
  website: `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "${BUSINESS_INFO.name}",
        "url": "${siteUrl}"
      }
    </script>
  `,
  organization: `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "${BUSINESS_INFO.name}",
        "url": "${siteUrl}",
        "logo": "${siteUrl}/images/logo.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "${BUSINESS_INFO.phone}",
          "contactType": "customer service"
        }
      }
    </script>
  `,
  localBusiness: `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "${BUSINESS_INFO.name}",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "OFFICE NO. 501, 5TH FLOOR, WESTERN BUSINESS PARK, VESU",
          "addressLocality": "SURAT",
          "addressRegion": "GUJARAT",
          "postalCode": "395007",
          "addressCountry": "IN"
        },
        "telephone": "${BUSINESS_INFO.phone}",
        "email": "${BUSINESS_INFO.emails[0]}",
        "url": "${siteUrl}",
        "openingHours": "Mo-Sa 10:00-18:00"
      }
    </script>
  `,
  breadcrumb: (items: { name: string; href: string }[]) => `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          ${items.map((item, index) => `{
            "@type": "ListItem",
            "position": ${index + 1},
            "name": "${item.name}",
            "item": "${siteUrl}${item.href}"
          }`).join(',')}
        ]
      }
    </script>
  `,
};
