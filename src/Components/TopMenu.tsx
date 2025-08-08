import { FiShoppingCart } from 'react-icons/fi'
import { MdHome, MdSearch } from 'react-icons/md'
import type { TopMenuProps } from '../Types'

const TopMenu: React.FC<TopMenuProps> = ({
    cartCount
}) => {
    return (
        <header className="bg-[#3B4B66] text-white w-full">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                {/* Left Section */}
                <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:gap-4 md:w-auto">

                    {/* Logo & Home Icon - aligned right on mobile */}
                    <div className="flex items-center gap-3 ml-auto md:ml-0">
                        <img
                            src="/images/logo_transparent.png"
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                        <div className="p-2 border border-yellow-400 rounded-md cursor-pointer hover:bg-yellow-400 hover:text-black transition-colors">
                            <MdHome size={26} className="text-yellow-400" />
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="lg:ml-4 relative w-full max-w-full md:max-w-xl">
                        <input
                            type="text"
                            placeholder="Search Regis"
                            className="w-full rounded-md pl-5 pr-14 py-3 text-black text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition-colors">
                            <MdSearch size={22} />
                        </button>
                    </div>
                </div>


                {/* Right Section */}
                <div className="flex flex-wrap items-center justify-between gap-3 w-full md:w-auto">

                    <a href="#" className="relative text-xl cursor-pointer hover:text-yellow-400 transition-colors">
                        <FiShoppingCart />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold px-1 py-0 rounded-full">
                                <span className='font-bold'>{cartCount}</span>
                            </span>
                        )}
                    </a>

                    <button className="border border-yellow-400 px-3 py-1 rounded text-sm hover:bg-yellow-400 hover:text-black transition-colors">
                        Become a Seller
                    </button>

                    <a
                        href="tel:+2348163960501"
                        className="text-yellow-400 text-sm cursor-pointer hover:underline transition-colors"
                    >
                        +2348163960501
                    </a>
                </div>
            </div>
        </header>
    )
}

export default TopMenu
