import { createContext,useContext,useState } from 'react';
const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
const[language,setlanguage]=useState("en");
const toggleLanguage=(languagess)=>{
    setlanguage(languagess);

};
return (
  <LanguageContext.Provider value={{language,toggleLanguage}}>
    {children}
    </LanguageContext.Provider>
);


};
export const useLanguage = () => useContext(LanguageContext);
