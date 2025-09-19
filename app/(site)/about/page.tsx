import { Metadata } from 'next';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { generateSeoMetadata, jsonLd } from '@/lib/seo';
import { ABOUT_PAGE_TEXT } from '@/lib/constants';

export const metadata: Metadata = generateSeoMetadata({
  title: 'About Us | Vashudevan Met Global LLP',
  description: 'Learn about the history, mission, and values of Vashudevan Met Global LLP, a leading name in the global metal scrap trade.',
  pathname: '/about',
});

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
];

export default function AboutPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: jsonLd.breadcrumb(breadcrumbItems) }} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <Container>
            <Breadcrumbs items={breadcrumbItems} className="text-white/70 [&_a:hover]:text-white" />
            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              Who We Are
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl">
              Leading the global metal scrap trade with integrity, innovation, and sustainability at our core.
            </p>
          </Container>
        </div>
      </section>

      {/* Main Content */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* Our History */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Our History
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {ABOUT_PAGE_TEXT.history}
              </p>
            </div>

            {/* Core Values */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {ABOUT_PAGE_TEXT.coreValues}
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {ABOUT_PAGE_TEXT.valuesList.map((value, index) => (
                  <div 
                    key={value.title} 
                    className="bg-gray-50 rounded-lg p-6 border-l-4 border-accent-green"
                  >
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-700">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="mb-16 bg-accent-green/10 rounded-xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Our Mission: Shaping a Responsible and Sustainable Future
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {ABOUT_PAGE_TEXT.mission}
              </p>
            </div>

            {/* Our Impact */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Our Impact
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {ABOUT_PAGE_TEXT.impact}
              </p>
            </div>

            {/* Why Recycling Matters */}
            <div className="bg-gray-50 rounded-xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-8">
                {ABOUT_PAGE_TEXT.whyRecyclingMatters.title}
              </h3>
              
              <div className="space-y-8">
                {ABOUT_PAGE_TEXT.whyRecyclingMatters.points.map((point, index) => (
                  <div key={point.title} className="border-l-2 border-accent-green pl-6">
                    <h4 className="text-xl font-semibold text-primary-dark mb-2">
                      {point.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-700 italic text-center">
                  {ABOUT_PAGE_TEXT.whyRecyclingMatters.conclusion}
                </p>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </>
  );
}
