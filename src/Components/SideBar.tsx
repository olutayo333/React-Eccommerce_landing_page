import {
  FaBars,
  FaChild,
  FaClipboardList,
  FaHeartbeat,
  FaHome,
  FaLaptop,
  FaPhone,
  FaShoppingCart,
  FaStore,
  FaTshirt,
  FaUser,
  FaUtensils,
  FaTimes,
} from 'react-icons/fa'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#FDBA74] text-[#3B4B66] p-2 rounded-md shadow"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-[#FDBA74] text-[#3B4B66] p-4 shadow-md transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:shadow-none md:rounded-lg`
        }
      >
        <ul className="space-y-4 font-semibold mt-10 md:mt-0">
  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
    <FaHome /> Home
  </li>
  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
    <FaTshirt /> Clothing & Fashion
  </li>
  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
    <FaLaptop /> Electronics
  </li>
  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
    <FaChild /> Kids Product
  </li>
  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
    <FaHeartbeat /> Health & Beauty
  </li>
  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
    <FaUtensils /> Food & Beverages
  </li>
</ul>

<hr className="my-4 border-[#3B4B66]/30" />

<ul className="space-y-4 font-semibold">
  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
    <FaUser /> Login
  </li>
  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
    <FaShoppingCart /> Cart
  </li>
  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
    <FaClipboardList /> Orders
  </li>
  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
    <FaStore /> Sell on Regis
  </li>
  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
    <FaPhone /> 08163960501
  </li>
</ul>

      </aside>
    </>
  )
}

export default SideBar
