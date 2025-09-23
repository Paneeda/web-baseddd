
import { useTranslation } from 'react-i18next';

function Midmenu() {
    const { t } = useTranslation();

    return (
        <div className="justify-items-center p-2">

            <div className="flex flex-row justify-between bg-white absolute rounded-sm p-1 border border-gray-300 mt-4 w-6xl max-sm:hidden">
                <a href="/deposit" className="px-2 py-2 ml-10 text-bic-navy hover:border-b-3 border-bic-navy">{t('Deposit')}</a>
                <a href="/loan" className="px-2 py-2  text-bic-navy hover:border-b-3 border-bic-navy">{t('Loans')}</a>
                <a href="/atm" className="px-2 py-2  text-bic-navy hover:border-b-3 border-bic-navy">{t('ATMLocation')}</a>
                <a href="/remittance" className="px-2 py-2  text-bic-navy hover:border-b-3 border-bic-navy">{t('Remittance')}</a>
                <a href="/feencharge" className="px-2 py-2  text-bic-navy hover:border-b-3 border-bic-navy">{t('Fee&Charge')}</a>
                   <a href="/forms" className="px-2 py-2  text-bic-navy hover:border-b-3 border-bic-navy">{t('Forms')}</a>
                  <a href="/career" className=" px-2 py-2  text-bic-navy hover:border-b-3 border-bic-navy">{t('Career')}</a>
           <a href="/serviceunit" className=" px-2 py-2  text-bic-navy hover:border-b-3 border-bic-navy">{t('ServiceUnits')}</a>
                <div className="border-l-2 border-slate-200"></div>
                <a href="/ibanking" className='px-2 py-2  text-bic-navy hover:border-b-3 border-bic-navy' >I-Banking</a>
                <a href="/bic-care" className='px-2 py-2  text-bic-navy hover:border-b-3 border-bic-navy mr-10'>BIC Care</a>
            </div>






        </div>
    );
}



export default Midmenu