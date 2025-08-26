import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Connecting artisans with art lovers through the beauty of handmade craftsmanship
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">Our Mission</h2>
              <p className="text-amber-700 text-lg mb-4">
                At Craftoria, we believe that every handmade piece tells a story. Our mission is to create a platform 
                where artisans can share their passion and craftsmanship with the world, while art lovers can discover 
                unique, meaningful pieces that bring beauty and authenticity into their lives.
              </p>
              <p className="text-amber-700 text-lg">
                We're committed to preserving traditional crafts while supporting innovation and creativity in the 
                artisan community. Every purchase on our platform directly supports independent artists and helps 
                keep ancient crafting techniques alive for future generations.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/about-mission.jpg"
                alt="Artisan working on craft"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-100 p-6 rounded-2xl shadow-lg">
                <h3 className="text-amber-900 font-bold text-lg">Since 2020</h3>
                <p className="text-amber-700">Supporting artisans worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Authenticity</h3>
              <p className="text-amber-700">
                Every product on our platform is genuinely handmade, ensuring you receive unique pieces with soul and character.
              </p>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Quality</h3>
              <p className="text-amber-700">
                We carefully curate all artisans and products to maintain the highest standards of craftsmanship and materials.
              </p>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Fair Trade</h3>
              <p className="text-amber-700">
                Artisans receive fair compensation for their work, empowering communities and preserving cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-amber-700 font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900">Sarah Johnson</h3>
              <p className="text-amber-600">Founder & CEO</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-amber-700 font-bold">M</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900">Michael Chen</h3>
              <p className="text-amber-600">Head of Curations</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-amber-700 font-bold">P</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900">Priya Sharma</h3>
              <p className="text-amber-600">Artisan Relations</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-amber-700 font-bold">D</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900">David Martinez</h3>
              <p className="text-amber-600">Customer Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">Join Our Community</h2>
          <p className="text-amber-700 text-lg mb-8">
            Whether you're an artisan looking to showcase your work or an art lover seeking unique pieces, 
            we invite you to become part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/crafts"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Crafts
            </Link>
            <Link
              href="/contact"
              className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;