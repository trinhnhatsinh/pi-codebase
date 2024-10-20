import { IconProps } from '@/constant/interfaces';
import * as React from 'react';

export const ThermometerOutlineIcon = ({ width, height, color }: IconProps) => (
  <svg
    width={width}
    height={height}
    fill={color}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 48 48"
  >
    <path
      d="M32 27.0556V7.99997C32 3.58172 28.4182 0 24 0C19.5817 0 16 3.58172 16 7.99997V27.0555C13.545 29.2528 12 32.446 12 36C12 42.6275 17.3726 48 24 48C30.6274 48 36 42.6275 36 36C36 32.446 34.455 29.2528 32 27.0556ZM24 44C19.5817 44 16 40.4183 16 36C16 33.6903 16.9789 31.5476 18.6677 30.0361L20.0001 28.8436V7.99997C20.0001 5.79084 21.791 3.99994 24.0001 3.99994C26.2092 3.99994 28.0001 5.79075 28.0001 7.99997V28.8436L29.3325 30.0361C31.0213 31.5476 32.0002 33.6902 32.0002 36C32 40.4183 28.4182 44 24 44Z"
      fill="white"
    />
    <path d="M26 16H22V40H26V16Z" fill="white" />
    <path
      d="M24 42C27.3137 42 30 39.3137 30 36C30 32.6863 27.3137 30 24 30C20.6863 30 18 32.6863 18 36C18 39.3137 20.6863 42 24 42Z"
      fill="white"
    />
  </svg>
);
