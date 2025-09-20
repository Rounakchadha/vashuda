import { Metadata } from 'next';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { generateSeoMetadata, jsonLdObjects } from '@/lib/seo';
import { ABOUT_PAGE_TEXT } from '@/lib/constants';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
];

export const metadata: Metadata = {
  ...generateSeoMetadata({
    title: 'About Us | Vashudevan Met Global LLP',
    description: 'Learn about the history, mission, and values of Vashudevan Met Global LLP, a leading name in the global metal scrap trade.',
    pathname: '/about',
  }),
  scripts: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLdObjects.breadcrumb(breadcrumbItems)),
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
          <article className="prose lg:prose-xl mx-auto mt-8">
            <h1>Who We Are</h1>
            
            <h2>Our History</h2>
            <p>{ABOUT_PAGE_TEXT.history}</p>

            <h2>Our Core Values</h2>
            <p>{ABOUT_PAGE_TEXT.coreValues}</p>
            <ul>
              {ABOUT_PAGE_TEXT.valuesList.map(value => (
                <li key={value.title}><strong>{value.title}</strong> – {value.text}</li>
              ))}
            </ul>

            <h2>Our Mission: Shaping a Responsible and Sustainable Future</h2>
            <p>{ABOUT_PAGE_TEXT.mission}</p>

            <h2>Our Impact</h2>
            <p>{ABOUT_PAGE_TEXT.impact}</p>

            <h3>{ABOUT_PAGE_TEXT.whyRecyclingMatters.title}</h3>
            {ABOUT_PAGE_TEXT.whyRecyclingMatters.points.map(point => (
              <div key={point.title}>
                <h4>{point.title}</h4>
                <p>{point.text}</p>
              </div>
            ))}
            <p><em>{ABOUT_PAGE_TEXT.whyRecyclingMatters.conclusion}</em></p>

          </article>
        </Container>
      </Section>
    </>
  );
}
