import ORG from "/lg/orgchart-1.png"
import { useTranslation } from 'react-i18next';
function Orgchart() {
const { t } = useTranslation();
    return (

        <div>
            <h1 className="p-3 text-center text-bic-navy text-3xl font-semibold uppercase ">{t('OrganizeChart')}</h1>
            <img src={ORG} alt="" />



        </div>
    );
}

export default Orgchart