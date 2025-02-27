import React, { useState } from 'react';
import { Check } from 'lucide-react';
import type { CoverVisualizerState } from '../types';

const CoverVisualizer = () => {
  const [state, setState] = useState<CoverVisualizerState>({
    chairType: 'Sash',
    chairColor: 'White',
    tableType: 'Round',
    tableColor: 'White',
    selectedView: 'chair',
  });

  const colors = [
    { name: 'White', hex: '#FFFFFF', border: true },
    { name: 'Ivory', hex: '#FFFFF0' },
    { name: 'Red', hex: '#DC2626' },
    { name: 'Blue', hex: '#2563EB' },
    { name: 'Gold', hex: '#D4AF37' },
  ] as const;

  const chairImages = {
    Sash: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=800&q=80',
    'Full Cover': 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
  };

  const tableImages = {
    Round: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
    Rectangular: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80',
  };

  const getImageUrl = () => {
    return state.selectedView === 'chair' 
      ? chairImages[state.chairType]
      : tableImages[state.tableType];
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* View Selector */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setState({ ...state, selectedView: 'chair' })}
          className={`flex-1 py-4 px-6 rounded-xl text-lg font-medium transition-colors ${
            state.selectedView === 'chair'
              ? 'bg-rose-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Chair Covers
        </button>
        <button
          onClick={() => setState({ ...state, selectedView: 'table' })}
          className={`flex-1 py-4 px-6 rounded-xl text-lg font-medium transition-colors ${
            state.selectedView === 'table'
              ? 'bg-rose-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Table Covers
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Preview Section */}
        <div className="relative">
          <div className="sticky top-24">
            <div className="aspect-w-4 aspect-h-3 mb-6">
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl">
                <img
                  src={getImageUrl()}
                  alt={state.selectedView === 'chair' ? 'Chair Preview' : 'Table Preview'}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundColor: state.selectedView === 'chair' 
                      ? colors.find(c => c.name === state.chairColor)?.hex 
                      : colors.find(c => c.name === state.tableColor)?.hex,
                    mixBlendMode: 'multiply',
                    opacity: 0.4,
                  }}
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-medium mb-2">
                {state.selectedView === 'chair' ? state.chairType : state.tableType} Cover
              </p>
              <p className="text-gray-600">
                Color: {state.selectedView === 'chair' ? state.chairColor : state.tableColor}
              </p>
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="space-y-8">
          {/* Type Selection */}
          <div>
            <h3 className="text-xl font-medium mb-4">Select Style</h3>
            <div className="grid grid-cols-2 gap-4">
              {state.selectedView === 'chair' ? (
                <>
                  <button
                    onClick={() => setState({ ...state, chairType: 'Sash' })}
                    className={`p-4 rounded-xl border-2 transition-colors ${
                      state.chairType === 'Sash'
                        ? 'border-rose-500 bg-rose-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium mb-1">Sash</div>
                    <div className="text-sm text-gray-600">Elegant sash design</div>
                  </button>
                  <button
                    onClick={() => setState({ ...state, chairType: 'Full Cover' })}
                    className={`p-4 rounded-xl border-2 transition-colors ${
                      state.chairType === 'Full Cover'
                        ? 'border-rose-500 bg-rose-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium mb-1">Full Cover</div>
                    <div className="text-sm text-gray-600">Complete coverage</div>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setState({ ...state, tableType: 'Round' })}
                    className={`p-4 rounded-xl border-2 transition-colors ${
                      state.tableType === 'Round'
                        ? 'border-rose-500 bg-rose-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium mb-1">Round</div>
                    <div className="text-sm text-gray-600">For circular tables</div>
                  </button>
                  <button
                    onClick={() => setState({ ...state, tableType: 'Rectangular' })}
                    className={`p-4 rounded-xl border-2 transition-colors ${
                      state.tableType === 'Rectangular'
                        ? 'border-rose-500 bg-rose-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium mb-1">Rectangular</div>
                    <div className="text-sm text-gray-600">For rectangular tables</div>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-xl font-medium mb-4">Select Color</h3>
            <div className="grid grid-cols-5 gap-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => 
                    setState({ 
                      ...state, 
                      [state.selectedView === 'chair' ? 'chairColor' : 'tableColor']: color.name 
                    })
                  }
                  className="relative aspect-square rounded-xl overflow-hidden group"
                >
                  <div
                    className={`absolute inset-0 ${color.border ? 'border border-gray-200' : ''}`}
                    style={{ backgroundColor: color.hex }}
                  />
                  {((state.selectedView === 'chair' && state.chairColor === color.name) ||
                    (state.selectedView === 'table' && state.tableColor === color.name)) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 group-hover:bg-black/10 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Price Information */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-2xl font-medium mb-2">
              ${state.selectedView === 'chair' ? '5.99' : '12.99'} each
            </div>
            <p className="text-gray-600">
              Bulk discounts available for orders of 50+ items
            </p>
            <a
              href="/contact"
              className="mt-4 block w-full py-3 px-4 bg-rose-500 text-white text-center rounded-lg hover:bg-rose-600 transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CoverVisualizer