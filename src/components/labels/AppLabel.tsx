import React from 'react';

interface AppLabelProps {
  label?: string;
}

const AppLabel: React.FC<AppLabelProps> = ({ label = 'Label' }) => {
  return (
    <div className="relative w-fit border-2 border-black px-4 py-2">
      <div className="w-3 h-3 bg-primary absolute -top-3 -left-3 z-0" />
      <span className="text-black">{label}</span>
    </div>
  );
};

export default AppLabel;
