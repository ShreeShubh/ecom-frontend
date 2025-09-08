import Image from 'next/image'
import { navMenu } from '../../lib/navbar/menu'
import Link from 'next/link'
import { cartIcon, searchIcon, userIcon } from '../../utils/icon'

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 backdrop-blur-2xl h-20 flex items-center bg-white z-50">
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto w-full">
        {/* Logo Card */}
        <Image src="/logo.svg" width={150} height={75} alt="shopkart" />

        {/* Nav Menu */}
        <ul className="flex items-center gap-5">
          {navMenu.map((item, i) => (
            <li key={i}>
              <Link href="#" className="font-semibold text-lg text-emerald-900">
                {item.menu}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="border border-emerald-900 px-5 py-1.5 flex gap-3 rounded-full">
          <input
            type="text"
            className="outline-none w-60 placeholder-emerald-900 text-emerald-900"
            placeholder="Search Product"
          />
          {searchIcon}
        </div>

        {/* Account Card */}
        <div className="flex items-center gap-2.5">
          {userIcon}
          <span className="font-semibold text-emerald-900">Account</span>
        </div>

        {/* Cart Card */}
        <div className="flex items-center gap-2.5">
          {cartIcon}
          <span className="font-semibold text-emerald-900">Cart</span>
        </div>
      </div>
    </nav>
  )
}

export default Header
