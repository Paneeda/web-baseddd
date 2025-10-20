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
    } catch (error) {
        console.error('Error Fetching mgm-team:', error);
        throw error;
    }

};

const fetchForm = async (form_type?:string, group_id?:string ) => {
    try {
        const response = await api.get('/api/form-downloads', {
            params: { lang: currentLang(), group_id:group_id, form_type:form_type } // e.g., "la" or "en"
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching retirement post:', error);
        throw error;
    }
};



const fetchProduct = async (lang?: string) => {
    try {
        const response = await api.get('/api/products',
            {
                params: { lang: lang || currentLang() }
            });
        return response.data;
    } catch (error) {
        console.error('Error Fetching Senior Product:', error);
        throw error;
    }
};


 const fetchProductDePost = async (id: string, lang?: string) => {
  try {
    const response = await api.get(`/api/product/${id}`, {
      params: { lang: lang || currentLang() },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error fetching product detail:', error.response?.data || error.message);
    throw error;
  }
};

const fetchBranchLocation = async (id: string, lang?: string) => {
    try {
        const response = await api.get (`/api/locations?group_id=branch`, {
            params: { lang: lang || currentLang(),

            }
        }
        );
        return response.data;
    } catch (error:any) {
        console.error ('Fetching Error: ', error.response?.data || error.message);
        throw error;
    }
}

const fetchATMLocation = async (id: string, lang?: string) => {
    try {
        const response = await api.get (`/api/locations?group_id=atm`, {
            params: { lang: lang || currentLang(),

            }
        }
        );
        return response.data;
    } catch (error:any) {
        console.error ('Fetchinf Error: ', error.response?.data || error.message);
        throw error;
    }
}



export {

    fetchOrgChart,
    fetchExecutiveTeam,
    fetchForm,
    fetchProduct,
    fetchProductDePost,
    fetchBranchLocation,
    fetchATMLocation
};


