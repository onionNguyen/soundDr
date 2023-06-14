import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
<div className="relative w-[600px] h-[400px] rounded-lg overflow-hidden">
  <Image src={imageSrc} alt={title} width={400} height={400} className=" card-image w-full h-full object-cover" />
  <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
  <div className="absolute bottom-0 right-0 p-2 bg-opacity-50 rounded-lg" style={{ backgroundColor: '#d4af37', color: '#1c1c1e', padding: '0.8rem' }}>
  {title}
</div>
</div>

  );
};

export default Card;
