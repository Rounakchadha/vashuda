import { Metadata } from 'next';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ProductCard } from '@/components/product-card';
import { generateSeoMetadata, jsonLdObjects } from '@/lib/seo';
import { PRODUCTS } from '@/lib/constants';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
];

export const metadata: Metadata = generateSeoMetadata({
  title: 'Our Products',
  description: `Explore our wide range of ferrous and non-ferrous metal scrap products, including ${PRODUCTS.slice(0, 3).map(p => p.name).join(', ')}, and more.`,
  pathname: '/products',
});

export default function ProductsPage() {
  const filteredProducts = PRODUCTS.filter(product => product.name !== 'HMS-1 & 2');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdObjects.breadcrumb(breadcrumbItems)) }}
      />
      <Section>
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl font-bold font-heading mt-4 mb-8">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
