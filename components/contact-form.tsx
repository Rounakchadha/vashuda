'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleContactForm } from '@/lib/actions';
import { contactFormSchema, ContactFormState } from '@/lib/validations';
import { Button } from './buttons';
import { Input, TextArea } from './inputs';

function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button type="submit" disabled={pending}>{pending ? 'Submitting...' : 'Send Message'}</Button>;
}

export function ContactForm() {
  const initialState: ContactFormState = { message: '', errors: {}, isSuccess: false };
  const [state, dispatch] = useFormState(handleContactForm, initialState);

  if (state.isSuccess) {
    return (
      <div className="p-4 bg-green-100 text-green-800 rounded-md">
        <h3 className="font-bold">Thank you!</h3>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={dispatch} className="space-y-4">
      <Input
        name="name"
        placeholder="Your Name"
        aria-label="Name"
        error={state.errors?.name?.join(', ')}
      />
      <Input
        name="email"
        type="email"
        placeholder="Your Email"
        aria-label="Email"
        error={state.errors?.email?.join(', ')}
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
        error={state.errors?.message?.join(', ')}
      />
      <SubmitButton />
      {state.message && !state.isSuccess && (
        <p className="text-red-500 text-sm mt-2">{state.message}</p>
      )}
    </form>
  );
}
