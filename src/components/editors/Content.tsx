import { PrismicRichText } from '@prismicio/react';
import React from 'react';

import { PrismicImage } from '@/components/images/PrismicImage';

interface ContentProps {
  data: any;
}

const Content: React.FC<ContentProps> = ({ data }) => {
  const customList = ({ children, key }: any) => {
    return (
      <ul key={key} className="list-disc pl-6 my-4 space-y-2">
        {children}
      </ul>
    );
  };

  const customListItem = ({ children, key }: any) => {
    return (
      <li key={key} className="text-base leading-7 text-color-light font-light">
        {children}
      </li>
    );
  };

  const customLink = ({ node, key, children }: any) => {
    return (
      <a
        key={key}
        href={node.data.url}
        target={node.data.target || '_self'}
        rel={node.data.target === '_blank' ? 'noopener noreferrer' : undefined}
        className="text-blue-500 hover:text-blue-700 underline transition-colors duration-300"
      >
        {children}
      </a>
    );
  };

  const components = {
    hyperlink: customLink,
    image: PrismicImage,
    list: customList, // Hàm tùy chỉnh cho thẻ <ul>
    listItem: customListItem, // Hàm tùy chỉnh cho thẻ <li>
    strong: ({ children }: any) => <strong className=" text-color-dark">{children}</strong>,
    heading1: ({ children }: any) => <h1 className=" text-color-dark my-6">{children}</h1>,
    heading2: ({ children }: any) => <h2 className=" text-color-dark my-5">{children}</h2>,
    heading3: ({ children }: any) => <h3 className=" text-color-dark font-normal mb-4 mt-6">{children}</h3>,
    heading4: ({ children }: any) => <h4 className=" text-color-dark font-normal my-3">{children}</h4>,
    heading5: ({ children }: any) => <h5 className=" text-color-dark font-normal my-2">{children}</h5>,
    paragraph: ({ children }: any) => <p className=" text-color-light leading-7 my-2">{children}</p>,
  };

  return <PrismicRichText field={data} components={components} />;
};

export default Content;
