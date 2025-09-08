const HeroBanner = () => {
  return (
    <div className="bg-[url('/herobanner/hero-banner.jpeg')] bg-cover w-full h-[500px] mt-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full text-white space-y-5">
        <h1 className="text-6xl font-semibold leading-tight">
          Shopping And <br /> Department Store.
        </h1>
        <p className="text-xl">
          Shopping is a bit of a relaxing hobby for me, which <br /> is
          sometimes troubling for the bank balance.
        </p>

        <button className="py-3 px-6 text-xl font-semibold bg-emerald-900 text-white rounded-full">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default HeroBanner
