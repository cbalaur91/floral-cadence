import React from 'react';
import { Check } from 'lucide-react';

const ColorPalette = () => {
  const colorCategories = [
    {
      name: 'Whites & Ivories',
      colors: [
        { name: 'Pure White', hex: '#FFFFFF', border: true },
        { name: 'Ivory', hex: '#FFFFF0' },
        { name: 'Pearl', hex: '#F5F5F1' },
        { name: 'Cream', hex: '#FFFDD0' },
        { name: 'Off-White', hex: '#FAF9F6' },
      ],
    },
    {
      name: 'Pastels',
      colors: [
        { name: 'Blush Pink', hex: '#FFB6C1' },
        { name: 'Baby Blue', hex: '#89CFF0' },
        { name: 'Mint Green', hex: '#98FF98' },
        { name: 'Lavender', hex: '#E6E6FA' },
        { name: 'Peach', hex: '#FFE5B4' },
      ],
    },
    {
      name: 'Rich Colors',
      colors: [
        { name: 'Burgundy', hex: '#800020' },
        { name: 'Navy Blue', hex: '#000080' },
        { name: 'Forest Green', hex: '#228B22' },
        { name: 'Royal Purple', hex: '#7851A9' },
        { name: 'Deep Red', hex: '#DC143C' },
      ],
    },
    {
      name: 'Metallics',
      colors: [
        { name: 'Gold', hex: '#FFD700' },
        { name: 'Silver', hex: '#C0C0C0', border: true },
        { name: 'Rose Gold', hex: '#B76E79' },
        { name: 'Champagne', hex: '#F7E7CE' },
        { name: 'Bronze', hex: '#CD7F32' },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-rose-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Color Palette</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection of premium fabrics in a variety of elegant colors.
            Each shade is carefully selected to complement your event's theme and create the perfect atmosphere.
          </p>
        </div>
      </div>

      {/* Color Categories */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-16">
          {colorCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-3xl font-serif mb-8">{category.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.colors.map((color) => (
                  <div
                    key={color.name}
                    className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
                  >
                    <div
                      className={`absolute inset-0 ${color.border ? 'border border-gray-200' : ''}`}
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="text-white font-medium text-center">{color.name}</p>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 flex items-center justify-center">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Transform Your Event?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team will help you choose the perfect colors to match your vision and create
            an unforgettable atmosphere for your special day.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;