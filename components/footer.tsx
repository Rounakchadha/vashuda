import Link from 'next/link';
import { Container } from '@/components/container';
import { BUSINESS_INFO, FOOTER_INFO, NAVIGATION_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Business Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl font-heading">{BUSINESS_INFO.name}</h3>
            <p className="text-gray-300">{FOOTER_INFO.description}</p>
            <div className="space-y-1 text-gray-300">
              <p>{BUSINESS_INFO.address}</p>
              <p>Phone: {BUSINESS_INFO.phone}</p>
              <p>Email: {BUSINESS_INFO.emails[0]}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl font-heading">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl font-heading">Follow Us</h3>
            <div className="flex space-x-4">
              {FOOTER_INFO.socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <span className="sr-only">{social.name}</span>
                  {social.name === 'Instagram' && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.92.333 4.145.643c-.795.316-1.46.72-2.125 1.385C1.36 2.72 1.004 3.385.684 4.18c-.31.775-.51 1.63-.57 2.908C.014 8.333 0 8.74 0 12s.014 8.333.072 9.61c.06 1.278.261 2.133.571 2.908.316.795.72 1.46 1.385 2.125.665.665 1.33.993 2.125 1.385.31.775.51 1.63.57 2.908C8.333 23.986 8.74 24 12 24s3.26-.014 4.54-.072c1.278-.06 2.133-.261 2.908-.571.795-.316 1.46-.72 2.125-1.385.665-.665.993-1.33 1.385-2.125.31-.775.51-1.63.57-2.908.058-1.278.072-1.683.072-4.94s-.014-3.26-.072-4.54c-.06-1.278-.261-2.133-.571-2.908-.316-.795-.72-1.46-1.385-2.125C21.28 1.36 20.615 1.004 19.82 0.684c-.775-.31-1.63-.51-2.908-.57C15.667.014 15.26 0 12 0zm0 2.16c3.2.004 3.58.016 4.85.074 1.17.055 1.8.249 2.22.41.42.16.72.35 1.03.66.31.31.5.61.66 1.03.16.42.35 1.05.41 2.22.058 1.27.07 1.65.074 4.85s-.016 3.58-.074 4.85c-.055 1.17-.249 1.8-.41 2.22-.16.42-.35.72-1.03.66-.31.31-.61.5-.99.66-.42.16-1.05.35-2.22.41-1.27.058-1.65.07-4.85.074s-3.58-.016-4.85-.074c-1.17-.055-1.8-.249-2.22-.41-.42-.16-.72-.35-1.03-.66-.31-.31-.5-.61-.66-.99-.16-.42-.35-1.05-.41-2.22-.058-1.27-.07-1.65-.074-4.85s.016-3.58.074-4.85c.055-1.17.249-1.8.41-2.22.16-.42.35-.72.66-1.03.31-.31.61-.5.99-.66.42-.16 1.05-.35 2.22-.41 1.27-.058 1.65-.07 4.85-.074zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" />
                    </svg>
                  )}
                  {social.name === 'LinkedIn' && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {social.name === 'Twitter' && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.814L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
