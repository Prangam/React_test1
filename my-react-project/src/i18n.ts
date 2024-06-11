import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Layout & Style": "Layout & Style",
      "Move Shape": "Move Shape",
      "Move Position": "Move Position"
    }
  },
  th: {
    translation: {
      "Layout & Style": "การจัดการหน้าเว็บ",
      "Move Shape": "เปลี่ยนตำแหน่ง",
      "Move Position": "เลื่อนรูปแบบ"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
