export const SITE_CONFIG = {
  domain: 'https://www.djlabo.es',

  about: {
    name: 'DjLabo',
    email: 'contacto@djlabo.es',
    phone: '+34 647 94 26 96',
    address: 'Madrid, España',
  },

  social: {
    twitter: '@djlabo',
    instagram: 'https://www.instagram.com/djlabo',
    facebook: 'https://www.facebook.com/djlabo',
    tiktok: 'https://www.tiktok.com/@djlabo',
    soundcloud: 'https://soundcloud.com/user-186505129',
  },

  seo: {
    defaultTitle:
      'DjLabo | DJ Profesional para Eventos, Clubes y Fiestas Privadas',
    defaultDescription:
      'Reserva a DjLabo para tu próximo evento. Especialista en crear experiencias musicales inolvidables con los mejores sets de música electrónica y comercial. ¡Lleva tu fiesta al siguiente nivel!',
    defaultImage: '/images/portada.jpeg',
    defaultImageAlt: 'Foto de Dj Labo',
  },
} as const;

// Funciones de utilidad
export const getSiteUrl = (path: string = '') => {
  let normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (normalizedPath.length > 1 && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }
  return `${SITE_CONFIG.domain}${normalizedPath}`;
};

export const getCanonicalUrl = (pathname: string) => {
  return getSiteUrl(pathname);
};
