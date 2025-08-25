import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-amber-50 text-amber-900 mt-16 border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-5">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center text-xl font-bold text-amber-700">
                  <Image src="/logo.png" alt="Artisana" width={90} height={40} />
                </Link>
              </div>
            </div>
            <p className="text-amber-700 mb-6 max-w-md leading-relaxed">
              Connecting artisans with art lovers. Discover unique handmade crafts and support independent artists from around the world.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { name: "Facebook", href: "#", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { name: "Instagram", href: "#", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { name: "Twitter", href: "#", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                { name: "Pinterest", href: "#", icon: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="bg-amber-100 hover:bg-amber-200 p-2 rounded-full text-amber-700 hover:text-amber-900 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={item.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-800 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {["All Crafts", "Featured Artists", "Gallery", "Inspiration Blog", "Events & Workshops"].map(
                (text, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-amber-700 hover:text-amber-900 transition-colors"
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-amber-800 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {["About Us", "Contact", "FAQ", "Shipping & Returns", "Privacy Policy"].map(
                (text, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-amber-700 hover:text-amber-900 transition-colors"
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-amber-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-800">Stay updated with Craftoria</h3>
              <p className="text-amber-700 text-sm">
                Get the latest on new crafts, artists, and exclusive offers
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-900 w-full md:w-72 border border-amber-300"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-r-lg transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-amber-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-600 text-sm">
            © {new Date().getFullYear()} Artisana. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="text-amber-600 hover:text-amber-800 text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;