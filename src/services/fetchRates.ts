import axios from 'axios';
import i18n from '../i18n';

const currentLang = () => (i18n.language || 'en').split('-')[0];

const api = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json'
    }
});

const fetchExchangeRate = async (lang?: string) => {
    try {
        const response = await api.get('/api/exchange-rates', {
            params: { lang: (lang || currentLang()) }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        throw error;
    }
};

const fetchExchangeRateByRange = async (from_date: string, to_date: string, lang?: string) => {
    try {
        const response = await api.get('/api/exchange-rates', {
            params: {
                start_date: from_date,
                end_date: to_date,
                lang: (lang || currentLang())
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching exchange rate (range):', error);
        throw error;
    }
};

const fetchInterestRate = async (lang?: string) => {
    try {
        const response = await api.get('/api/interests', {
            params: { lang: (lang || currentLang()) }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching interest rate:', error);
        throw error;
    }
};

const fetchNewsPosts = async (lang?: string) => {
    try {
        const response = await api.get('/api/news', {
            params: { lang: (lang || currentLang()) }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching news posts:', error);
        throw error;
    }
};


const fetchPromotionPost = async (lang?: string) => {
    
    try {
   
        const response = await api.get('/api/promos', {
            params: { lang: (lang || currentLang()) }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching promos posts:', error);
        throw error;
    }
};


export {
    fetchExchangeRate,
    fetchExchangeRateByRange,
    fetchInterestRate,
    fetchNewsPosts,
    fetchPromotionPost
};
