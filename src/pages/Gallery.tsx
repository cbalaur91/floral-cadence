import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState<'all' | 'wedding' | 'baptism' | 'party'>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      category: 'wedding',
      title: 'Elegant Wedding Setup',
      description: 'A beautiful wedding venue decorated with white and gold accents',
    },
    {
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      category: 'baptism',
      title: 'Baptism Celebration',
      description: 'Serene baptism setup with soft pastel colors',
    },
    {
      url: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      category: 'party',
      title: 'Birthday Party Decor',
      description: 'Vibrant party decorations with floral centerpieces',
    },
    {
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      category: 'wedding',
      title: 'Garden Wedding',
      description: 'Outdoor wedding setup with natural floral arrangements',
    },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-rose-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of past events and get inspired for your special day.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { value: 'all', label: 'All Events' },
            { value: 'wedding', label: 'Weddings' },
            { value: 'baptism', label: 'Baptisms' },
            { value: 'party', label: 'Parties' },
          ].map((button) => (
            <button
              key={button.value}
              onClick={() => {
                setFilter(button.value as typeof filter);
                setCurrentImageIndex(0);
              }}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === button.value
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-900">
          {/* Main Image */}
          <div className="absolute inset-0 transition-opacity duration-500">
            <img
              src={filteredImages[currentImageIndex].url}
              alt={filteredImages[currentImageIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-2xl font-serif mb-2">
              {filteredImages[currentImageIndex].title}
            </h3>
            <p className="text-white/80">
              {filteredImages[currentImageIndex].description}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-4">
            {filteredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;