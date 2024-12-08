import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [language, setlanguage] = useState("ar") // Ensure it's initialized as an empty array

  // Other context provider logic...

  return (
    <LanguageContext.Provider value={{ language, setlanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguageContext = () => {
  return useContext(LanguageContext)
}

export { LanguageProvider, useLanguageContext }