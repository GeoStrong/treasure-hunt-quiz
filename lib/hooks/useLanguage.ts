'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { english } from '../language/en';
import { estonian } from '../language/et';
import { russian } from '../language/ru';
import { georgian } from '../language/ka';

const useLanguage = () => {
  const [activeLanguage, setActiveLanguage] = useState(english);
  const { language } = useAppSelector((state) => state.language);

  useEffect(() => {
    if (language === 'en') {
      setActiveLanguage(english);
    } else if (language === 'et') {
      setActiveLanguage(estonian);
    } else if (language === 'ru') {
      setActiveLanguage(russian);
    } else if (language === 'ka') {
      setActiveLanguage(georgian);
    } else {
      setActiveLanguage(english);
    }
  }, [language]);

  return activeLanguage;
};

export default useLanguage;
