'use client';
import React from 'react';

import { menu } from '@/data/app';

import LinkButton from '@/components/buttons/LinkButton';

import { MenuInterface } from '@/constant/interfaces';

export default function ComponentHeader() {
  return (
    <header className="bg-white shadow sticky top-0 z-20">
      <div className="max-w-7xl mx-auto py-4">
        <nav className="grid grid-cols-4">
          <a href="/" className="flex items-center">
            <img
              className="h-8 w-8"
              src="https://images.prismic.io/xpixel/Zw6OdIF3NbkBXeJ-_Group13.png?auto=format,compress"
              alt="Placeholder image representing the company logo, labeled Synether"
            />
            <p className="text-xl align-bottom font-bold ml-3 mt-2">19team.com</p>
          </a>
          <div className="col-span-2 flex justify-center items-center gap-8">
            {menu.map((item: MenuInterface) => (
              <a key={item.id} href={item.route} className="text-color-dark font-medium hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex justify-end items-center">
            <LinkButton label="Chọn mẫu" href="/template" />
          </div>
        </nav>
      </div>
    </header>
  );
}
