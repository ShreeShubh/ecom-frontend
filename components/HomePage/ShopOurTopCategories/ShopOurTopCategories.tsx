import React from 'react'
import { topCategories } from '../../../lib/topCategories'

const bgColors = [
  'bg-gradient-to-r from-red-500 to-pink-500',
  'bg-gradient-to-l from-blue-500 to-cyan-500',
  'bg-gradient-to-r from-green-500 to-lime-500',
  'bg-gradient-to-l from-yellow-500 to-orange-500',
  'bg-gradient-to-l from-purple-500 to-indigo-500',
]

const ShopOurTopCategories = () => {
  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl font-semibold">Shop Our Top Categories</h2>

        <ul className="grid grid-cols-6 gap-5">
          {topCategories.map((item, i) => (
            <li key={i} className="">
              <div
                className={`h-64 p-4 rounded-2xl ${
                  bgColors[i % bgColors.length]
                }`}
              >
                <p className="text-2xl font-semibold text-white">
                  {item.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ShopOurTopCategories
