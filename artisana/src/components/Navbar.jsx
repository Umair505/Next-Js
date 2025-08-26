"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (path) => {
    return pathname === path
      ? "text-amber-600 font-semibold"
      : "text-gray-700 hover:text-amber-600 transition-colors";
  };

  return (
    <nav className="bg-white sticky backdrop-blur-lg top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center text-xl font-bold text-amber-700">
              <Image src="/logo.png" alt="Artisana" width={90} height={40} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={isActiveLink("/")} prefetch>
              Home
            </Link>
            
            <Link
              href="/crafts"
              className={isActiveLink("/crafts")}
              prefetch
            >
              Crafts
            </Link>
            <Link href="/about" className={isActiveLink("/about")} prefetch>
              About
            </Link>

           

            {status === "authenticated" ? (
              <>
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    width={36}
                    height={36}
                    alt="user"
                    className="rounded-full border"
                  />
                ) : (
                  <FaUserCircle className="text-3xl text-gray-500" />
                )}

                <button
                  onClick={() => signOut()}
                  className="block px-4 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/register"
                  className="px-4 py-2 rounded-md text-sm border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition"
                  prefetch
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-md text-sm bg-amber-600 text-white hover:bg-amber-700 transition"
                  prefetch
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              {!mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

     {/* Mobile Dropdown */}
<div
  className={`md:hidden transform transition-all duration-300 ease-in-out ${
    mobileMenuOpen
      ? "max-h-screen opacity-100 translate-y-0"
      : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
  }`}
>
  <div className="px-4 pt-3 pb-6 space-y-3 bg-white border-t border-gray-200 shadow-md">
    <Link
      href="/"
      className={`block w-full px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-amber-50 transition ${isActiveLink("/")}`}
      onClick={() => setMobileMenuOpen(false)}
      prefetch
    >
      Home
    </Link>

    <Link
      href="/crafts"
      className={`block w-full px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-amber-50 transition ${isActiveLink("/crafts")}`}
      onClick={() => setMobileMenuOpen(false)}
      prefetch
    >
      Crafts
    </Link>
    <Link
      href="/addCraft"
      className={`block w-full px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-amber-50 transition ${isActiveLink("/add-craft")}`}
      onClick={() => setMobileMenuOpen(false)}
      prefetch
    >
      Add Craft
    </Link>

    <Link
      href="/about"
      className={`block w-full px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-amber-50 transition ${isActiveLink("/about")}`}
      onClick={() => setMobileMenuOpen(false)}
      prefetch
    >
      About
    </Link>

    {status === "authenticated" ? (
      <button
        onClick={() => {
          signOut();
          setMobileMenuOpen(false);
        }}
        className="block w-full text-left px-4 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
      >
        Logout
      </button>
    ) : (
      <>
        <Link
          href="/register"
          className="block w-full text-center px-4 py-2 rounded-md border border-amber-600 text-amber-600 font-semibold hover:bg-amber-600 hover:text-white transition"
          onClick={() => setMobileMenuOpen(false)}
          prefetch
        >
          Register
        </Link>
        <Link
          href="/login"
          className="block w-full text-center px-4 py-2 rounded-md bg-amber-600 text-white font-semibold hover:bg-amber-700 transition"
          onClick={() => setMobileMenuOpen(false)}
          prefetch
        >
          Login
        </Link>
      </>
    )}
  </div>
</div>

    </nav>
  );
};

export default Navbar;
