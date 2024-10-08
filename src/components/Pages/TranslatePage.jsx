import React, { useState } from "react";
import "../Styles/TranslatePage.css";

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
      setError(`Please enter the text for translation`);
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
    <div className="translate-container">
      <h1>Text Translator</h1>
      <div className="input-group">
        <label htmlFor="text-input">Enter text to translate:</label>
        <input
          type="text"
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="language-selection">
        <label htmlFor="input-language">Input Language:</label>
        <select
          id="input-language"
          value={inputLanguage}
          onChange={(e) => setInputLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
        <label htmlFor="output-language">Output Language:</label>
        <select
          id="output-language"
          value={outputLanguage}
          onChange={(e) => setOutputLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <button className="translate-button" onClick={handleTranslate} disabled={loading}>
        {loading ? "Translating..." : "Translate"}
      </button>
      <button className="clear-button" onClick={handleClear}>
          Clear
      </button>
      {error && <p className="error">{error}</p>}
      {translatedText && (
        <div className="result">
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslatePage;
