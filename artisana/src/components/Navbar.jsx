// components/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isArtist, setIsArtist] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check authentication status
  useEffect(() => {
    // Mock authentication check - replace with your actual auth logic
    const authStatus = localStorage.getItem('craftoria-auth');
    const userType = localStorage.getItem('craftoria-user-type');
    
    if (authStatus === 'logged-in') {
      setIsLoggedIn(true);
      setIsArtist(userType === 'artist');
    }
  }, []);

  const handleLogout = () => {
    // Mock logout functionality
    localStorage.removeItem('craftoria-auth');
    localStorage.removeItem('craftoria-user-type');
    setIsLoggedIn(false);
    setIsArtist(false);
    setMobileMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return pathname === path ? 'text-amber-600 font-semibold' : 'text-gray-700 hover:text-amber-600';
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center text-xl font-bold text-amber-800">
              <Image src="/logo.png" alt="Artisana" width={90} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ${isActiveLink('/')}`}>
              Home
            </Link>
            <Link href="/crafts" className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ${isActiveLink('/crafts')}`}>
              Crafts
            </Link>
            <Link href="/artists" className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ${isActiveLink('/artists')}`}>
              Artists
            </Link>
            
            {isLoggedIn && isArtist && (
              <>
                <Link href="/dashboard" className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ${isActiveLink('/dashboard')}`}>
                  Dashboard
                </Link>
                <Link href="/add-craft" className="px-3 py-2 rounded-md text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 transition duration-150">
                  Add Craft
                </Link>
              </>
            )}
            
            <Link href="/gallery" className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ${isActiveLink('/gallery')}`}>
              Gallery
            </Link>
            <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ${isActiveLink('/about')}`}>
              About
            </Link>
            
            {isLoggedIn ? (
              <button 
                onClick={handleLogout}
                className="px-3 py-2 rounded-md text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition duration-150"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="px-3 py-2 rounded-md text-sm font-medium border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition duration-150">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition duration-150"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium transition duration-150 ${isActiveLink('/')}`} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/crafts" className={`block px-3 py-2 rounded-md text-base font-medium transition duration-150 ${isActiveLink('/crafts')}`} onClick={() => setMobileMenuOpen(false)}>
            Crafts
          </Link>
          <Link href="/artists" className={`block px-3 py-2 rounded-md text-base font-medium transition duration-150 ${isActiveLink('/artists')}`} onClick={() => setMobileMenuOpen(false)}>
            Artists
          </Link>
          
          {isLoggedIn && isArtist && (
            <>
              <Link href="/dashboard" className={`block px-3 py-2 rounded-md text-base font-medium transition duration-150 ${isActiveLink('/dashboard')}`} onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </Link>
              <Link href="/add-craft" className="block px-3 py-2 rounded-md text-base font-medium bg-amber-600 text-white hover:bg-amber-700 transition duration-150" onClick={() => setMobileMenuOpen(false)}>
                Add Craft
              </Link>
            </>
          )}
          
          <Link href="/gallery" className={`block px-3 py-2 rounded-md text-base font-medium transition duration-150 ${isActiveLink('/gallery')}`} onClick={() => setMobileMenuOpen(false)}>
            Gallery
          </Link>
          <Link href="/about" className={`block px-3 py-2 rounded-md text-base font-medium transition duration-150 ${isActiveLink('/about')}`} onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition duration-150"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition duration-150" onClick={() => setMobileMenuOpen(false)}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;