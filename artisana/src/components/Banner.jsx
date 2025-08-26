import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="bg-amber-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
              Discover Handcrafted Treasures from Talented Artisans
            </h1>
            
            <p className="text-lg md:text-xl text-amber-700 leading-relaxed">
              Explore unique, handmade creations that tell a story. Each piece is crafted with passion, skill, and a touch of magic that only true artisans can provide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/crafts"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors duration-300 transform hover:scale-105"
              >
                Explore Collection
              </Link>
              
              <Link
                href="/artisans"
                className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors duration-300"
              >
                Meet Artisans
              </Link>
            </div>
            
            <div className="flex items-center mt-10 space-x-8 text-amber-800">
              <div className="text-center">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm">Artisans</p>
              </div>
              <div className="h-8 w-px bg-amber-300"></div>
              <div className="text-center">
                <p className="text-2xl font-bold">2K+</p>
                <p className="text-sm">Handmade Products</p>
              </div>
              <div className="h-8 w-px bg-amber-300"></div>
              <div className="text-center">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/banner.jpeg"
                alt="Handcrafted artisan products"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-50 z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-amber-300 rounded-full opacity-40 z-0"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white shadow-xl rounded-xl p-4 transform rotate-3">
              <div className="flex items-center">
                <div className="bg-amber-100 p-2 rounded-full mr-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-900">100% Handmade</p>
                  <p className="text-xs text-amber-600">Quality Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;