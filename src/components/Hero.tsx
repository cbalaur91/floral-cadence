import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Elegant Floral and Decor Services for Your Special Day
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Transform your event into an unforgettable experience with our bespoke floral arrangements 
            and elegant chair & table covers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services" 
              className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
            >
              Our Services
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;