export type LanguageType = 'en' | 'et' | 'ru';

export const defaultLanguage =
  typeof window !== 'undefined' && localStorage.getItem('language')
    ? (localStorage.getItem('language') as LanguageType)
    : 'en';
