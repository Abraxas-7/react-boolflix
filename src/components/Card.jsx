import { FaStar, FaRegStar } from "react-icons/fa";
import Flag from "react-world-flags";
import style from "./Card.module.css";

const languageToCountryFlag = [
  { iso_639_1: "xx", flag: "NA", name: "No Language" },
  { iso_639_1: "aa", flag: "AW", name: "Afar" },
  { iso_639_1: "af", flag: "ZA", name: "Afrikaans" },
  { iso_639_1: "ak", flag: "GH", name: "Akan" },
  { iso_639_1: "an", flag: "ES", name: "Aragonese" },
  { iso_639_1: "as", flag: "IN", name: "Assamese" },
  { iso_639_1: "av", flag: "RU", name: "Avaric" },
  { iso_639_1: "ae", flag: "RU", name: "Avestan" },
  { iso_639_1: "ay", flag: "BO", name: "Aymara" },
  { iso_639_1: "az", flag: "AZ", name: "Azerbaijani" },
  { iso_639_1: "ba", flag: "RU", name: "Bashkir" },
  { iso_639_1: "bm", flag: "ML", name: "Bambara" },
  { iso_639_1: "bn", flag: "BD", name: "Bengali" },
  { iso_639_1: "bi", flag: "BV", name: "Bislama" },
  { iso_639_1: "bo", flag: "IN", name: "Tibetan" },
  { iso_639_1: "bs", flag: "BA", name: "Bosnian" },
  { iso_639_1: "br", flag: "FR", name: "Breton" },
  { iso_639_1: "ca", flag: "ES", name: "Catalan" },
  { iso_639_1: "cs", flag: "CZ", name: "Czech" },
  { iso_639_1: "ch", flag: "US", name: "Chamorro" },
  { iso_639_1: "ce", flag: "RU", name: "Chechen" },
  { iso_639_1: "cu", flag: "RU", name: "Slavic" },
  { iso_639_1: "cv", flag: "RU", name: "Chuvash" },
  { iso_639_1: "kw", flag: "GB", name: "Cornish" },
  { iso_639_1: "co", flag: "FR", name: "Corsican" },
  { iso_639_1: "cr", flag: "CA", name: "Cree" },
  { iso_639_1: "cy", flag: "GB", name: "Welsh" },
  { iso_639_1: "da", flag: "DK", name: "Danish" },
  { iso_639_1: "de", flag: "DE", name: "German" },
  { iso_639_1: "dv", flag: "MV", name: "Divehi" },
  { iso_639_1: "dz", flag: "BT", name: "Dzongkha" },
  { iso_639_1: "en", flag: "GB", name: "English" },
  { iso_639_1: "eo", flag: "EE", name: "Esperanto" },
  { iso_639_1: "et", flag: "EE", name: "Estonian" },
  { iso_639_1: "eu", flag: "ES", name: "Basque" },
  { iso_639_1: "fo", flag: "FO", name: "Faroese" },
  { iso_639_1: "fj", flag: "FJ", name: "Fijian" },
  { iso_639_1: "fi", flag: "FI", name: "Finnish" },
  { iso_639_1: "fr", flag: "FR", name: "French" },
  { iso_639_1: "fy", flag: "NL", name: "Frisian" },
  { iso_639_1: "ff", flag: "ES", name: "Fulah" },
  { iso_639_1: "gd", flag: "GB", name: "Gaelic" },
  { iso_639_1: "ga", flag: "IE", name: "Irish" },
  { iso_639_1: "gl", flag: "ES", name: "Galician" },
  { iso_639_1: "gv", flag: "GB", name: "Manx" },
  { iso_639_1: "gn", flag: "PY", name: "Guarani" },
  { iso_639_1: "gu", flag: "IN", name: "Gujarati" },
  { iso_639_1: "ht", flag: "HT", name: "Haitian Creole" },
  { iso_639_1: "ha", flag: "NG", name: "Hausa" },
  { iso_639_1: "sh", flag: "RS", name: "Serbo-Croatian" },
  { iso_639_1: "hz", flag: "ZA", name: "Herero" },
  { iso_639_1: "ho", flag: "PG", name: "Hiri Motu" },
  { iso_639_1: "hr", flag: "HR", name: "Croatian" },
  { iso_639_1: "hu", flag: "HU", name: "Hungarian" },
  { iso_639_1: "ig", flag: "NG", name: "Igbo" },
  { iso_639_1: "io", flag: "IT", name: "Ido" },
  { iso_639_1: "ii", flag: "CN", name: "Yi" },
  { iso_639_1: "iu", flag: "CA", name: "Inuktitut" },
  { iso_639_1: "ie", flag: "IT", name: "Interlingue" },
  { iso_639_1: "ia", flag: "IT", name: "Interlingua" },
  { iso_639_1: "id", flag: "ID", name: "Indonesian" },
  { iso_639_1: "ik", flag: "US", name: "Inupiaq" },
  { iso_639_1: "is", flag: "IS", name: "Icelandic" },
  { iso_639_1: "it", flag: "IT", name: "Italian" },
  { iso_639_1: "jv", flag: "ID", name: "Javanese" },
  { iso_639_1: "ja", flag: "JP", name: "Japanese" },
  { iso_639_1: "kl", flag: "GL", name: "Kalaallisut" },
  { iso_639_1: "kn", flag: "IN", name: "Kannada" },
  { iso_639_1: "ks", flag: "IN", name: "Kashmiri" },
  { iso_639_1: "ka", flag: "GE", name: "Georgian" },
  { iso_639_1: "kr", flag: "NG", name: "Kanuri" },
  { iso_639_1: "kk", flag: "KZ", name: "Kazakh" },
  { iso_639_1: "km", flag: "KH", name: "Khmer" },
  { iso_639_1: "ki", flag: "KE", name: "Kikuyu" },
  { iso_639_1: "rw", flag: "RW", name: "Kinyarwanda" },
  { iso_639_1: "ky", flag: "KG", name: "Kirghiz" },
  { iso_639_1: "kv", flag: "RU", name: "Komi" },
  { iso_639_1: "kg", flag: "CG", name: "Kongo" },
  { iso_639_1: "ko", flag: "KR", name: "Korean" },
  { iso_639_1: "kj", flag: "AO", name: "Kuanyama" },
  { iso_639_1: "ku", flag: "TR", name: "Kurdish" },
  { iso_639_1: "lo", flag: "LA", name: "Lao" },
  { iso_639_1: "la", flag: "VA", name: "Latin" },
  { iso_639_1: "lv", flag: "LV", name: "Latvian" },
  { iso_639_1: "li", flag: "NL", name: "Limburgish" },
  { iso_639_1: "ln", flag: "CD", name: "Lingala" },
  { iso_639_1: "lt", flag: "LT", name: "Lithuanian" },
  { iso_639_1: "lb", flag: "LU", name: "Letzeburgesch" },
  { iso_639_1: "lu", flag: "CD", name: "Luba-Katanga" },
  { iso_639_1: "lg", flag: "UG", name: "Ganda" },
  { iso_639_1: "mh", flag: "MH", name: "Marshall" },
  { iso_639_1: "ml", flag: "IN", name: "Malayalam" },
  { iso_639_1: "mr", flag: "IN", name: "Marathi" },
  { iso_639_1: "mg", flag: "MG", name: "Malagasy" },
  { iso_639_1: "mt", flag: "MT", name: "Maltese" },
  { iso_639_1: "mo", flag: "MD", name: "Moldavian" },
  { iso_639_1: "mn", flag: "MN", name: "Mongolian" },
  { iso_639_1: "mi", flag: "NZ", name: "Maori" },
  { iso_639_1: "ms", flag: "MY", name: "Malay" },
  { iso_639_1: "my", flag: "MM", name: "Burmese" },
  { iso_639_1: "na", flag: "NR", name: "Nauru" },
  { iso_639_1: "nv", flag: "US", name: "Navajo" },
  { iso_639_1: "nr", flag: "ZA", name: "Ndebele" },
  { iso_639_1: "nd", flag: "ZW", name: "Ndebele" },
  { iso_639_1: "ng", flag: "AO", name: "Ndonga" },
  { iso_639_1: "ne", flag: "NP", name: "Nepali" },
  { iso_639_1: "nl", flag: "NL", name: "Dutch" },
  { iso_639_1: "nn", flag: "NO", name: "Norwegian Nynorsk" },
  { iso_639_1: "nb", flag: "NO", name: "Norwegian Bokmål" },
  { iso_639_1: "no", flag: "NO", name: "Norwegian" },
  { iso_639_1: "ny", flag: "MW", name: "Chichewa; Nyanja" },
  { iso_639_1: "oc", flag: "FR", name: "Occitan" },
  { iso_639_1: "oj", flag: "US", name: "Ojibwa" },
  { iso_639_1: "or", flag: "IN", name: "Oriya" },
  { iso_639_1: "om", flag: "ET", name: "Oromo" },
  { iso_639_1: "os", flag: "RU", name: "Ossetian; Ossetic" },
  { iso_639_1: "pa", flag: "IN", name: "Punjabi" },
  { iso_639_1: "pi", flag: "IN", name: "Pali" },
  { iso_639_1: "pl", flag: "PL", name: "Polish" },
  { iso_639_1: "pt", flag: "PT", name: "Portuguese" },
  { iso_639_1: "qu", flag: "PE", name: "Quechua" },
  { iso_639_1: "rm", flag: "CH", name: "Raeto-Romance" },
  { iso_639_1: "ro", flag: "RO", name: "Romanian" },
  { iso_639_1: "rn", flag: "BI", name: "Rundi" },
  { iso_639_1: "ru", flag: "RU", name: "Russian" },
  { iso_639_1: "sg", flag: "CF", name: "Sango" },
  { iso_639_1: "sa", flag: "IN", name: "Sanskrit" },
  { iso_639_1: "si", flag: "LK", name: "Sinhalese" },
  { iso_639_1: "sk", flag: "SK", name: "Slovak" },
  { iso_639_1: "sl", flag: "SI", name: "Slovenian" },
  { iso_639_1: "se", flag: "SE", name: "Northern Sami" },
  { iso_639_1: "sm", flag: "WS", name: "Samoan" },
  { iso_639_1: "sn", flag: "ZW", name: "Shona" },
  { iso_639_1: "sd", flag: "PK", name: "Sindhi" },
  { iso_639_1: "so", flag: "SO", name: "Somali" },
  { iso_639_1: "st", flag: "ZA", name: "Sotho" },
  { iso_639_1: "es", flag: "ES", name: "Español" },
  { iso_639_1: "sq", flag: "AL", name: "shqip" },
  { iso_639_1: "sc", flag: "IT", name: "Sardinian" },
  { iso_639_1: "sr", flag: "RS", name: "Srpski" },
  { iso_639_1: "ss", flag: "SZ", name: "Swati" },
  { iso_639_1: "su", flag: "ID", name: "Sundanese" },
  { iso_639_1: "sw", flag: "KE", name: "Kiswahili" },
  { iso_639_1: "sv", flag: "SE", name: "svenska" },
  { iso_639_1: "ty", flag: "PF", name: "Tahitian" },
  { iso_639_1: "ta", flag: "IN", name: "தமிழ்" },
  { iso_639_1: "tt", flag: "RU", name: "Tatar" },
  { iso_639_1: "te", flag: "IN", name: "తెలుగు" },
  { iso_639_1: "tg", flag: "TJ", name: "Tajik" },
  { iso_639_1: "tl", flag: "PH", name: "Tagalog" },
  { iso_639_1: "th", flag: "TH", name: "ภาษาไทย" },
  { iso_639_1: "ti", flag: "ER", name: "Tigrinya" },
  { iso_639_1: "to", flag: "TO", name: "Tonga" },
  { iso_639_1: "tn", flag: "ZA", name: "Tswana" },
  { iso_639_1: "ts", flag: "ZA", name: "Tsonga" },
  { iso_639_1: "tk", flag: "TM", name: "Turkmen" },
  { iso_639_1: "tr", flag: "TR", name: "Türkçe" },
  { iso_639_1: "tw", flag: "GH", name: "Twi" },
  { iso_639_1: "ug", flag: "CN", name: "Uighur" },
  { iso_639_1: "uk", flag: "UA", name: "Український" },
  { iso_639_1: "ur", flag: "PK", name: "اردو" },
  { iso_639_1: "uz", flag: "UZ", name: "ozbek" },
  { iso_639_1: "ve", flag: "ZA", name: "Venda" },
  { iso_639_1: "vi", flag: "VN", name: "Tiếng Việt" },
  { iso_639_1: "vo", flag: "DE", name: "Volapük" },
  { iso_639_1: "wa", flag: "BE", name: "Walloon" },
  { iso_639_1: "wo", flag: "SN", name: "Wolof" },
  { iso_639_1: "xh", flag: "ZA", name: "Xhosa" },
  { iso_639_1: "yi", flag: "IL", name: "Yiddish" },
  { iso_639_1: "za", flag: "CN", name: "Zhuang" },
  { iso_639_1: "zu", flag: "ZA", name: "isiZulu" },
  { iso_639_1: "ab", flag: "GE", name: "Abkhazian" },
  { iso_639_1: "zh", flag: "CN", name: "普通话" },
  { iso_639_1: "ps", flag: "AF", name: "پښتو" },
  { iso_639_1: "am", flag: "ET", name: "Amharic" },
  { iso_639_1: "ar", flag: "SA", name: "العربية" },
  { iso_639_1: "be", flag: "BY", name: "беларуская мова" },
  { iso_639_1: "bg", flag: "BG", name: "български език" },
  { iso_639_1: "cn", flag: "CN", name: "广州话 / 廣州話" },
  { iso_639_1: "mk", flag: "MK", name: "Macedonian" },
  { iso_639_1: "ee", flag: "GH", name: "Èʋegbe" },
  { iso_639_1: "el", flag: "GR", name: "ελληνικά" },
  { iso_639_1: "fa", flag: "IR", name: "فارسی" },
  { iso_639_1: "he", flag: "IL", name: "עִבְרִית" },
  { iso_639_1: "hi", flag: "IN", name: "हिन्दी" },
  { iso_639_1: "hy", flag: "AM", name: "Armenian" },
  { iso_639_1: "yo", flag: "NG", name: "Èdè Yorùbá" },
];
export default function Card({ item }) {
  const {
    title,
    name,
    original_title,
    original_name,
    vote_average,
    release_date,
    first_air_date,
    overview,
    original_language,
  } = item;

  const displayTitle = title || name;
  const releaseDate = release_date || first_air_date;

  const language = languageToCountryFlag.find(
    (lang) => lang.iso_639_1 === original_language
  );

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating / 2);
    const fullStars = roundedRating;
    const emptyStars = 5 - fullStars;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </>
    );
  };

  return (
    <div style={{ width: "300px", height: "400px", perspective: "1000px" }}>
      <div className={style.cardWrapper}>
        <div className={style.thecard}>
          <div className={style.thefront}>
            <img src={item.poster_url} alt={displayTitle} />
          </div>

          <div className={style.theback}>
            <div className="card-body">
              <h5 className="card-title">{displayTitle}</h5>
              {(original_title !== title || original_name !== name) && (
                <p className="card-subtitle mb-2">
                  ({original_title || original_name})
                </p>
              )}
              <p className="card-text">
                <strong>Voto:</strong> {renderStars(vote_average)}
              </p>
              <p className="card-text">
                <strong>Data di uscita:</strong> {releaseDate}
              </p>
              <div className="card-text pb-3">
                {language ? (
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <Flag
                      code={language.flag}
                      style={{ width: "40px", height: "30px" }}
                    />
                  </div>
                ) : (
                  "N/A"
                )}
              </div>

              <p className="card-text">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
