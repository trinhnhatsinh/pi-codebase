import React from 'react';

import { ImageInterface } from '@/constant/interfaces';

interface ImageCarouselProps {
  items: ImageInterface[]
}

const ImageCarousel = ({ items }: ImageCarouselProps) => {
  return (
    <div className="relative overflow-hidden max-w-5xl bg-white">
      <div className='absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-white/10 z-10'></div>
      <div className='absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-white/10 z-10'></div>
      <div className="scrolling-images flex items-center space-x-0">
        {/* Lặp lại danh sách hình ảnh 2 lần để tạo hiệu ứng cuộn liên tục */}
        {[...Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            {
              items.map((item: ImageInterface) => (
                <div key={item.id} className='w-36 h-16 py-4 flex-shrink-0'>
                  <img
                    key={item.id}
                    src={item.url}
                    alt="Image 1"
                    className="w-full h-full object-contain grayscale"
                  />
                </div>

              ))
            }
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
  
          .scrolling-images {
            display: flex;
            width: 200%;
            animation: scroll-left 40s linear infinite;
          }
        `}</style>
    </div>
  );

};

export default ImageCarousel;