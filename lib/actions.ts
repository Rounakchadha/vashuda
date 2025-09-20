'use server';

import { contactFormSchema, ContactFormState } from '@/lib/validations';

export async function handleContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    };
  }

  // TODO: Implement actual email sending logic here (e.g., using Resend, Nodemailer)
  console.log('Contact form submitted:', validatedFields.data);

  // For now, we'll just simulate a success response.
  return {
    message: 'Your message has been sent successfully! We will get back to you shortly.',
    isSuccess: true,
  };
}
