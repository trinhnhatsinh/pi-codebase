'use client';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface MoreButtonProps {
  label: string;
  onClick: () => void;
}

const MoreButton: React.FC<MoreButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-primary hover:bg-primary/80 text-color-dark font-normal py-3 px-6 rounded inline-flex items-center space-x-2"
      onClick={onClick}
    >
      <span>{label}</span>
      <FaArrowRight className="text-color-dark" />
    </button>
  );
};

export default MoreButton;
