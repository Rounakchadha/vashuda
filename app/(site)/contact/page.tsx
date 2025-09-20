import { Metadata } from 'next';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactForm } from '@/components/contact-form';
import { MapEmbed } from '@/components/map-embed';
import { generateSeoMetadata, jsonLdObjects } from '@/lib/seo';
import { BUSINESS_INFO } from '@/lib/constants';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Contact Us', href: '/contact' },
];

export const metadata: Metadata = generateSeoMetadata({
  title: 'Contact Us | Vashudevan Met Global LLP',
  description: `Get in touch with Vashudevan Met Global LLP. Find our address, phone number, email, and office hours. We are located at ${BUSINESS_INFO.address}.`,
  pathname: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdObjects.breadcrumb(breadcrumbItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdObjects.localBusiness) }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <Container>
            <Breadcrumbs items={breadcrumbItems} className="text-white/70 [&_a:hover]:text-white" />
            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              Contact Us
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl">
              Have questions or need assistance? Get in touch with us via the form below or visit our office.
            </p>
          </Container>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-primary-dark">
                  Get In Touch
                </h2>
                
                <div className="bg-gray-50 rounded-xl p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-3">
                      Office Address
                    </h3>
                    <address className="not-italic text-gray-700 text-lg leading-relaxed">
                      <p className="font-semibold text-xl mb-2">{BUSINESS_INFO.name}</p>
                      <p className="mb-4">{BUSINESS_INFO.address}</p>
                    </address>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold text-primary-dark mb-3">
                      Contact Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="font-medium text-gray-900">Phone:</span>
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="text-accent-green hover:underline text-lg">
                          {BUSINESS_INFO.phone}
                        </a>
                      </div>
                      
                      {BUSINESS_INFO.emails.map((email, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="font-medium text-gray-900">
                            Email {BUSINESS_INFO.emails.length > 1 ? `${index + 1}:` : ':'}
                          </span>
                          <a href={`mailto:${email}`} className="text-accent-green hover:underline break-all text-lg">
                            {email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold text-primary-dark mb-3">
                      Office Hours
                    </h3>
                    <p className="text-gray-700 text-lg">{BUSINESS_INFO.openingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-primary-dark">
                Send Us a Message
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Find Us Section - Horizontal Map Layout */}
      <section className="bg-gray-900 py-16 md:py-24">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
              Find Us
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Vashudevan Met Global LLP - {BUSINESS_INFO.address}
            </p>
          </div>

          {/* Horizontal Rectangle Map */}
          <div className="mb-12">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={BUSINESS_INFO.mapLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${BUSINESS_INFO.name} Location`}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Bottom Info */}
          <div className="text-center">
            <p className="text-gray-300 mb-8 text-lg">
              <strong>Address:</strong> {BUSINESS_INFO.address}
            </p>
            <p className="text-gray-400 mb-2">
              Click on the map to get directions or view in Google Maps
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
              <a 
                href="https://maps.google.com/?q=Western+Business+Park+Surat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
              >
                View in Google Maps
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}