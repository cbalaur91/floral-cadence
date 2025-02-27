import React from 'react';
import { Flower2, Sparkles } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-rose-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive decor solutions for all your special occasions,
            from stunning floral arrangements to elegant chair and table covers.
          </p>
        </div>
      </div>

      {/* Floral Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Flower2 className="h-8 w-8 text-rose-500" />
            <h2 className="text-3xl font-serif">Floral Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Bridal Bouquets',
                description: 'Handcrafted bouquets tailored to your wedding theme and color palette.',
                image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Centerpieces',
                description: 'Elegant table arrangements that create the perfect ambiance.',
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Floral Arches',
                description: 'Stunning ceremony backdrops and photo opportunities.',
                image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chair & Table Covers Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="h-8 w-8 text-rose-500" />
            <h2 className="text-3xl font-serif">Chair & Table Covers</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Chair Sashes',
                description: 'Elegant sashes in various colors and materials.',
                image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Full Chair Covers',
                description: 'Complete chair covers for a sophisticated look.',
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Table Linens',
                description: 'Premium table covers in various sizes and styles.',
                image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Custom Requirements?</h2>
          <p className="text-gray-600 mb-8">
            We understand that every event is unique. Contact us to discuss your specific needs
            and let us create the perfect ambiance for your special day.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;