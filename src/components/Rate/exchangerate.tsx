import { useState } from 'react';




function ExchangeRate () {


 const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const changeCurrency = (currency: string) => {
        changeCurrency(currency);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };






    return(
        <div className=" w-full  justify-center ">

             <div className=" p-5  ">
               
        <table className="w-full  ">
            
        
            <tbody>
                 <tr className="text-bic-navy border-b border-gray-300">
                    <td className="px-6 py-4 text-left  font-medium">Currency</td>
                     <td className="px-6 py-4 text-left  font-medium">Code</td>
                    <td className="px-6 py-4 text-left  font-medium">Buy</td>
                    <td className="px-6 py-4 text-left  font-medium">Sell</td>
                </tr>
                <tr className="border-b border-gray-300">
                    <td className="px-6 py-4 flex items-center gap-4">
                        <img src="{Flag1}" alt="Product" className="w-12 h-12 rounded-md"/>
                        
                    </td>
                    <td className="px-6 py-4 ">CNY</td>
                    <td className="px-6 py-4 text-bic-red">3,021</td>
                    <td className="px-6 py-4">3,056</td>
                 
                </tr>

                <tr className="border-b border-gray-300">
                  <td className="px-6 py-4 flex items-center gap-4">
                        <img src="{Flag2}" alt="Product" className="w-12 h-12 rounded-md"/>
                        
                    </td>
                    <td className="px-6 py-4 ">USD</td>
                    <td className="px-6 py-4 text-bic-red">3,021</td>
                    <td className="px-6 py-4">3,056</td>
                </tr>

                <tr className="border-b border-gray-300">
                     <td className="px-6 py-4 flex items-center gap-4">
                        <img src="{Flag3}" alt="Product" className="w-12 h-12 rounded-md"/>
                        
                    </td>
                    <td className="px-6 py-4 ">EUR</td>
                    <td className="px-6 py-4 text-bic-red">3,021</td>
                    <td className="px-6 py-4">3,056</td>
                    
                </tr>

                <tr >
                    <td className="px-6 py-4 flex items-center gap-4">
                        <img src="{Flag4}" alt="Product" className="w-12 h-12 rounded-md"/>
                        
                    </td>
                    <td className="px-6 py-4 ">THB</td>
                    <td className="px-6 py-4 text-bic-red">3,021</td>
                    <td className="px-6 py-4">3,056</td>
                   
                </tr>

                
            </tbody>
        </table>
    </div>


           
        <div className="w-full max-w-xl mx-auto m-4">
            <p className="text-bic-navy text-xs font-bold text-center border-b p-3">
              Currency Converter
            </p>
            <div className="flex flex-col items-center justify-between">
                
                
                {/*From Input */}
                <div className="w-full max-w-xs min-w-[200px] mt-4">
                    
                    <div className="relative mt-2">
                        <input
                            type="text"
                            className="w-full h-10 pl-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                            placeholder="1,000" 
                        />
                        <div className="absolute top-2 right-0 flex items-center pr-3">
                            <div className="h-6 border-l border-slate-200 mr-2"></div>
                           
                            <button onClick={toggleDropdown} className="dropdownButton h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none">
                                <span className="dropdownSpan">USD</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    className="h-4 w-4 ml-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            <div className="dropdownMenu min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden bg-white border border-slate-200 rounded shadow-lg z-10">
                            
                         

                            </div>
                        </div> 
                    </div>   
                </div>

                {/*Swap Icon */}
                <div className="flex items-center justify-center mt-6">
                    <button className="p-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 shadow-sm">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-5 h-5 text-slate-600"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                    </button>
                </div>
                {/*To Input */}
            
                <div className="w-full max-w-xs min-w-[200px] -mt-2">
                    
                    <div className="relative mt-2">
                        <input
                            type="text"
                            className="w-full h-10 pl-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                            placeholder="1,000" 
                        />
                        <div className="absolute top-2 right-0 flex items-center pr-3">
                            <div className="h-6 border-l border-slate-200 mr-2"></div>
                            <button className="dropdownButton h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none">
                                <span className="dropdownSpan">EUR</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    className="h-4 w-4 ml-1"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div className="dropdownMenu min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden bg-white border border-slate-200 rounded shadow-lg z-10">
                                <ul className="dropdownOptions">
                                    <li className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer" data-value="USD">USD</li>
                                    <li className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer" data-value="EUR">EUR</li>
                                    <li className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer" data-value="CAD">CAD</li>
                                    <li className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer" data-value="RON">RON</li>
                                </ul>
                                <label htmlFor="curen">Currency
                                <select name="selectedcurrency" id="">
                                    <option value="usd">USD</option>
                                    <option value="eur">EUR</option>
                                    <option value="thb">THB</option>
                                    <option value="lak">LAK</option>
                                    <option value="cny">CNY</option>
                                </select></label>

                          






                            </div>
                        </div> 
                    </div>   
                </div>
            </div>

           
           
        </div>


        </div>
       
    );
}

export default ExchangeRate