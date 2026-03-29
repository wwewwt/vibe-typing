import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import zh from './locales/zh.json'

const resources = {
  en: { translation: en },
  zh: { translation: zh }
}

// 检测浏览器语言
const getBrowserLanguage = (): string => {
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('zh')) return 'zh'
  return 'en'
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getBrowserLanguage(), // 默认语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
