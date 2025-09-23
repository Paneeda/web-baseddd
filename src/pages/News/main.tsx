import { useEffect, useState } from "react";



const News: React.FC = () => {

  interface NewsPostObj {
    news_id: string;
     title: {
      en: string;
      sbprice: string;
    }[];
    slug: {
      en: string;
      sbprice: string;
    }[];
    content: {
         en: string;
      sbprice: string;
    }[];
  }

    
   


    return (
        <div className="lg:pt-16">

                <div className="mb-8">
            <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">News</h3>
            <div className="bg-white rounded-lg p-8 border-b  border-gray-300">
              <div className="flex flex-wrap justify-items-center items-center gap-3">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-lao">Loans</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-lao">Deposit</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-lao">Promotion</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-lao">Event</span>
              </div>
            </div>
          </div>
          

          

        </div>
    )
}
export default News;