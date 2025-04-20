import React, { useState } from "react";
import './style.css';

// Languages array
const languages = [
  { no: "0", name: "Auto", native: "Detect", code: "auto" },
  { no: "1", name: "Afrikaans", native: "Afrikaans", code: "af" },
  { no: "2", name: "Albanian", native: "Shqip", code: "sq" },
  { no: "3", name: "Arabic", native: "عربي", code: "ar" },
  { no: "4", name: "Armenian", native: "Հայերէն", code: "hy" },
  { no: "5", name: "Azerbaijani", native: "آذربایجان دیلی", code: "az" },
  { no: "6", name: "Basque", native: "Euskara", code: "eu" },
  { no: "7", name: "Belarusian", native: "Беларуская", code: "be" },
  { no: "8", name: "Bulgarian", native: "Български", code: "bg" },
  { no: "9", name: "Catalan", native: "Català", code: "ca" },
  { no: "10", name: "Chinese (Simplified)", native: "中文简体", code: "zh-CN" },
  {
    no: "11",
    name: "Chinese (Traditional)",
    native: "中文繁體",
    code: "zh-TW",
  },
  { no: "12", name: "Croatian", native: "Hrvatski", code: "hr" },
  { no: "13", name: "Czech", native: "Čeština", code: "cs" },
  { no: "14", name: "Danish", native: "Dansk", code: "da" },
  { no: "15", name: "Dutch", native: "Nederlands", code: "nl" },
  { no: "16", name: "English", native: "English", code: "en" },
  { no: "17", name: "Estonian", native: "Eesti keel", code: "et" },
  { no: "18", name: "Filipino", native: "Filipino", code: "tl" },
  { no: "19", name: "Finnish", native: "Suomi", code: "fi" },
  { no: "20", name: "French", native: "Français", code: "fr" },
  { no: "21", name: "Galician", native: "Galego", code: "gl" },
  { no: "22", name: "Georgian", native: "ქართული", code: "ka" },
  { no: "23", name: "German", native: "Deutsch", code: "de" },
  { no: "24", name: "Greek", native: "Ελληνικά", code: "el" },
  { no: "25", name: "Haitian Creole", native: "Kreyòl ayisyen", code: "ht" },
  { no: "26", name: "Hebrew", native: "עברית", code: "iw" },
  { no: "27", name: "Hindi", native: "हिन्दी", code: "hi" },
  { no: "28", name: "Hungarian", native: "Magyar", code: "hu" },
  { no: "29", name: "Icelandic", native: "Íslenska", code: "is" },
  { no: "30", name: "Indonesian", native: "Bahasa Indonesia", code: "id" },
  { no: "31", name: "Irish", native: "Gaeilge", code: "ga" },
  { no: "32", name: "Italian", native: "Italiano", code: "it" },
  { no: "33", name: "Japanese", native: "日本語", code: "ja" },
  { no: "34", name: "Korean", native: "한국어", code: "ko" },
  { no: "35", name: "Latvian", native: "Latviešu", code: "lv" },
  { no: "36", name: "Lithuanian", native: "Lietuvių kalba", code: "lt" },
  { no: "37", name: "Macedonian", native: "Македонски", code: "mk" },
  { no: "38", name: "Malay", native: "Malay", code: "ms" },
  { no: "39", name: "Maltese", native: "Malti", code: "mt" },
  { no: "40", name: "Norwegian", native: "Norsk", code: "no" },
  { no: "41", name: "Persian", native: "فارسی", code: "fa" },
  { no: "42", name: "Polish", native: "Polski", code: "pl" },
  { no: "43", name: "Portuguese", native: "Português", code: "pt" },
  { no: "44", name: "Romanian", native: "Română", code: "ro" },
  { no: "45", name: "Russian", native: "Русский", code: "ru" },
  { no: "46", name: "Serbian", native: "Српски", code: "sr" },
  { no: "47", name: "Slovak", native: "Slovenčina", code: "sk" },
  { no: "48", name: "Slovenian", native: "Slovensko", code: "sl" },
  { no: "49", name: "Spanish", native: "Español", code: "es" },
  { no: "50", name: "Swahili", native: "Kiswahili", code: "sw" },
  { no: "51", name: "Swedish", native: "Svenska", code: "sv" },
  { no: "52", name: "Thai", native: "ไทย", code: "th" },
  { no: "53", name: "Turkish", native: "Türkçe", code: "tr" },
  { no: "54", name: "Ukrainian", native: "Українська", code: "uk" },
  { no: "55", name: "Urdu", native: "اردو", code: "ur" },
  { no: "56", name: "Vietnamese", native: "Tiếng Việt", code: "vi" },
  { no: "57", name: "Welsh", native: "Cymraeg", code: "cy" },
  { no: "58", name: "Yiddish", native: "ייִדיש", code: "yi" },
  { no: "59", name: "Amharic", native: "አማርኛ", code: "am" },
  { no: "60", name: "Bengali", native: "বাংলা", code: "bn" },
  { no: "61", name: "Bosnian", native: "Bosanski", code: "bs" },
  { no: "62", name: "Dzongkha", native: "རྫོང་ཁ", code: "dz" },
  { no: "63", name: "Esperanto", native: "Esperanto", code: "eo" },
  { no: "64", name: "Faroese", native: "Føroyskt", code: "fo" },
  { no: "65", name: "Gujarati", native: "ગુજરાતી", code: "gu" },
  { no: "66", name: "Hausa", native: "Hausa", code: "ha" },
  { no: "67", name: "Inuktitut", native: "ᐃᓄᒃᑎᑐᑦ", code: "iu" },
  { no: "68", name: "Kannada", native: "ಕನ್ನಡ", code: "kn" },
  { no: "69", name: "Kazakh", native: "Қазақ", code: "kk" },
  { no: "70", name: "Khmer", native: "ភាសាខ្មែរ", code: "km" },
  { no: "71", name: "Kurdish", native: "Kurdî", code: "ku" },
  { no: "72", name: "Lao", native: "ລາວ", code: "lo" },
  { no: "73", name: "Luxembourgish", native: "Lëtzebuergesch", code: "lb" },
  { no: "74", name: "Malayalam", native: "മലയാളം", code: "ml" },
  { no: "75", name: "Mongolian", native: "Монгол хэл", code: "mn" },
  { no: "76", name: "Nepali", native: "नेपाली", code: "ne" },
  { no: "77", name: "Pashto", native: "پښتو", code: "ps" },
  { no: "78", name: "Punjabi", native: "ਪੰਜਾਬੀ", code: "pa" },
  { no: "79", name: "Sinhala", native: "සිංහල", code: "si" },
  { no: "80", name: "Somali", native: "Soomaali", code: "so" },
  { no: "81", name: "Tajik", native: "Тоҷикӣ", code: "tg" },
  { no: "82", name: "Tamil", native: "தமிழ்", code: "ta" },
  { no: "83", name: "Telugu", native: "తెలుగు", code: "te" },
  { no: "84", name: "Tibetan", native: "བོད་སྐད", code: "bo" },
  { no: "85", name: "Uzbek", native: "Oʻzbek", code: "uz" },
  { no: "86", name: "Zulu", native: "isiZulu", code: "zu" }

];

