import { useTranslation } from 'react-i18next'; //1
import { useState } from 'react';
import BICLogo1 from '/lg/bic_logo_w_1.svg';
import BICLogo2 from '/lg/bic_logo_w_2.svg';
import MenuIcon from '../../assets/icons/hamburger.svg';
import CloseIcon from '../../assets/icons/closex.svg';
import Midmenu from '../midmenubar/main';
import { formatFlag } from '../../utils/formatter';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation(); //2 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductOpenMobile, setIsProductOpenMobile] = useState(false);

  const changeLanguage = (lng: string) => { 
    i18n.changeLanguage(lng);
    try {
      // Ensure persistence across reloads/navigation
      localStorage.setItem('i18nextLng', lng);
    } catch {
      // ignore storage errors (e.g., private mode)
    }
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleMobileMenu = () => {
    setIsMobileOpen((v) => !v);
    // Close nested menus when closing main menu
    if (isMobileOpen) {
      setIsProductOpenMobile(false);
    }
  };
  const toggleProductMobile = () => setIsProductOpenMobile((v) => !v);

  const currentLanguage = i18n.language;

  // Language configuration
  const languages = [
    { code: 'en', name: 'English', flag: 'USD' },
    { code: 'lo', name: 'ລາວ', flag: 'LAK' },
    { code: 'cn', name: '中文', flag: 'CNY' },
    { code: 'vn', name: 'Tiếng Việt', flag: 'VND' }
  ];

  const getCurrentLanguageInfo = () => {  //3
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <header className="relative z-20 bg-gradient-to-b from-bic-navy-dark to-bic-navy-light text-white">
      <nav className="w-full mx-auto px-3 sm:px-4 lg:px-8  ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div>
              <a className="flex-shrink-0" href="/" aria-label="BIC Home">
              <img className="block lg:hidden h-10 w-auto" src={BICLogo1} alt="BIC Logo" />
              <img className="hidden lg:block h-12 w-auto" src={BICLogo2} alt="BIC Logo" />
            </a>

            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:block lg:ml-4">
              <div className="flex items-center ">
                <div className="relative">
                  <a href="/" className="px-3 py-2  rounded-md text-sm
                   font-medium hover:bg-bic-navy hover:text-bic-red focus:outline-none focus:text-red focus:bg-bic-navy-dark transition">{t('Home')}</a>
                </div>

                <div className="relative">
                  <a href="/aboutus" className="px-3 py-2  rounded-md text-sm
                   font-medium hover:bg-bic-navy hover:text-bic-red focus:outline-none focus:text-red focus:bg-bic-navy-dark transition">{t('Aboutus')}</a>
                </div>

                <div className="relative">
                  <a href="/news" className="px-3 py-2  rounded-md text-sm
                   font-medium hover:bg-bic-navy hover:text-bic-red focus:outline-none focus:text-red focus:bg-bic-navy-dark transition">{t('News')}</a>
                </div>
              </div>
            </div>

            <div className='flex flex-row   gap-3 items-center ml-70 max-sm:hidden'>
                      <div className="">
                  <a href="/contactus" className=" px-3 py-2  rounded-md text-sm
                   font-medium hover:bg-bic-navy hover:text-bic-red focus:outline-none focus:text-red focus:bg-bic-navy-dark transition ">{t('ContactUs')}</a>
                </div>

                {/* Desktop searchbar */}
                <div className="">
                  <form role="search" aria-label="Site">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                      <input type={t('Search')} id={t('Search')} className="block w-44 lg:w-56 p-2 pl-9 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-bic-navy focus:border-bic-navy" placeholder="Search" aria-label={t('Search')} />
                    </div>
                  </form>
                </div>
            </div>



          </div>

          {/* Right: Language and Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Language Dropdown Menu */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium  focus:outline-none focus:ring-2 focus:ring-bic-red transition hover:bg-bic-bg hover:text-bic-navy-dark"
              >
                <span className="mr-2">{formatFlag(getCurrentLanguageInfo().flag)}</span>
                <span className="hidden sm:inline mr-1">{getCurrentLanguageInfo().name}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ${currentLanguage === language.code ? 'bg-blue-50 text-blue-700' : ''}`}
                    >
                      <span className="mr-3">{formatFlag(language.flag)}</span>
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

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-bic-navy lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMobileOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only"></span>
              {!isMobileOpen ? (
                <img className="h-6 w-6" src={MenuIcon} alt="Open menu" />
              ) : (
                <img className="h-6 w-6" src={CloseIcon} alt="Close menu" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={`lg:hidden ${isMobileOpen ? 'block' : 'hidden'}`}>
          <div className="border-t border-gray-200 mt-2 shadow-sm rounded-md overflow-hidden">
            <div className="px-3 py-3 space-y-1 bg-white text-center">
              <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-bic-navy hover:text-white">{t('Home')}</a>
              <a href="/aboutus" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-bic-navy hover:text-white">{t('Aboutus')}</a>
              <a href="/news" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-bic-navy hover:text-white">{t('News')}</a>

              <div>
                <button
                  onClick={toggleProductMobile}
                  className="w-full relative flex items-center justify-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-bic-navy hover:text-white"
                  aria-expanded={isProductOpenMobile}
                  aria-controls="mobile-submenu-products"
                >
                  <span>{t('Product&Service')}</span>
                  <svg className={`w-5 h-5 transition-transform absolute right-3 ${isProductOpenMobile ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div id="mobile-submenu-products" className={`${isProductOpenMobile ? 'block' : 'hidden'} py-1`}>
                  <a href="/loan" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100">{t('Loan')}</a>
                  <a href="/deposit" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100">{t('Deposit')}</a>
                  <a href="/remittance" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100">{t('Remittance')}</a>
                  <a href="/other" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100">{t('Other')}</a>
                </div>
              </div>

              <a href="/forms" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-bic-navy hover:text-white">{t('Forms')}</a>
              <a href="/career" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-bic-navy hover:text-white">{t('Career')}</a>
              <a href="/contactus" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-bic-navy hover:text-white">{t('ContactUs')}</a>

              {/* Mobile search */}
              <div className="pt-2">
                <form role="search" aria-label="Site">
                  <div className="relative max-w-md mx-auto">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="search" className="block w-full p-2 pl-9 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-bic-navy focus:border-bic-navy" placeholder="Search" aria-label="Search" />
                  </div>
                </form>
              </div>

              <div className="pt-2 border-t mt-2">
                <div className="flex flex-wrap gap-2 justify-center">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`px-3 py-1 rounded-full text-sm border ${currentLanguage === language.code ? 'bg-bic-navy text-white border-bic-navy' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-1">{formatFlag(language.flag)}</span>
                      <span>{language.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Midmenu/>
          
        </div>
      </nav>


    </header>
    
  );
}

export default Header;
