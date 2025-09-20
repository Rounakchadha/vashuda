import { Metadata } from 'next';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { HubsGrid } from '@/components/hubs-grid';
import { generateSeoMetadata, jsonLdObjects } from '@/lib/seo';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Trading Hubs', href: '/trading-hubs' },
];

export const metadata: Metadata = {
  ...generateSeoMetadata({
    title: 'Trading Hubs',
    description: 'Our global network of trading hubs spans across the Americas, Europe, Asia, Africa, and the Middle East.',
    pathname: '/trading-hubs',
  }),
  scripts: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLdObjects.breadcrumb(breadcrumbItems)),
    },
  ],
};

export default function TradingHubsPage() {
  return (
    <>
      <Section className="bg-primary-dark">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl font-bold font-heading mt-4 mb-8 text-white">Our Global Trading Hubs</h1>
          <HubsGrid />
        </Container>
      </Section>
    </>
  );
}
