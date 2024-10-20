import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { animationOpacityBottomToTop } from '@/constant/config';
import { ImageInterface } from '@/constant/interfaces';

interface SlideImageProps {
  images: ImageInterface[];
}

const SlideImage: React.FC<SlideImageProps> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const { ref: itemsRef, inView: itemsInView } = useInView({
    triggerOnce: true,
    threshold: 0, // Trigger when 10% of the section is visible
  });

  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3, // Hiển thị 3 slide
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0px',
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Xử lý sự kiện Next
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  // Xử lý sự kiện Prev
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const activeDestination = React.useMemo(() => {
    return activeSlide + 1 < images.length ? activeSlide + 1 : 0;
  }, [activeSlide, images]);

  return (
    <motion.div
      ref={itemsRef}
      className="image-slide relative group flex justify-center overflow-hidden"
      initial="hidden"
      animate={itemsInView ? 'visible' : 'hidden'}
      variants={animationOpacityBottomToTop}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <Slider {...settings} initialSlide={0} ref={sliderRef}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`flex justify-center items-center transform transition-transform duration-500 relative ${
              activeDestination === index
                ? 'scale-100 z-10' // Phóng to slide active
                : 'scale-100 md:scale-75 opacity-100 md:opacity-50' // Các slide không active
            }`}
          >
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-[480px] object-cover rounded-xl transition-all duration-500"
            />

            {/* Nút điều hướng nằm trên hình active */}
            {activeDestination === index && (
              <>
                <FaChevronLeft
                  className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-primary p-3 rounded-full z-10 transition-opacity duration-300 group-hover:opacity-100 opacity-0 cursor-pointer"
                  onClick={handlePrev}
                  size={36}
                />
                <FaChevronRight
                  className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-primary p-3 rounded-full z-10 transition-opacity duration-300 group-hover:opacity-100 opacity-0 cursor-pointer"
                  onClick={handleNext}
                  size={36}
                />
              </>
            )}
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default SlideImage;
