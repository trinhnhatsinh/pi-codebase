import React from 'react';

import { TagInterface } from '@/constant/interfaces';

interface NoteTagProps {
  items: TagInterface[];
}

const NoteTag: React.FC<NoteTagProps> = ({ items }) => {
  return (
    <div className="flex justify-start flex-wrap gap-2">
      {items.map(item => (
        <div key={item.id} className="cursor-pointer px-4 py-2 rounded-lg bg-gray-100 text-md text-color-light}">
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default NoteTag;
