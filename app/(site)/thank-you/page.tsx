import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { ButtonLink } from '@/components/buttons';

export default function ThankYouPage() {
  return (
    <Section className="text-center">
      <Container>
        <h1 className="text-4xl font-bold font-heading mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-8">Your message has been sent. We will get back to you shortly.</p>
        <ButtonLink href="/">Return to Home</ButtonLink>
      </Container>
    </Section>
  );
}
