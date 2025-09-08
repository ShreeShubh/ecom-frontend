import Image from 'next/image'
import { heartIcon, starIcon } from '../../../../utils/icon'

type Deal = {
  imageUrl: string
  name: string
  desc: string
  price: string
  rating: number
}

type ShowProductsProps = {
  products: Deal[]
  title: string
}

const ShowProducts = ({ products, title }: ShowProductsProps) => {
  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <ul className="grid grid-cols-3 gap-10">
          {products.map((item, i) => (
            <li key={i} className="space-y-3">
              <div className="h-72 bg-gray-300 rounded-3xl p-5 flex items-center justify-center relative">
                <Image
                  src={item.imageUrl}
                  width={250}
                  height={250}
                  alt={item.name}
                />
                <div className="bg-white p-3 rounded-full absolute right-5 top-5">
                  {heartIcon}
                </div>
              </div>

              <div className="space-y-3 px-2.5">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold text-black">
                    {item.name}
                  </p>
                  <p className="text-lg font-semibold">{item.price}</p>
                </div>

                <p className="text-sm">{item.desc}</p>
                <span className="flex gap-2 items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>{starIcon}</span>
                    ))}
                  ({item.rating})
                </span>

                <button className="px-4 py-2 border border-black rounded-full">
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ShowProducts
