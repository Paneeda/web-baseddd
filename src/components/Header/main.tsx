import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import BICLogo1 from '/lg/bic_1_1.png';
import BICLogo2 from '/lg/bic_1_2.png';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const currentLanguage = i18n.language;

  // Language configuration
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'la', name: 'ລາວ', flag: '🇱🇦' },
    { code: 'cn', name: '中文', flag: '🇨🇳' },
    { code: 'vn', name: 'Tiếng Việt', flag: '🇻🇳' }
  ];

  const getCurrentLanguageInfo = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <div className="relative z-10 p-2 border-black bg-white-300 shadow">
      <div className="w-auto mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center px-2 lg:px-0">
            <a className="flex-shrink-0" href="/">
              <img className="block lg:hidden h-12 w-16" src={BICLogo2} alt="Logo" />
              <img className="hidden lg:block h-12 w-auto" src={BICLogo1} alt="Logo" />
            </a>
            <div className="hidden ps-8  lg:block lg:ml-2">
              <div className="flex items-center">
                <div className="relative">
                  <a href="/" className=" px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800  hover:bg-bic-navy hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white
                   focus:bg-bic-navy-dark">{t('Home')} </a>
                </div>
                
                <div className="relative">
                  <a href="/aboutus" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800  hover:bg-bic-navy hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none 
                  focus:text-white focus:bg-bic-navy-dark">{t('Aboutus')} </a>
                </div>
                <div className="relative">
                  <a href="/news" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800  hover:bg-bic-navy hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none 
                  focus:text-white focus:bg-bic-navy-dark">{t('News')} </a>
                </div>
                   <div className="relative">
                  <a href="/productnservice" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 hover:bg-bic-navy hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none 
                  focus:text-white focus:bg-bic-navy-dark">{t('Product&Service')} </a>
                </div>
                 <div className="relative">
                  <a href="/forms" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 hover:bg-bic-navy hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none 
                  focus:text-white focus:bg-bic-navy-dark">{t('Forms')} </a>
                </div>
                <div className="relative">
                  <a href="/career" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 hover:bg-bic-navy hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none 
                  focus:text-white focus:bg-bic-navy-dark">{t('Career')} </a>
                </div>
                          {/*searchbar*/}
              <div className="pl-3">
                 <form>   
             <div className="relative ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
            <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hidden hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search</button>
             </div>
            </form>
              </div>

            
                
              </div>
            </div>
          </div>
          
          {/* Language Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-bic-navy transition duration-150 ease-in-out"
            >
              <span className="mr-2">
                {getCurrentLanguageInfo().flag}
              </span>
              <span className="mr-1">
                {getCurrentLanguageInfo().name}
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out ${
                      currentLanguage === language.code ? 'bg-blue-50 text-blue-700' : ''
                    }`}
                  >
                    <span className="mr-3">{language.flag}</span>
                    <span>{language.name}</span>
                    {currentLanguage === language.code && (
                      <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
