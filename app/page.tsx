import ChooseByBrand from '../components/HomePage/ChooseByBrand/ChooseByBrand'
import HeroBanner from '../components/HomePage/HeroBanner/HeroBanner'
import ShopOurTopCategories from '../components/HomePage/ShopOurTopCategories/ShopOurTopCategories'
import OfferCTA from '../components/HomePage/common/OfferCTA/OfferCTA'
import ShowProducts from '../components/HomePage/common/ShowProducts/ShowProducts'
import { todaysBestDeals, weeklyPopularProducts } from '../lib/products'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ShopOurTopCategories />
      <ShowProducts
        title="Todays Best Deals For You!"
        products={todaysBestDeals}
      />
      <ChooseByBrand />
      <ShowProducts
        title="Weekly Popular Products"
        products={weeklyPopularProducts}
      />

      <OfferCTA />
    </>
  )
}
