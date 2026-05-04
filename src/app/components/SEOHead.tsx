import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description?: string;
}

const SITE_NAME = 'Ivy Crew';

export default function SEOHead({ title, description }: SEOHeadProps) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description]);

  return null;
}
