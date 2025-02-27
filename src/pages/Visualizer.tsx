import React from 'react';
import CoverVisualizer from '../components/CoverVisualizer';

const Visualizer = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-rose-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Design Your Event</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visualize how different chair and table covers will look at your event.
            Experiment with various styles and colors to find your perfect match.
          </p>
        </div>
      </div>

      {/* Visualizer Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <CoverVisualizer />
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-serif mb-4">Ready to Make Your Vision Reality?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Once you've found your perfect combination, let's discuss bringing it to life
              at your event.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visualizer;