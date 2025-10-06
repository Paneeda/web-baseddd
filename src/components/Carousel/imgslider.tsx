import { useState, useEffect } from "react";
import { fetchImgSlider } from "../../services/fetchImgSlidder";

function ImgSliderr() {
  interface ImageSliderObj {
    id: string | number;
    img_url: string;
    img_order: string | number;
    status: string;
  }

  const [images, setImages] = useState<ImageSliderObj[]>([]);
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  useEffect(() => {
    fetchImgSlider()
      .then((sliders) => {
        const sorted = sliders.sort(
          (a: ImageSliderObj, b: ImageSliderObj) =>
            Number(a.img_order) - Number(b.img_order)
        );
        setImages(sorted);
      })
      .catch((err) => {
        console.error("Failed to fetch slider:", err);
        setImages([]);
      });
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(showNextImage, 3500);
      return () => clearInterval(interval);
    }
  }, [images]);

  if (images.length === 0) return <p>Loading...</p>;

  return (
    <div className="relative">
      {/* Image */}
      <img
        src={images[imageIndex].img_url}
        alt=""
        className="w-full h-auto object-cover"
      />

      {/* Prev button */}
      <button
        onClick={showPrevImage}
        type="button"
        className="absolute top-0 start-0 z-3 flex items-center justify-center py-48 max-sm:py-17 px-4 cursor-pointer focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 max-sm:w-5 max-sm:h-5 rounded-full bg-white/30 dark:bg-gray-800/30">
          <svg
            className="w-4 h-4 max-sm:w-2 max-sm:h-2 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next button */}
      <button
        onClick={showNextImage}
        type="button"
        className="absolute top-0 end-0 z-3 flex items-center justify-center py-48 max-sm:py-17 px-4 cursor-pointer focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 max-sm:w-5 max-sm:h-5 rounded-full bg-white/30 dark:bg-gray-800/30">
          <svg
            className="w-4 h-4 max-sm:w-2 max-sm:h-2 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImageIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === imageIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImgSliderr;
