import React from "react";

import LanguageProvider, { useLanguage } from "./components/language";

const content = {
  en: {
   title: "Welcome to Koppee Café ",
    description: "We serve freshly brewed coffee and homemade pastries.",
   },
  fr: {
    title: "Bienvenue chez Koppee Café ",
    description: "Nous servons du café fraîchement préparé et des pâtisseries maison.",
     },
  ar: {
    title: "مرحباً بكم في مقهى كوبي ",
    description: "نقدم قهوة طازجة ومخبوزات منزلية.",
     },
};
function Content(){
   const { language, toggleLanguage } = useLanguage();
 
   return(
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
  <h1 className="text-4xl font-bold mb-8 text-gray-800">Language Translation</h1>

  <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
    <h2 className="text-2xl font-semibold mb-4 text-gray-700">{content[language].title}</h2>
    <p className="text-gray-500 mb-6">{content[language].description}</p>

    <div className="flex justify-center space-x-4">
      <button
        onClick={() => toggleLanguage("en")}
        className="px-5 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition-colors duration-300"
      >
        English
      </button>
      <button
        onClick={() => toggleLanguage("fr")}
        className="px-5 py-2 bg-green-600 text-white font-medium rounded-full shadow hover:bg-green-700 transition-colors duration-300"
      >
        Français
      </button>
      <button
        onClick={() => toggleLanguage("ar")}
        className="px-5 py-2 bg-yellow-400 text-black font-medium rounded-full shadow hover:bg-yellow-500 transition-colors duration-300"
      >
        Arabic
      </button>
    </div>
  </div>
</div>

  );
}
export default function App() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}