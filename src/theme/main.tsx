import React from 'react';

const ThemeShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-bic-bg p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-bic-navy mb-4 font-lao">
            BIC Theme Showcase
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-lao">
            A comprehensive showcase of the BIC brand theme including colors, typography, and components
          </p>
        </section>

        {/* Color Palette Section */}
        <section>
          <h2 className="text-3xl font-semibold text-bic-navy mb-6 font-lao">Color Palette</h2>
          
          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">Primary Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-full h-24 bg-bic-navy rounded-lg mb-4"></div>
                <h4 className="font-semibold text-bic-navy font-lao">BIC Navy</h4>
                <p className="text-sm text-gray-600 font-mono">--color-bic-navy</p>
                <p className="text-sm text-gray-600">#1C2D59</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-full h-24 bg-bic-navy-light rounded-lg mb-4"></div>
                <h4 className="font-semibold text-bic-navy font-lao">BIC Navy Light</h4>
                <p className="text-sm text-gray-600 font-mono">--color-bic-navy-light</p>
                <p className="text-sm text-gray-600">#2A3D70</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-full h-24 bg-bic-navy-dark rounded-lg mb-4"></div>
                <h4 className="font-semibold text-bic-navy font-lao">BIC Navy Dark</h4>
                <p className="text-sm text-gray-600 font-mono">--color-bic-navy-dark</p>
                <p className="text-sm text-gray-600">#0F1D40</p>
              </div>
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">Accent Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-full h-24 bg-bic-red rounded-lg mb-4"></div>
                <h4 className="font-semibold text-bic-navy font-lao">BIC Red</h4>
                <p className="text-sm text-gray-600 font-mono">--color-bic-red</p>
                <p className="text-sm text-gray-600">#E03C31</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-full h-24 bg-bic-red-light rounded-lg mb-4"></div>
                <h4 className="font-semibold text-bic-navy font-lao">BIC Red Light</h4>
                <p className="text-sm text-gray-600 font-mono">--color-bic-red-light</p>
                <p className="text-sm text-gray-600">#E85A51</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-full h-24 bg-bic-red-dark rounded-lg mb-4"></div>
                <h4 className="font-semibold text-bic-navy font-lao">BIC Red Dark</h4>
                <p className="text-sm text-gray-600 font-mono">--color-bic-red-dark</p>
                <p className="text-sm text-gray-600">#C22A20</p>
              </div>
            </div>
          </div>

          {/* Background Color */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">Background Color</h3>
            <div className="bg-white rounded-lg p-6 shadow-md max-w-sm">
              <div className="w-full h-24 bg-bic-bg border-2 border-gray-200 rounded-lg mb-4"></div>
              <h4 className="font-semibold text-bic-navy font-lao">BIC Background</h4>
              <p className="text-sm text-gray-600 font-mono">--color-bic-bg</p>
              <p className="text-sm text-gray-600">#F5F5F5</p>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-3xl font-semibold text-bic-navy mb-6 font-lao">Typography</h2>
          
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Noto Sans Lao Font Family</h3>
                <p className="text-sm text-gray-600 mb-4 font-mono">font-lao (--font-lao)</p>
                
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold text-bic-navy font-lao">Heading 1</h1>
                  <h2 className="text-4xl font-semibold text-bic-navy font-lao">Heading 2</h2>
                  <h3 className="text-3xl font-medium text-bic-navy font-lao">Heading 3</h3>
                  <h4 className="text-2xl font-medium text-bic-navy font-lao">Heading 4</h4>
                  <h5 className="text-xl font-medium text-bic-navy font-lao">Heading 5</h5>
                  <h6 className="text-lg font-medium text-bic-navy font-lao">Heading 6</h6>
                  
                  <p className="text-base text-gray-700 font-lao leading-relaxed">
                    This is a regular paragraph text using the Noto Sans Lao font family. 
                    It demonstrates the readability and clean appearance of the font for body text.
                  </p>
                  
                  <p className="text-sm text-gray-600 font-lao">
                    This is smaller text often used for captions or secondary information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Component Examples */}
        <section>
          <h2 className="text-3xl font-semibold text-bic-navy mb-6 font-lao">Component Examples</h2>
          
          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">Buttons</h3>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-bic-navy text-white rounded-lg font-medium font-lao hover:bg-bic-navy-dark transition-colors">
                  Primary Button
                </button>
                <button className="px-6 py-3 bg-bic-red text-white rounded-lg font-medium font-lao hover:bg-bic-red-dark transition-colors">
                  Secondary Button
                </button>
                <button className="px-6 py-3 border-2 border-bic-navy text-bic-navy rounded-lg font-medium font-lao hover:bg-bic-navy hover:text-white transition-colors">
                  Outline Button
                </button>
                <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium font-lao hover:bg-gray-300 transition-colors">
                  Neutral Button
                </button>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-bic-navy"></div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-bic-navy mb-2 font-lao">Card Title</h4>
                  <p className="text-gray-600 font-lao">This is a sample card component with BIC navy header.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-bic-red"></div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-bic-navy mb-2 font-lao">Card Title</h4>
                  <p className="text-gray-600 font-lao">This is a sample card component with BIC red header.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-bic-navy to-bic-navy-light"></div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-bic-navy mb-2 font-lao">Card Title</h4>
                  <p className="text-gray-600 font-lao">This is a sample card component with gradient header.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">Form Elements</h3>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-bic-navy mb-2 font-lao">Text Input</label>
                  <input 
                    type="text" 
                    placeholder="Enter text here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bic-navy focus:border-bic-navy font-lao"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-bic-navy mb-2 font-lao">Select Dropdown</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bic-navy focus:border-bic-navy font-lao">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-bic-navy mb-2 font-lao">Textarea</label>
                  <textarea 
                    rows={4}
                    placeholder="Enter longer text here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bic-navy focus:border-bic-navy font-lao"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Badges and Tags */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">Badges and Tags</h3>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-bic-navy text-white text-sm rounded-full font-lao">Navy Badge</span>
                <span className="px-3 py-1 bg-bic-red text-white text-sm rounded-full font-lao">Red Badge</span>
                <span className="px-3 py-1 bg-bic-navy-light text-white text-sm rounded-full font-lao">Light Navy</span>
                <span className="px-3 py-1 border border-bic-navy text-bic-navy text-sm rounded-full font-lao">Outline</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-lao">Neutral</span>
              </div>
            </div>
          </div>

          {/* Alert Components */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">Alert Components</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-bic-navy rounded-full mr-3"></div>
                  <p className="text-bic-navy font-lao">This is an informational alert using BIC navy color.</p>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-bic-red rounded-full mr-3"></div>
                  <p className="text-bic-red font-lao">This is a warning alert using BIC red color.</p>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <p className="text-green-700 font-lao">This is a success alert with complementary colors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Example */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">Navigation Example</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <nav className="bg-bic-navy px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-white font-bold text-lg font-lao">BIC Logo</div>
                  <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-white hover:text-gray-200 transition-colors font-lao">Home</a>
                    <a href="#" className="text-white hover:text-gray-200 transition-colors font-lao">About</a>
                    <a href="#" className="text-white hover:text-gray-200 transition-colors font-lao">Services</a>
                    <a href="#" className="text-white hover:text-gray-200 transition-colors font-lao">Contact</a>
                  </div>
                  <button className="px-4 py-2 bg-bic-red text-white rounded-lg font-lao hover:bg-bic-red-dark transition-colors">
                    Get Started
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className="text-3xl font-semibold text-bic-navy mb-6 font-lao">Usage Guidelines</h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">Color Usage</h3>
                <ul className="space-y-2 text-gray-700 font-lao">
                  <li>• Use BIC Navy as the primary brand color for headers and main CTAs</li>
                  <li>• Use BIC Red for accent elements and important highlights</li>
                  <li>• Use the light and dark variants for hover states and depth</li>
                  <li>• Maintain adequate contrast ratios for accessibility</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-bic-navy mb-4 font-lao">Typography</h3>
                <ul className="space-y-2 text-gray-700 font-lao">
                  <li>• Use Noto Sans Lao for all text elements</li>
                  <li>• Apply font-lao class for proper font rendering</li>
                  <li>• Maintain consistent hierarchy with heading sizes</li>
                  <li>• Ensure readability with proper line spacing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Classes Reference */}
        <section>
          <h2 className="text-3xl font-semibold text-bic-navy mb-6 font-lao">CSS Classes Reference</h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium text-bic-navy mb-3 font-lao">Colors</h3>
                <div className="text-sm space-y-1 font-mono">
                  <p>bg-bic-navy</p>
                  <p>bg-bic-navy-light</p>
                  <p>bg-bic-navy-dark</p>
                  <p>bg-bic-red</p>
                  <p>bg-bic-red-light</p>
                  <p>bg-bic-red-dark</p>
                  <p>bg-bic-bg</p>
                  <p>text-bic-navy</p>
                  <p>text-bic-red</p>
                  <p>border-bic-navy</p>
                  <p>border-bic-red</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-bic-navy mb-3 font-lao">Typography</h3>
                <div className="text-sm space-y-1 font-mono">
                  <p>font-lao</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-bic-navy mb-3 font-lao">Focus States</h3>
                <div className="text-sm space-y-1 font-mono">
                  <p>focus:ring-bic-navy</p>
                  <p>focus:border-bic-navy</p>
                  <p>hover:bg-bic-navy</p>
                  <p>hover:bg-bic-red</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ThemeShowcase;
