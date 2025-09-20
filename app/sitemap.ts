import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.vashudevan.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.vashudevan.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.vashudevan.com/products',
      lastModified: new Date(),
    },
    {
      url: 'https://www.vashudevan.com/trading-hubs',
      lastModified: new Date(),
    },
    {
      url: 'https://www.vashudevan.com/contact',
      lastModified: new Date(),
    },
  ];
}
