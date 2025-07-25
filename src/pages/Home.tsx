// src/pages/Home.tsx
import React from 'react'

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-green-600">Tailwind is working!</h1>

      <section className="text-center py-20 bg-green-100 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-green-700">Welcome to AgriPulse</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Empowering farmers to buy, sell, or rent agriculture products with ease.
        </p>
        <button className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-xl shadow hover:shadow-md">
          <h2 className="text-xl font-semibold text-green-600">Buy Products</h2>
          <p className="mt-2 text-gray-600">Find seeds, tools, and farming equipment for purchase.</p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-md">
          <h2 className="text-xl font-semibold text-green-600">Rent Equipment</h2>
          <p className="mt-2 text-gray-600">Browse or rent tractors, harvesters, and more on demand.</p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-md">
          <h2 className="text-xl font-semibold text-green-600">Post Your Listings</h2>
          <p className="mt-2 text-gray-600">List your products or machinery for sale or rent.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
