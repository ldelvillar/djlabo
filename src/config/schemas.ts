import { SITE_CONFIG, getSiteUrl } from '@/config/site';

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export const getDjLaboSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'DjLabo',
  url: SITE_CONFIG.domain,
  logo: getSiteUrl('/images/brand/logo.png'),
  description: SITE_CONFIG.seo.defaultDescription,
  genre: ['Electronic', 'House', 'Open Format'],
  email: SITE_CONFIG.about.email,
  telephone: SITE_CONFIG.about.phone,
  sameAs: [
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.tiktok,
    SITE_CONFIG.social.soundcloud,
    //SITE_CONFIG.social.spotify,
  ],
});

export const getWebPageSchema = (
  title: string,
  description: string,
  pathname: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description: description,
  url: getSiteUrl(pathname),
  isPartOf: {
    '@type': 'WebSite',
    name: SITE_CONFIG.about.name,
    url: SITE_CONFIG.domain,
  },
  author: {
    '@type': 'Organization',
    name: 'Lucas del Villar',
  },
});

export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_CONFIG.about.name,
  description: SITE_CONFIG.seo.defaultDescription,
  url: SITE_CONFIG.domain,
  publisher: {
    '@type': 'Organization',
    name: 'Lucas del Villar',
    logo: getSiteUrl('/images/brand/logo.png'),
  },
});

export const getEventSchema = (
  eventName: string,
  startDate: string,
  locationName: string,
  city: string,
  description: string,
  imageUrl?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'MusicEvent',
  name: eventName,
  startDate: startDate,
  location: {
    '@type': 'Place',
    name: locationName,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressCountry: 'ES',
    },
  },
  description: description,
  image: imageUrl
    ? imageUrl.startsWith('http')
      ? imageUrl
      : getSiteUrl(imageUrl)
    : undefined,
  performer: {
    '@type': 'MusicGroup',
    name: 'DjLabo',
  },
  offers: {
    '@type': 'Offer',
    url: getSiteUrl('/booking'),
    availability: 'https://schema.org/InStock',
  },
});

export const getDjServiceSchema = (
  serviceName: string, // Ej: "DJ para Bodas", "Set de Club"
  description: string,
  price?: number
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@type': 'MusicGroup',
    name: 'DjLabo',
    url: SITE_CONFIG.domain,
  },
  ...(price && {
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'EUR',
    },
  }),
});

export const getFAQSchema = (faqs: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const getCombinedSchema = (pageSchema: object) => ({
  '@context': 'https://schema.org',
  '@graph': [
    getDjLaboSchema(),
    {
      '@type': 'WebSite',
      name: 'DjLabo Official',
      url: SITE_CONFIG.domain,
    },
    pageSchema,
  ],
});

export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.href && { item: getSiteUrl(item.href) }),
  })),
});
