import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Essential Package',
      price: 'From $500',
      description: 'Perfect for intimate gatherings',
      features: [
        '50 chair covers with sashes',
        '5 table covers',
        '5 centerpieces',
        'Setup and teardown',
        'Delivery included',
      ],
    },
    {
      name: 'Premium Package',
      price: 'From $1,000',
      description: 'Ideal for medium-sized events',
      features: [
        '100 chair covers with sashes',
        '10 table covers',
        '10 centerpieces',
        'Floral arch',
        'Setup and teardown',
        'Delivery included',
      ],
      featured: true,
    },
    {
      name: 'Luxury Package',
      price: 'From $2,000',
      description: 'For grand celebrations',
      features: [
        '200 chair covers with sashes',
        '20 table covers',
        '20 centerpieces',
        'Floral arch',
        'Backdrop decoration',
        'Premium flowers',
        'Setup and teardown',
        'Delivery included',
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-rose-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Packages</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated packages or contact us for a custom quote
            tailored to your specific needs.
          </p>
        </div>
      </div>

      {/* Pricing Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  pkg.featured ? 'ring-2 ring-rose-500' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 right-0 bg-rose-500 text-white px-4 py-1 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-rose-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`block text-center py-3 px-6 rounded-full transition-colors ${
                      pkg.featured
                        ? 'bg-rose-500 text-white hover:bg-rose-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Quote Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-serif mb-4">Need a Custom Package?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Every event is unique. Contact us to discuss your specific requirements
              and we'll create a custom package just for you.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;