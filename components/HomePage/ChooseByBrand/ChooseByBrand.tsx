import { chooseByBrand } from '../../../lib/chooseByBrand'

const ChooseByBrand = () => {
  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl font-semibold">Choose By Brand</h2>

        <ul className="grid grid-cols-4 gap-5">
          {chooseByBrand.map((item, i) => (
            <li key={i}>
              <div className="bg-slate-300 px-4 py-5 rounded-xl flex items-center justify-center">
                <div className="flex items-center gap-3">
                  {/* logo */}
                  <div className="p-10 bg-white rounded-full"></div>

                  <div className="">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ChooseByBrand
