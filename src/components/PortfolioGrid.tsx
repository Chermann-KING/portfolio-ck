import { FC } from "react";
import Image from "next/image";

export interface PortfolioItem {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export const PortfolioGrid: FC<PortfolioGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <div key={item.id} className="portfolio-item">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
          />
          <div className="portfolio-item-overlay">
            <div className="portfolio-item-content">
              <h3 className="text-white font-medium">{item.title}</h3>
              <p className="text-gray-200 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
