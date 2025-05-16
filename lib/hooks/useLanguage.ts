import { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { english } from '../language/en';
import { estonian } from '../language/et';

const useLanguage = () => {
  const [activeLanguage, setActiveLanguage] = useState(english);
  const { language } = useAppSelector((state) => state.language);

  useEffect(() => {
    if (language === 'en') {
      setActiveLanguage(english);
    } else if (language === 'et') {
      setActiveLanguage(estonian);
    }
  }, [language]);

  return activeLanguage;
};

export default useLanguage;
