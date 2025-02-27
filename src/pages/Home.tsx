import React from 'react';
import Hero from '../components/Hero';
import { Flower2, Users, PartyPopper } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      title: 'Wedding Decor',
      description: 'Make your special day unforgettable with our elegant floral arrangements and sophisticated chair covers.',
      icon: Flower2,
      imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Baptism Celebrations',
      description: 'Create a serene and joyful atmosphere for your child\'s baptism with our carefully curated decorations.',
      icon: Users,
      imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Party Setup',
      description: 'Transform any venue into a stunning party space with our wide selection of decor options.',
      icon: PartyPopper,
      imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div>
      <Hero />
      
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we provide everything you need
            to create the perfect atmosphere for your special event.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Ready to Start Planning?</h2>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;