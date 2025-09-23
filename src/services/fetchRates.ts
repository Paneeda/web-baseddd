import axios from 'axios';

const fetchExchangeRate = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/api/exchange-rates`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        throw error;
    }
}

const fetchExchangeRateByRange = async (from_date: string, to_date: string) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/api/exchange-rates?start_date=${from_date}&end_date=${to_date}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        throw error;
    }
}

const fetchInterestRate = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/api/interests`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching interest rate:", error);
        throw error;
    }
}

export {
    fetchExchangeRate,
    fetchInterestRate
};
