'use client';

import { Button } from './buttons';
import { Input, TextArea } from './inputs';

export function ContactForm() {
  return (
    <form action="/thank-you" method="POST" className="space-y-4">
      <Input
        name="name"
        placeholder="Your Name"
        aria-label="Name"
        required
      />
      <Input
        name="email"
        type="email"
        placeholder="Your Email"
        aria-label="Email"
        required
      />
      <Input
        name="phone"
        placeholder="Your Phone (Optional)"
        aria-label="Phone"
      />
      <TextArea
        name="message"
        placeholder="Your Message"
        rows={5}
        aria-label="Message"
        required
      />
      <Button type="submit">Send Message</Button>
    </form>
  );
}
