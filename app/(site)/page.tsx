import Image from 'next/image';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { ButtonLink } from '@/components/buttons';
import { ProductCard } from '@/components/product-card';
import { HubsGrid } from '@/components/hubs-grid';
import { HOME_PAGE_TEXT, PRODUCTS } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative text-white text-center flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Container className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4">Global Leaders in Metal Trading</h1>
          <p className="max-w-3xl mx-auto text-xl font-semibold mb-8">Your trusted partner for ferrous and non-ferrous scrap metal solutions worldwide.</p>
          <ButtonLink href="/contact" className="px-8 py-3 text-lg">Contact Us</ButtonLink>
        </Container>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-8 h-14 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </Section>

      {/* About Us Teaser */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold font-heading text-center mb-12">About Vashudevan Met Global</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-8">
            <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about_home.jpg"
                alt="Vashudevan Met Global office interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-gray-700 leading-relaxed text-justify">{HOME_PAGE_TEXT.aboutSection}</p>
            </div>
          </div>
          <div className="text-center">
            <ButtonLink href="/about" variant="outline">Learn More About Us</ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Top Products Section */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold font-heading text-center mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map(product => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <ButtonLink href="/products" variant="secondary">View All Products</ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Trading Hubs Section */}
      <Section className="bg-primary-dark">
        <Container>
          <h2 className="text-3xl font-bold font-heading text-center text-white mb-8">Our Global Trading Hubs</h2>
          <HubsGrid />
        </Container>
      </Section>

      
    </>
  );
}
