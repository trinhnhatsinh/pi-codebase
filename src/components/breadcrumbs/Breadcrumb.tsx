import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    link: string;
  }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="text-sm mb-6">
      <ol className="flex justify-center space-x-2">
        {items.map((item, index) => (
          <li key={uuidv4()} className="breadcrumb-item flex items-center">
            {index !== items.length - 1 ? (
              <>
                <a href={item.link} className="text-primary hover:text-primary/80 transition-colors">
                  {item.label}
                </a>
                <span className="mx-2 text-gray-400">/</span>
              </>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
