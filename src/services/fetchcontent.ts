import axios from 'axios';
import i18n from '../i18n';

const currentLang = () => (i18n.language || 'en').split('-')[0];


const api = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    

    headers: {
        'Content-Type': 'application/json'
    }
});




const fetchOrgChart = async (lang?: string) => {
    
    try {
   
        const response = await api.get('/api/orgcharts', {
            params: { lang: (lang || currentLang()) }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching orgchgarts posts:', error);
        throw error;
    }
};

const fetchExecutiveTeam = async (lang?: string) => {

    try {
        const response = await api.get('/api/mgnt-members', {
            params: { lang: (lang || currentLang()) }
        });
        return response.data;
    } catch(error) {
        console.error ('Error Fetching mgm-team:', error);
        throw error;
    }

};




export {
  
   fetchOrgChart,
   fetchExecutiveTeam
};


