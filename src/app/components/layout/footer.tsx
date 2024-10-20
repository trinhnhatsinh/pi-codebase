'use client';
import React from 'react';

import { contact, menu } from '@/data/app';

import { ContactInterface, MenuInterface } from '@/constant/interfaces';

// Import FontAwesome cho icon

export default function ComponentFooter() {
  return (
    <footer className=" px-4 py-6 mt-6">
      <nav className="bg-white py-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex items-end">
            <img
              src="https://images.prismic.io/xpixel/Zw6OdIF3NbkBXeJ-_Group13.png?auto=format,compress"
              alt="Green spark icon"
              className="mr-2 h-8 w-8"
            />
            <span className="font-semibold text-lg text-gray-800">19team.com</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {menu.map((item: MenuInterface) => (
              <a key={item.id} href={item.route} className="text-color-light hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex space-x-4">
          {contact.map((item: ContactInterface) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-color-light"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </nav>
      <div className="max-w-7xl mx-auto flex justify-between items-center border-t border-gray-400 pt-6">
        <span className="text-gray-700 text-sm">&copy; 2024 19team Template</span>
        <div className="text-gray-700 text-sm">
          <span>Made by no0.19team</span>
        </div>
      </div>
    </footer>
  );
}
