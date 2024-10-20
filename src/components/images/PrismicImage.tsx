interface PrismicImageProps {
  node: any;
  key: any;
}

export const PrismicImage = ({ node, key }: PrismicImageProps) => {
  return (
    <figure key={key} className="flex flex-col items-center my-4">
      <img
        src={node.url}
        alt={node.alt || 'Ảnh từ Hello Hoài Nhơn'}
        title={node.title}
        width={node.dimensions.width}
        height={node.dimensions.height}
        className="rounded-lg max-w-full h-auto"
      />
      {node.alt && <figcaption className="mt-2 text-sm font-light text-gray-400 italic">{node.alt}</figcaption>}
    </figure>
  );
};
