import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
        <p>
          Powered by{' '}
          <a
            href="https://aiwebhub.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-500 hover:text-rose-600 transition-colors"
          >
            AiWebHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;