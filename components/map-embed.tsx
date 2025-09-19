import { BUSINESS_INFO } from '@/lib/constants';

export function MapEmbed() {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={BUSINESS_INFO.mapLink}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${BUSINESS_INFO.name} Location`}
      ></iframe>
    </div>
  );
}
