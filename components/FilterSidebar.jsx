import React from 'react';

const FilterSidebar = () => {
  const collapsedMenus = [
    'Category',
    'Colors',
    'Price Range',
    'Collections',
    'Tags',
    'Ratings',
  ];

  return (
    <aside className="w-64 p-4 text-gray-900 bg-[#f8f8f8]">
      {/* Added bg-[#f8f8f8] to force the light background */}
      
      <h2 className="text-2xl font-bold mb-8">Filters</h2>

      {/* Size Section */}
      <div className="mb-8">
        <h3 className="text-base font-bold mb-4">Size</h3>
        <div className="flex flex-wrap gap-2">
          {['XS', 'S', 'M', 'L', 'XL', '2X'].map((size) => (
            <button
              key={size}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 text-sm hover:bg-gray-200 transition-colors bg-white"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Availability Section (Expanded) */}
      <div className="mb-4 pb-4 border-b border-dotted border-gray-400">
        <div className="flex justify-between items-center mb-4 cursor-pointer">
          <h3 className="text-base font-bold">Availability</h3>
          {/* Up Arrow Icon */}
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
          </svg>
        </div>
        
        <div className="space-y-3">
          {/* Checkbox 1 */}
          <label className="flex items-center cursor-pointer group">
            <div className="relative flex items-center">
              <input type="checkbox" className="w-4 h-4 border-gray-400 bg-white rounded-sm appearance-none border group-hover:border-gray-500 checked:bg-gray-900 checked:border-gray-900 focus:ring-0 cursor-pointer" />
              <svg className="absolute w-4 h-4 text-white hidden peer-checked:block pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="ml-3 text-sm text-gray-700 flex-1">Availability</span>
            <span className="text-sm text-blue-700 font-medium">(450)</span>
          </label>

          {/* Checkbox 2 */}
          <label className="flex items-center cursor-pointer group">
            <div className="relative flex items-center">
              <input type="checkbox" className="w-4 h-4 border-gray-400 bg-white rounded-sm appearance-none border group-hover:border-gray-500 checked:bg-gray-900 checked:border-gray-900 focus:ring-0 cursor-pointer" />
            </div>
            <span className="ml-3 text-sm text-gray-700 flex-1">Out Of Stock</span>
            <span className="text-sm text-blue-700 font-medium">(18)</span>
          </label>
        </div>
      </div>

      {/* Collapsed Menu Sections */}
      <div className="space-y-4 mt-2">
        {collapsedMenus.map((item) => (
          <div key={item} className="pb-4 border-b border-dotted border-gray-400">
            <div className="flex justify-between items-center cursor-pointer group">
              <h3 className="text-base font-bold">{item}</h3>
              {/* Right Arrow Icon */}
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;