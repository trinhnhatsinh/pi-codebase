'use client';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface LinkButtonProps {
  label: string;
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="w-fit h-fit bg-primary hover:bg-primary/80 text-color-dark font-normal py-3 px-5 rounded inline-flex items-center space-x-2"
    >
      <span>{label}</span>
      <FaArrowRight className="text-color-dark" />
    </a>
  );
};

export default LinkButton;
