import { useTranslation } from 'react-i18next'; // ...existing code...

function Midmenu() {
  const { t } = useTranslation(); // ...existing code...

  return (
    <div className="justify-items-center p-2 bg-gradient-to-b from-bic-red to-bic-navy shadow-md">
      <nav
        aria-label="Primary"
        className="absolute max-md:hidden rounded-md border animated-gradient-border"
      >
        <ul className="flex items-center gap-x-6 px-4 py-2 text-md font-bic font-semibold text-white">
          <li>
            <a
              href="/deposit"
              className="px-2 py-1 border-b-2 border-transparent hover:border-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {t('Deposit')}
            </a>
          </li>
          <li>
            <a
              href="/loan"
              className="px-2 py-1  border-b-2 border-transparent hover:border-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {t('Loans')}
            </a>
          </li>
          <li>
            <a
              href="/atm"
              className="px-2 py-1  border-b-2 border-transparent hover:border-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {t('ATMLocation')}
            </a>
          </li>
          <li>
            <a
              href="/remittance"
              className="px-2 py-1  border-b-2 border-transparent hover:border-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {t('Remittance')}
            </a>
          </li>
          <li>
            <a
              href="/feencharge"
              className="px-2 py-1  border-b-2 border-transparent hover:border-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {t('Fee&Charge')}
            </a>
          </li>
          <li>
            <a
              href="/forms"
              className="px-2 py-1  border-b-2 border-transparent hover:border-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {t('Forms')}
            </a>
          </li>
          <li>
            <a
              href="/career"
              className="px-2 py-1  border-b-2 border-transparent hover:border-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {t('Career')}
            </a>
          </li>
          <li>
            <a
              href="/serviceunit"
              className="px-2 py-1  border-b-2 border-transparent hover:border-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {t('ServiceUnits')}
            </a>
          </li>

          <li aria-hidden="true" className="mx-2 h-6 w-px bg-slate-200/60" />

          <li>
            <a
              href="/ibanking"
              className="px-2 py-1  text-white/90 border-b-2 border-transparent hover:text-white hover:border-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              iBanking
            </a>
          </li>
          <li>
            <a
              href="/bic-care"
              className="px-2 py-1  text-white/90 border-b-2 border-transparent hover:text-white hover:border-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              BIC Care
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Midmenu; // ...existing code...