import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const artisans = [
  {
    imgSrc: "https://i.postimg.cc/bwrY3wrN/photo-2025-08-12-23-30-26.jpg",
    name: "Moinul Islam",
    title: "Master Woodcarver",
    description: "Specializing in intricate Islamic geometric patterns with over 20 years of experience in traditional woodworking techniques."
  },
  {
    imgSrc: "https://i.postimg.cc/GmdYyNYq/happy-confident-muslim-business-lady-posing-outside.jpg",
    name: "Amina Khaled",
    title: "Ceramics Artist",
    description: "Creates stunning hand-painted pottery inspired by traditional Islamic art with contemporary influences."
  },
  {
    imgSrc: "https://i.postimg.cc/XYtbhM8g/businessman-dress-code-looks-motivated.jpg",
    name: "Yusuf Abdullah",
    title: "Textile Weaver",
    description: "Expert in crafting luxurious fabrics using ancient loom techniques and natural dyeing processes."
  },
  {
    imgSrc: "https://i.postimg.cc/q7ZCWvF5/international-day-education-celebration.jpg",
    name: "Fatima Al-Mansoor",
    title: "Metalwork Artisan",
    description: "Creates exquisite brass and copper pieces using traditional hammering and engraving methods."
  },
  {
    imgSrc: "https://i.postimg.cc/q7gNcd7X/medium-shot-young-pastor-holding-bible.jpg",
    name: "Zainab Ibrahim",
    title: "Calligraphy Artist",
    description: "Specializes in Arabic calligraphy, transforming sacred texts into beautiful works of art."
  },
  {
    imgSrc: "https://i.postimg.cc/3N24yCxs/front-view-smiley-business-man.jpg",
    name: "Khalid Hassan",
    title: "Glass Blower",
    description: "Creates stunning stained glass and blown glass pieces inspired by Islamic architectural elements."
  }
];

export default function ArtisansPage() {
  return (
    <div className="min-h-screen bg-amber-50/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Meet Our Artisans</h1>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Discover the talented craftspeople behind our exquisite handmade creations. 
            Each artisan brings generations of tradition and unique skills to their work.
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisans.map((artisan, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-72">
                <Image
                  src={artisan.imgSrc}
                  alt={artisan.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm mb-2">{artisan.description}</p>
                    <div className="flex space-x-2 mt-3">
                      <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded">15+ Years</span>
                      <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded">Traditional</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{artisan.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{artisan.title}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{artisan.description}</p>
                
                <div className="flex justify-between items-center">
                  <Link 
                    href={`#`}
                    className="text-amber-700 hover:text-amber-900 font-medium text-sm flex items-center"
                  >
                    View Portfolio
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 hover:bg-amber-200 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 hover:bg-amber-200 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-amber-100 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Become Part of Our Artisan Community</h2>
          <p className="text-amber-800 mb-6 max-w-2xl mx-auto">
            Are you a skilled craftsperson with a passion for traditional techniques? 
            Join our platform to showcase your work to a global audience.
          </p>
          <button className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            Apply as an Artisan
          </button>
        </div>
      </div>
    </div>
  );
}