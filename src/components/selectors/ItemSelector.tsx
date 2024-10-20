import React from 'react';

interface ItemSelectorProps {
  selectedID: string;
  items: any[];
  onSelect: (id: string) => void;
}

const ItemSelector: React.FC<ItemSelectorProps> = ({ selectedID, items, onSelect }) => {
  const handleItemClick = (id: string) => {
    onSelect(id);
  };

  return (
    <div className="overflow-x-auto overflow-y-hidden flex justify-start md:justify-center gap-2 md:gap-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          className={`cursor-pointer flex-shrink-0 px-4 py-2 rounded-lg ${
            selectedID === item.id ? 'bg-primary text-md text-color-dark' : 'bg-gray-100 text-md text-color-light'
          }`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default ItemSelector;
