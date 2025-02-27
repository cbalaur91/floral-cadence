import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, imageUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="h-64 w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="h-6 w-6 text-rose-500" />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;