import { BUSINESS_INFO } from '@/lib/constants';

interface MapEmbedProps {
  className?: string;
}

export function MapEmbed({ className = "" }: MapEmbedProps) {
  return (
    <iframe
      src={BUSINESS_INFO.mapLink}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={`${BUSINESS_INFO.name} Location`}
      className={`w-full h-full ${className}`}
    />
  );
}