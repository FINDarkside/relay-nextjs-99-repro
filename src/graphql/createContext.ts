import { NextApiRequest, NextApiResponse } from 'next';

// Support both 'fi' and 'fi-FI' as language codes so that other API clients
// can use fancy language identifiers.
const getAcceptedLanguages = (
  acceptLanguagesHeader: string | string[] = 'en'
) => {
  const locales = Array.isArray(acceptLanguagesHeader)
    ? acceptLanguagesHeader
    : acceptLanguagesHeader.split(',');

  // return two first chars of locale
  return locales.map((locale) => getShortLocale(locale));
};

export default async function createContext(
  req: NextApiRequest | null | undefined,
  res: NextApiResponse | null | undefined,
  // Note: This is only available during SSR, use accept-languages language for api requests
  locale?: string
) {
  let ssrLanguages = locale && (locale !== 'en' ? [locale, 'en'] : [locale]);

  const acceptedLanguages = getAcceptedLanguages(
    req?.headers['accept-languages'] || ssrLanguages || ['en', 'fi', 'sv', 'da']
  );

  return {
    acceptedLanguages,
    req,
  };
}

function getShortLocale(locale: string) {
  return locale.split('-')[0];
}

export type GraphqlContext = Awaited<ReturnType<typeof createContext>>;
