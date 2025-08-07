import React from 'react'

const TopMenu = () => {
    return (
        <div>
            <header className="bg-[#3B4B66] text-white px-4 py-2 shadow-md">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left Section */}
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        {/* Logo */}
                        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />

                        {/* Home icon box */}
                        <div className="p-2 border border-yellow-400 rounded-md">
                            <span className="text-yellow-400 text-xl">🏠</span>
                        </div>

                        {/* Search bar */}
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Search Regis"
                                className="w-full rounded-md pl-4 pr-10 py-2 text-black"
                            />
                            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-yellow-400 text-black rounded-md">
                                🔍
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4 flex-wrap justify-end w-full md:w-auto">
                        <span className="text-sm">Orders</span>
                        <span className="text-xl">🛒</span>
                        <button className="border border-yellow-400 px-3 py-1 rounded text-sm">
                            Become a Seller
                        </button>
                        <span className="text-yellow-400 text-sm">+2348163960501</span>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default TopMenu
