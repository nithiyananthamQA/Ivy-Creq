import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOHeadProps {
  title: string;
  description?: string;
  noindex?: boolean;
}

const SITE_NAME = 'Ivy Crew';
const SITE_URL = 'https://www.ivycrew.co.in';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let meta = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

export default function SEOHead({ title, description, noindex }: SEOHeadProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;
    document.title = fullTitle;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:url', url);
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
    }

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description, noindex, pathname]);

  return null;
}
