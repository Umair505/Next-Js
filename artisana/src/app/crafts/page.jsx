import React from 'react';
import Link from 'next/link';
import connectToDatabase from '@/lib/dbConnect';

export default async function Products() {
  const productsCollection = await connectToDatabase("products");
  const data = await productsCollection.find({}).toArray();
  
  return (
    <section className="py-12 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
  <h2 className="text-3xl font-bold text-amber-800">Explore Our Artisan Collection</h2>
  <p className="mt-4 text-lg text-amber-600 max-w-3xl mx-auto">
    Browse our complete selection of handcrafted treasures, each telling a unique story of craftsmanship and tradition
  </p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((product) => (
            <div key={product._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Product Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Out of Stock
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-2 py-1 rounded text-xs font-medium">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                {/* Artist Info */}
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center mr-2">
                    <span className="text-amber-700 text-sm font-semibold">
                      {product.artist?.name?.charAt(0) || 'A'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">{product.artist?.name || 'Artisan'}</p>
                    <p className="text-xs text-gray-500">{product.artist?.location || 'Unknown'}</p>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'text-amber-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating || 0} ({product.reviewCount || 0} reviews)
                    </span>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-2xl font-bold text-amber-700">${product.price}</p>
                    {product.shipping?.free && (
                      <p className="text-xs text-green-600">Free shipping</p>
                    )}
                  </div>
                  <Link
                    href={`/crafts/${product._id}`}
                    className="px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
                  >
                    Show Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}