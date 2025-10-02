'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-slate-900">AL HADI EXPORTS</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              <a href="#home" className="text-slate-700 hover:text-teal-600 transition-colors">Home</a>
              <a href="#products" className="text-slate-700 hover:text-teal-600 transition-colors">Products</a>
              <a href="#facilities" className="text-slate-700 hover:text-teal-600 transition-colors">Facilities</a>
              <a href="#clients" className="text-slate-700 hover:text-teal-600 transition-colors">Clients</a>
              <a href="#certifications" className="text-slate-700 hover:text-teal-600 transition-colors">Certifications</a>
              <a href="#contact" className="text-slate-700 hover:text-teal-600 transition-colors">Contact</a>
            </nav>

            {/* Download Company Profile Button */}
            <div className="hidden md:flex">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Company Profile
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-teal-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
                <a href="#home" className="block px-3 py-2 text-slate-700 hover:text-teal-600">Home</a>
                <a href="#products" className="block px-3 py-2 text-slate-700 hover:text-teal-600">Products</a>
                <a href="#facilities" className="block px-3 py-2 text-slate-700 hover:text-teal-600">Facilities</a>
                <a href="#clients" className="block px-3 py-2 text-slate-700 hover:text-teal-600">Clients</a>
                <a href="#certifications" className="block px-3 py-2 text-slate-700 hover:text-teal-600">Certifications</a>
                <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-teal-600">Contact</a>
                <div className="px-3 py-2">
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Company Profile
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                AL HADI
                <span className="block text-teal-400">EXPORTS</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl">
                A Leading Manufacturer and Exporter of High-Quality Knit and Retail Garments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Company Profile (PDF)
                </button>
                <a
                  href="#products"
                  className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Explore Our Products
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Global Shipping & Textile Visual */}
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-teal-500/20 to-slate-700/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-400/30">
                  <div className="text-center">
                    {/* Globe with shipping routes */}
                    <svg className="w-32 h-32 md:w-40 md:h-40 text-teal-400 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                      <path d="M2 12h20" strokeWidth="1.5"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="1.5"/>
                      <path d="M8 12c0-4 2-8 4-8s4 4 4 8-2 8-4 8-4-4-4-8z" strokeWidth="1"/>
                    </svg>
                    {/* Textile/Fabric representation */}
                    <div className="flex justify-center space-x-2 mb-2">
                      <div className="w-3 h-8 bg-teal-400 rounded-full opacity-80"></div>
                      <div className="w-3 h-6 bg-teal-300 rounded-full opacity-60"></div>
                      <div className="w-3 h-10 bg-teal-500 rounded-full opacity-90"></div>
                      <div className="w-3 h-7 bg-teal-400 rounded-full opacity-70"></div>
                    </div>
                    <p className="text-teal-300 text-sm font-medium">Global Textile Excellence</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-400/40">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-slate-700/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-500/40">
                  <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Products</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Premium quality garments crafted with precision and attention to detail for global markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Men's Apparel</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Formal Shirts & Dress Shirts</li>
                <li>• Casual Wear & T-Shirts</li>
                <li>• Trousers & Chinos</li>
                <li>• Polo Shirts & Sportswear</li>
                <li>• Jackets & Outerwear</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Women's Apparel</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Blouses & Formal Tops</li>
                <li>• Dresses & Evening Wear</li>
                <li>• Casual Wear & Tunics</li>
                <li>• Skirts & Trousers</li>
                <li>• Knitwear & Cardigans</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Children's Wear</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• School Uniforms</li>
                <li>• Casual Play Wear</li>
                <li>• Formal Children's Clothing</li>
                <li>• Baby & Toddler Apparel</li>
                <li>• Seasonal Collections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Facilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              State-of-the-art manufacturing facilities equipped with modern technology and skilled workforce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Manufacturing Excellence</h3>
              <p className="text-slate-600 mb-6">
                Our modern production facility spans over 50,000 square feet, housing advanced machinery 
                and equipment for efficient garment manufacturing. We maintain strict quality standards 
                throughout our production process.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">50,000</div>
                  <div className="text-slate-600">Sq Ft Facility</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">200+</div>
                  <div className="text-slate-600">Skilled Workers</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Advanced Machinery</h4>
                <p className="text-slate-600 text-sm">Latest sewing and cutting equipment</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Quality Control</h4>
                <p className="text-slate-600 text-sm">Dedicated QC department</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Warehouse</h4>
                <p className="text-slate-600 text-sm">Climate-controlled storage</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Power Backup</h4>
                <p className="text-slate-600 text-sm">Uninterrupted production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Valued Clients</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by leading brands and retailers across the globe for quality and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-slate-600">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-slate-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">99%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">European Markets</h3>
              <p className="text-slate-600 mb-4">Leading fashion retailers and brands across Europe trust us for premium quality garments.</p>
              <div className="text-teal-600 font-semibold">UK • Germany • France • Italy</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">North American Brands</h3>
              <p className="text-slate-600 mb-4">Established partnerships with major clothing brands and department stores in North America.</p>
              <div className="text-teal-600 font-semibold">USA • Canada • Mexico</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Asia-Pacific Partners</h3>
              <p className="text-slate-600 mb-4">Strong presence in Asian markets with growing partnerships across the region.</p>
              <div className="text-teal-600 font-semibold">Australia • Japan • Singapore</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Committed to maintaining the highest industry standards and certifications for quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ISO 9001:2015</h3>
              <p className="text-slate-600 text-sm">Quality Management System certification</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">OEKO-TEX</h3>
              <p className="text-slate-600 text-sm">Textile safety and environmental standards</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">BSCI</h3>
              <p className="text-slate-600 text-sm">Business Social Compliance Initiative</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GOTS</h3>
              <p className="text-slate-600 text-sm">Global Organic Textile Standard</p>
            </div>
          </div>

          <div className="mt-16 bg-slate-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Commitment to Excellence</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Quality Assurance</h4>
                <p className="text-slate-600 text-sm">Rigorous testing and inspection at every stage</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Ethical Manufacturing</h4>
                <p className="text-slate-600 text-sm">Fair labor practices and sustainable production</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Environmental Responsibility</h4>
                <p className="text-slate-600 text-sm">Eco-friendly processes and materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive garment manufacturing and export solutions tailored to meet your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Manufacturing</h3>
              <p className="text-slate-700 mb-4">
                Tailored garment production services to meet your specific design requirements, from concept to finished product.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Pattern development and sampling</li>
                <li>• Fabric sourcing and selection</li>
                <li>• Quality control and testing</li>
                <li>• Bulk production management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Global Export</h3>
              <p className="text-slate-700 mb-4">
                Comprehensive export services ensuring your products reach international markets efficiently and safely.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• International shipping and logistics</li>
                <li>• Export documentation and compliance</li>
                <li>• Customs clearance assistance</li>
                <li>• Supply chain management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quality Assurance</h3>
              <p className="text-slate-700 mb-4">
                Rigorous quality control processes to ensure every garment meets international standards and customer expectations.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Pre-production quality planning</li>
                <li>• In-line production monitoring</li>
                <li>• Final inspection and testing</li>
                <li>• Compliance certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to start your next project? Contact us today for a consultation and discover how we can help bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-slate-300">Industrial Area, Textile Hub<br />Manufacturing District<br />Export Zone, Country</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-slate-300">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-slate-300">info@alhadiexports.com<br />sales@alhadiexports.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">AL HADI EXPORTS</h3>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-teal-400">Our Mission</h4>
                <p className="text-slate-300 mb-4">
                  To deliver premium quality garments that exceed international standards while maintaining 
                  ethical manufacturing practices and building lasting partnerships with clients worldwide.
                </p>
                <p className="text-slate-300">
                  We are committed to excellence in every aspect of our business, from sourcing the finest 
                  materials to ensuring timely delivery and exceptional customer service.
                </p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Key Products</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Men's Formal & Casual Wear</li>
                <li>• Women's Apparel & Dresses</li>
                <li>• Children's Clothing</li>
                <li>• School Uniforms</li>
                <li>• Corporate Workwear</li>
                <li>• Seasonal Collections</li>
                <li>• Custom Manufacturing</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Contact Info</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-teal-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Karachi, Pakistan</p>
                    <p className="text-sm">Industrial Area, Export Processing Zone</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p>info@alhadiexports.com</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p>+92 21 1234 5678</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div className="text-slate-400">
                <p>&copy; 2024 AL HADI EXPORTS. All rights reserved.</p>
                <p className="text-sm mt-1">Registered Export Company - Pakistan Export Processing Zone Authority</p>
              </div>
              <div className="text-slate-400 text-sm md:text-right">
                <p>ISO 9001:2015 Certified | OEKO-TEX Standard 100</p>
                <p className="mt-1">Privacy Policy | Terms of Service | Export Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
