import React from 'react';

export default function Home() {
  const samplePrices = [
    { item: "Sadam Rice (50kg)", price: "D1,850", location: "Serekunda", trend: "stable" },
    { item: "Cooking Oil (20L)", price: "D2,100", location: "Brikama", trend: "up" },
    { item: "Cement (Bag)", price: "D415", location: "Coastal Road", trend: "down" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-green-700">Gambia Price Index</h1>
          <p className="text-gray-600 mt-2">Real-time market prices across the Smiling Coast</p>
        </header>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-4">Item Name</th>
                <th className="p-4">Price (GMD)</th>
                <th className="p-4">Location</th>
                <th className="p-4">Trend</th>
              </tr>
            </thead>
            <tbody>
              {samplePrices.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{item.item}</td>
                  <td className="p-4">{item.price}</td>
                  <td className="p-4 text-gray-500">{item.location}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.trend === 'up' ? 'bg-red-100 text-red-700' : 
                      item.trend === 'down' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {item.trend.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}