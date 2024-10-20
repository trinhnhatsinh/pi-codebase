'use client';
import { motion } from 'framer-motion';
import React from 'react';
// Icon dừa bạn có thể thay đổi thành icon dừa phù hợp
import { useInView } from 'react-intersection-observer';

import { animationOpacityZoom } from '@/constant/config';

const CoconutDivider: React.FC = () => {
  const { ref: dividerRef, inView: dividerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 10% of the section is visible
  });

  const animationBottomToTop = {
    hidden: { width: 0 },
    visible: { width: 144 },
  };

  return (
    <div ref={dividerRef} className="flex items-center justify-center mb-6">
      {/* Đường gạch bên trái */}
      <motion.div
        className="h-[2px] bg-primary"
        initial="hidden"
        animate={dividerInView ? 'visible' : 'hidden'}
        variants={animationBottomToTop}
        transition={{ duration: 0.4 }}
      ></motion.div>

      {/* Icon Coconut */}
      <motion.div
        className="px-4"
        initial="hidden"
        animate={dividerInView ? 'visible' : 'hidden'}
        variants={animationOpacityZoom}
        transition={{ duration: 0.4 }}
      >
        <img src="/svg/coconut-water.svg" alt="Coconut Icon" className="size-8" />
      </motion.div>

      {/* Đường gạch bên phải */}
      <motion.div
        className="h-[2px] bg-primary"
        initial="hidden"
        animate={dividerInView ? 'visible' : 'hidden'}
        variants={animationBottomToTop}
        transition={{ duration: 0.4 }}
      ></motion.div>
    </div>
  );
};

export default CoconutDivider;
