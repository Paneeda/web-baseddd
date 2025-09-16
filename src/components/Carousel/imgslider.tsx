
import {  useState } from "react";

type ImageSliderProps = {
    imageUrls: string[]
}


function ImgSliderr ({imageUrls}: ImageSliderProps) {

const [imageIndex, setImageIndex] = useState(0)


    function showNextImage(){
        setImageIndex (index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })

    
    }


    function showPrevImage(){
        setImageIndex (index => {
            if (index === 0) return imageUrls.length - 1 
            return index - 1
        })
    }


    return (
        <div className="">
            <img src={imageUrls[imageIndex]} alt="" className="" />

                 <button onClick={showPrevImage} type="button" className="absolute top-20 start-0 z-3 flex items-center justify-center  px-4 py-48 cursor-pointer focus:outline-none " data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button onClick={showNextImage} type="button" className="absolute top-20 end-0 z-3 flex items-center justify-center  px-4 py-48  cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>




        </div>
    )
}


export default ImgSliderr