const TranslatePage = () => {
  const [text, setText] = useState("");
  const [inputLanguage, setInputLanguage] = useState("en");
  const [outputLanguage, setOutputLanguage] = useState("es");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    if (!text.trim()) {
      setError("Please enter the text for translation");
      return;
    }

    setLoading(true);
    setError("");
    setTranslatedText("");

    try {
      const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURIComponent(
        text
      )}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Translation API request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      setTranslatedText(data[0].map((item) => item[0]).join(""));
    } catch (error) {
      setError("Failed to translate. Please try again.");
      console.error("Translation error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText(""); 
    setTranslatedText(""); 
    setError(""); 
  };

  return (
    <div className="min-h-screen bg-[hsl(240,10%,3.9%)] text-white p-4 md:p-10">
      <div className="max-w-xl mx-auto animate-fade-in">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 text-blue-400 transform transition-all duration-500 hover:scale-105">
          Text Translator
        </h1>
        
        {/* Input Text */}
        <div className="mb-6">
          <label htmlFor="text-input" className="block mb-2 text-sm font-medium text-gray-300">
            Enter text to translate:
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-13 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300 placeholder-gray-400 resize-none"
            placeholder="Type your text here..."
          />
        </div>
        
        {/* Language Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="animate-fade-in-up delay-100">
            <label htmlFor="input-language" className="block mb-2 text-sm font-medium text-gray-300">
              Input Language:
            </label>
            <select
              id="input-language"
              value={inputLanguage}
              onChange={(e) => setInputLanguage(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 text-white transition-all duration-300 hover:bg-gray-700 cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className="animate-fade-in-up delay-150">
            <label htmlFor="output-language" className="block mb-2 text-sm font-medium text-gray-300">
              Output Language:
            </label>
            <select
              id="output-language"
              value={outputLanguage}
              onChange={(e) => setOutputLanguage(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 text-white transition-all duration-300 hover:bg-gray-700 cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button 
            onClick={handleTranslate} 
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/20 animate-fade-in-up delay-200"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Translating...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                Translate
              </span>
            )}
          </button>
          <button 
            onClick={handleClear}
            className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-gray-500/10 animate-fade-in-up delay-250"
          >
            <span className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear
            </span>
          </button>
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg animate-fade-in">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-400">{error}</p>
            </div>
          </div>
        )}
        
        {/* Translation Result */}
        {translatedText && (
          <div className="mt-6 p-6 bg-gray-800/50 border border-gray-700 rounded-lg backdrop-blur-sm animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Translated Text:
            </h2>
            <p className="text-gray-200 text-lg bg-gray-900/30 p-4 rounded-lg border border-gray-700">
              {translatedText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranslatePage;

