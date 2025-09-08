const OfferCTA = () => {
  return (
    <div className="bg-[url('/banner/offer-banner.png')] bg-cover bg-center h-[80vh] my-20">
      <div className="max-w-7xl w-full h-full flex justify-end items-center">
        <div className="bg-[#003d29] p-14 flex flex-col gap-4 text-white w-[500px]">
          <h2 className="text-6xl font-semibold leading-tight">
            Get 5% Cash <br /> back on $200
          </h2>
          <p className="text-2xl">
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
          <button className="self-start py-3 px-6 text-xl font-semibold border border-white text-white rounded-full mt-5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default OfferCTA
