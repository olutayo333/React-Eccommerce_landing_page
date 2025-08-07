import React from 'react'
import { FaChild, FaClipboardList, FaHeartbeat, FaHome, FaLaptop, FaPhone, FaShoppingCart, FaStore, FaTshirt, FaUser, FaUtensils } from 'react-icons/fa'

const SideBar = () => {
  return (
    <div>
         <aside className="w-64 bg-[#FDBA74] text-[#3B4B66] p-4 rounded-lg shadow-md">
      {/* Top categories */}
      <ul className="space-y-4 font-semibold">
        <li className="flex items-center gap-2">
          <FaHome />
          Home
        </li>
        <li className="flex items-center gap-2">
          <FaTshirt />
          Clothing & Fashion
        </li>
        <li className="flex items-center gap-2">
          <FaLaptop />
          Electronics
        </li>
        <li className="flex items-center gap-2">
          <FaChild />
          Kids Product
        </li>
        <li className="flex items-center gap-2">
          <FaHeartbeat />
          Health & Beauty
        </li>
        <li className="flex items-center gap-2">
          <FaUtensils />
          Food & Beverages
        </li>
      </ul>

      {/* Divider */}
      <hr className="my-4 border-[#3B4B66]/30" />

      {/* Bottom section */}
      <ul className="space-y-4 font-semibold">
        <li className="flex items-center gap-2">
          <FaUser />
          Login
        </li>
        <li className="flex items-center gap-2">
          <FaShoppingCart />
          Cart
        </li>
        <li className="flex items-center gap-2">
          <FaClipboardList />
          Orders
        </li>
        <li className="flex items-center gap-2">
          <FaStore />
          Sell on Regis
        </li>
        <li className="flex items-center gap-2">
          <FaPhone />
          08163960501
        </li>
      </ul>
    </aside>

    </div>
  )
}

export default SideBar
