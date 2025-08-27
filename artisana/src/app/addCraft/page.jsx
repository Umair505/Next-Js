"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const AddProductPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: '',
    materials: [],
    inStock: true,
    dimensions: {
      height: '',
      width: '',
      depth: ''
    },
    shipping: {
      free: false,
      cost: '',
      time: ''
    },
    artist: {
      name: '',
      location: ''
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleMaterialsChange = (e) => {
    const materialsArray = e.target.value.split(',').map(item => item.trim());
    setFormData(prev => ({
      ...prev,
      materials: materialsArray
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          rating: 0,
          reviewCount: 0,
          shipping: {
            ...formData.shipping,
            cost: formData.shipping.cost ? parseFloat(formData.shipping.cost) : 0
          },
          dimensions: {
            height: parseFloat(formData.dimensions.height) || 0,
            width: parseFloat(formData.dimensions.width) || 0,
            depth: parseFloat(formData.dimensions.depth) || 0
          }
        }),
      });

      if (response.ok) {
        toast.success('Product added successfully!');
        router.push('/crafts');
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      toast.error('Error adding product. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-amber-900">Add New Product</h1>
            <p className="text-amber-600 mt-2">Share your beautiful handmade craft with the world</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Product Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Beautiful Handmade Vase"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                >
                  <option value="">Select a category</option>
                  <option value="Pottery">Pottery</option>
                  <option value="Textiles">Textiles</option>
                  <option value="Jewelry">Jewelry</option>
                  <option value="Woodwork">Woodwork</option>
                  <option value="Metalwork">Metalwork</option>
                  <option value="Glass">Glass</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-800 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="Describe your product in detail..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Price ($) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="29.99"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Image URL *
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-800 mb-2">
                Materials (comma separated) *
              </label>
              <input
                type="text"
                onChange={handleMaterialsChange}
                className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="Clay, Glaze, Wood, etc."
              />
            </div>

            {/* Dimensions */}
            <div className="border-t border-amber-200 pt-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Dimensions (inches)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">Height</label>
                  <input
                    type="number"
                    name="dimensions.height"
                    value={formData.dimensions.height}
                    onChange={handleChange}
                    min="0"
                    step="0.1"
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="10.5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">Width</label>
                  <input
                    type="number"
                    name="dimensions.width"
                    value={formData.dimensions.width}
                    onChange={handleChange}
                    min="0"
                    step="0.1"
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="8.2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">Depth</label>
                  <input
                    type="number"
                    name="dimensions.depth"
                    value={formData.dimensions.depth}
                    onChange={handleChange}
                    min="0"
                    step="0.1"
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="5.0"
                  />
                </div>
              </div>
            </div>

            {/* Artist Information */}
            <div className="border-t border-amber-200 pt-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Artist Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">
                    Artist Name *
                  </label>
                  <input
                    type="text"
                    name="artist.name"
                    value={formData.artist.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">
                    Artist Location *
                  </label>
                  <input
                    type="text"
                    name="artist.location"
                    value={formData.artist.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Portland, Oregon"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="border-t border-amber-200 pt-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Shipping Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">
                    Shipping Time *
                  </label>
                  <input
                    type="text"
                    name="shipping.time"
                    value={formData.shipping.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="3-5 business days"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">
                    Shipping Cost ($)
                  </label>
                  <input
                    type="number"
                    name="shipping.cost"
                    value={formData.shipping.cost}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="5.99"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="shipping.free"
                    checked={formData.shipping.free}
                    onChange={handleChange}
                    className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-amber-800">Free shipping</span>
                </label>
              </div>
            </div>

            {/* Stock Status */}
            <div className="border-t border-amber-200 pt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={handleChange}
                  className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="ml-2 text-amber-800">In Stock</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="border-t border-amber-200 pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors ${
                  isLoading
                    ? 'bg-amber-400 cursor-not-allowed'
                    : 'bg-amber-600 hover:bg-amber-700'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding Product...
                  </span>
                ) : (
                  'Add Product'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;