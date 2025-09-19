import { Metadata } from 'next';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactForm } from '@/components/contact-form';
import { MapEmbed } from '@/components/map-embed';
import { generateSeoMetadata, jsonLd } from '@/lib/seo';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Contact Us',
  description: `Get in touch with Vashudevan Met Global LLP. Find our address, phone number, email, and office hours. We are located at ${BUSINESS_INFO.address}.`,
  pathname: '/contact',
});

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Contact Us', href: '/contact' },
];

export default function ContactPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: jsonLd.breadcrumb(breadcrumbItems) }} />
      <div dangerouslySetInnerHTML={{ __html: jsonLd.localBusiness }} />
      <Section>
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl font-bold font-heading mt-4 mb-8">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">Have questions or need assistance? Get in touch with us via the form below or visit our office.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Contact Info & Map */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">Our Office</h2>
                <address className="not-italic space-y-2 text-gray-700">
                  <p>{BUSINESS_INFO.name}</p>
                  <p>{BUSINESS_INFO.address}</p>
                  <p><strong>Phone:</strong> {BUSINESS_INFO.phone}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${BUSINESS_INFO.emails[0]}`} className="text-accent-green hover:underline">{BUSINESS_INFO.emails[0]}</a></p>
                  <p><strong>Hours:</strong> {BUSINESS_INFO.openingHours}</p>
                </address>
              </div>
              <div className="h-80 rounded-lg overflow-hidden">
                <MapEmbed />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
