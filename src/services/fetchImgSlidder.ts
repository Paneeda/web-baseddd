import axios from 'axios';



const api = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    

    headers: {
        'Content-Type': 'application/json'
    }
});


const fetchImgSlider = async () => {
  try {
    const response = await api.get('/api/image-sliders'); 

    const baseUrl = import.meta.env.VITE_API_SERVE_STATIC;
    const raw = response.data;
    const sliders = Array.isArray(raw) ? raw : raw?.data?.sliders ?? [];

    return sliders.map((slider: any) => ({
      ...slider,
      img_url: slider.img_url?.startsWith('http')
        ? slider.img_url
        : `${baseUrl}${slider.img_url}`
    }));
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};




export {
  
    fetchImgSlider
};


