import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './app/App'
import './i18n'
import './styles.css'
import { useEffect } from 'react'
import i18n from './i18n'

// 路由切换时自动更改语言
function LanguageRouter() {
  const location = useLocation()
  
  useEffect(() => {
    if (location.pathname.startsWith('/en')) {
      if (i18n.language !== 'en') {
        i18n.changeLanguage('en')
      }
    } else {
      if (i18n.language !== 'zh') {
        i18n.changeLanguage('zh')
      }
    }
  }, [location])
  
  return <App />
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root was not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename="/vibe-typing">
      <Routes>
        <Route path="/" element={<LanguageRouter />} />
        <Route path="/en" element={<LanguageRouter />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
