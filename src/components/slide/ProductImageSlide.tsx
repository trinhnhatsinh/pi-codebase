import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

import { animationBottomToTop, animationOpacityBottomToTop } from '@/constant/config';
import { ImageInterface } from '@/constant/interfaces';

interface ProductImageSliderProps {
  data: ImageInterface[];
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sliderRef, inView: sliderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 10% of the section is visible
  });

  // Chuyển qua ảnh trước
  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  // Chuyển tới ảnh tiếp theo
  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  // Chọn ảnh từ thumbnail
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div ref={sliderRef} className="product-image-slider">
      {/* Hình ảnh chính */}
      <motion.div
        className="relative"
        initial="hidden"
        animate={sliderInView ? 'visible' : 'hidden'}
        variants={animationOpacityBottomToTop}
        transition={{ duration: 0.4 }}
      >
        <img
          src={data[currentIndex].url}
          alt={`Product ${currentIndex}`}
          className="w-full aspect-4/3 rounded-xl object-cover mb-4"
        />

        <FaChevronLeft
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-primary p-3 rounded-full duration-300 group-hover:opacity-100 cursor-pointer"
          onClick={handlePrevClick}
          size={42}
        />
        <FaChevronRight
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-primary p-3 rounded-full duration-300 group-hover:opacity-100 cursor-pointer"
          onClick={handleNextClick}
          size={42}
        />
      </motion.div>

      {/* Thumbnail */}
      <div className="mt-4 flex justify-start gap-2">
        {data.map((item, index) => (
          <motion.img
            key={item.id}
            src={item.url}
            alt={`Thumbnail ${index}`}
            className={`w-20 md:w-24 aspect-square object-cover cursor-pointer border-2 rounded-lg ${
              index === currentIndex ? 'border-primary' : 'border-transparent'
            }`}
            initial="hidden"
            animate={sliderInView ? 'visible' : 'hidden'}
            variants={animationOpacityBottomToTop}
            transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
