import React from 'react';
import { notFound } from 'next/navigation';
import connectToDatabase from '@/lib/dbConnect';
import Link from 'next/link';
import { ObjectId } from 'mongodb';
import Image from 'next/image';

export default async function CraftDetails({ params }) {
  const productsCollection = await connectToDatabase("products");
  const product = await productsCollection.findOne({ _id: new ObjectId(params.id) });
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-amber-50/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="mb-10">
          <ol className="flex items-center space-x-2 text-sm text-amber-700">
            <li>
              <Link href="/" className="hover:text-amber-900 transition-colors">Home</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/crafts" className="hover:text-amber-900 transition-colors">Crafts</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-amber-900 font-semibold truncate max-w-xs">{product.name}</span>
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
            
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative h-96 w-full overflow-hidden rounded-xl shadow-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    Out of Stock
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-md text-sm font-medium shadow-md">
                  {product.category}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              {/* Artist Info */}
              <div className="flex items-center p-4 bg-amber-50 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4 shadow">
                  <span className="text-amber-700 text-lg font-bold">
                    {product.artist?.name?.charAt(0) || 'A'}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{product.artist?.name || 'Artisan'}</h3>
                  <p className="text-sm text-gray-500">{product.artist?.location || 'Unknown location'}</p>
                </div>
              </div>

              {/* Product Title */}
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">{product.name}</h1>

              {/* Price */}
              <div className="flex items-baseline">
                <p className="text-4xl font-extrabold text-amber-700">${product.price}</p>
                {product.originalPrice && (
                  <p className="ml-3 text-lg text-gray-400 line-through">${product.originalPrice}</p>
                )}
                {product.discount && (
                  <span className="ml-3 bg-red-100 text-red-700 text-sm font-medium px-2.5 py-1 rounded-full shadow-sm">
                    {product.discount}% OFF
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Materials */}
              {product.materials?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Materials</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material, index) => (
                      <span
                        key={index}
                        className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Dimensions */}
              {product.dimensions && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dimensions</h3>
                  <p className="text-gray-700">
                    {product.dimensions.height}" H × {product.dimensions.width}" W × {product.dimensions.depth}" D
                  </p>
                </div>
              )}

              {/* Shipping Info */}
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping & Returns</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {product.shipping?.free ? 'Free shipping' : `Shipping: $${product.shipping?.cost || 0}`}
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Estimated delivery: {product.shipping?.time || '3-5 business days'}
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </span>
                    {product.returnPolicy || '30-day return policy'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Tabs */}
          <div className="border-t border-gray-200 mt-8">
            <div className="px-8">
              <div className="flex border-b border-gray-200 overflow-x-auto">
                <button className="px-4 py-3 text-amber-700 font-semibold border-b-2 border-amber-600">
                  Product Details
                </button>
                <button className="px-4 py-3 text-gray-500 hover:text-gray-700 font-medium transition-colors">
                  Care Instructions
                </button>
                <button className="px-4 py-3 text-gray-500 hover:text-gray-700 font-medium transition-colors">
                  Reviews ({product.reviewCount || 0})
                </button>
                <button className="px-4 py-3 text-gray-500 hover:text-gray-700 font-medium transition-colors">
                  Artist Story
                </button>
              </div>
            </div>

            <div className="p-8">
              {/* Product Details Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900">Craft Technique</h4>
                  <p className="text-gray-700">{product.technique || 'Handcrafted using traditional methods'}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900">Weight</h4>
                  <p className="text-gray-700">{product.weight || 'N/A'}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900">Origin</h4>
                  <p className="text-gray-700">{product.origin || product.artist?.location || 'Unknown'}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900">Creation Time</h4>
                  <p className="text-gray-700">{product.creationTime || 'Varies by artisan'}</p>
                </div>
              </div>

              {/* Tags */}
              {product.tags?.length > 0 && (
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
