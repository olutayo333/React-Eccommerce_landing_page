import './App.css'
import TopMenu from './Components/TopMenu'
import SideBar from './Components/SideBar'
import MainBody from './Components/MainBody'
import type { ProductProps } from './Types';

function App() {

  const electronicsProducts: ProductProps[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      image: "https://via.placeholder.com/150",
      price: "₦15,000",
      description: "Noise-cancelling over-ear headphones with Bluetooth 5.0",
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "https://via.placeholder.com/150",
      price: "₦23,500",
      description: "Fitness tracking, heart rate monitor, and sleep analysis",
    },
    {
      id: 3,
      name: "LED TV 32\"",
      image: "https://via.placeholder.com/150",
      price: "₦75,000",
      description: "Smart LED TV with HDMI & USB ports",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      image: "https://via.placeholder.com/150",
      price: "₦9,000",
      description: "Portable and waterproof speaker with rich bass",
    },
  ];

  const kidsProducts: ProductProps[] = [
    {
      id: 1,
      name: "Educational Tablet",
      image: "https://via.placeholder.com/150",
      price: "₦18,000",
      description: "Preloaded with learning games for kids aged 3-8",
    },
    {
      id: 2,
      name: "Toy Car Set",
      image: "https://via.placeholder.com/150",
      price: "₦6,000",
      description: "Durable die-cast cars for kids aged 4+",
    },
    {
      id: 3,
      name: "Coloring Book Pack",
      image: "https://via.placeholder.com/150",
      price: "₦2,500",
      description: "Set of 5 themed coloring books + crayons",
    },
    {
      id: 4,
      name: "Baby Carrier",
      image: "https://via.placeholder.com/150",
      price: "₦12,000",
      description: "Comfortable and adjustable for infants",
    },
  ];

  const toolsHardwareProducts: ProductProps[] = [
    {
      id: 1,
      name: "Cordless Drill",
      image: "https://via.placeholder.com/150",
      price: "₦19,500",
      description: "Rechargeable drill with dual speed and bits",
    },
    {
      id: 2,
      name: "Tool Box Set",
      image: "https://via.placeholder.com/150",
      price: "₦14,000",
      description: "Multi-tool kit with wrenches, pliers, and screwdrivers",
    },
    {
      id: 3,
      name: "Extension Cable",
      image: "https://via.placeholder.com/150",
      price: "₦3,000",
      description: "10-meter 4-socket surge protector",
    },
    {
      id: 4,
      name: "Spirit Level",
      image: "https://via.placeholder.com/150",
      price: "₦1,800",
      description: "24-inch level with 3 bubbles for accurate alignment",
    },
  ];

  const beautyProducts: ProductProps[] = [
    {
      id: 1,
      name: "Shea Butter Moisturizer",
      image: "https://via.placeholder.com/150",
      price: "₦2,000",
      description: "Natural shea butter cream for glowing skin",
    },
    {
      id: 2,
      name: "Hair Relaxer Kit",
      image: "https://via.placeholder.com/150",
      price: "₦3,200",
      description: "Full kit with shampoo and conditioner",
    },
    {
      id: 3,
      name: "Perfume - Oud Royal",
      image: "https://via.placeholder.com/150",
      price: "₦9,800",
      description: "Long-lasting fragrance for men and women",
    },
    {
      id: 4,
      name: "Makeup Brush Set",
      image: "https://via.placeholder.com/150",
      price: "₦5,500",
      description: "10-piece professional brush set with pouch",
    },
  ];

  const homeLivingProducts: ProductProps[] = [
    {
      id: 1,
      name: "Luxury Bedsheet Set",
      image: "https://via.placeholder.com/150",
      price: "₦8,500",
      description: "4-piece cotton bedsheet with pillowcases",
    },
    {
      id: 2,
      name: "Non-Stick Cookware Set",
      image: "https://via.placeholder.com/150",
      price: "₦18,000",
      description: "5-piece set with glass lids and heat-resistant handles",
    },
    {
      id: 3,
      name: "Wall Clock",
      image: "https://via.placeholder.com/150",
      price: "₦3,500",
      description: "Modern decorative clock for living room",
    },
    {
      id: 4,
      name: "Standing Fan",
      image: "https://via.placeholder.com/150",
      price: "₦13,000",
      description: "16-inch 3-speed fan with oscillation feature",
    },
  ];

  const fashionProducts: ProductProps[] = [
    {
      id: 1,
      name: "Men’s Polo Shirt",
      image: "https://via.placeholder.com/150",
      price: "₦7,500",
      description: "Cotton short sleeve polo with classic fit",
    },
    {
      id: 2,
      name: "Ladies Handbag",
      image: "https://via.placeholder.com/150",
      price: "₦12,000",
      description: "Elegant leather handbag with gold detailing",
    },
    {
      id: 3,
      name: "Denim Jacket",
      image: "https://via.placeholder.com/150",
      price: "₦14,000",
      description: "Classic unisex denim with side pockets",
    },
    {
      id: 4,
      name: "Ankara Dress",
      image: "https://via.placeholder.com/150",
      price: "₦9,800",
      description: "Colorful African print dress for casual outings",
    },
  ];


  return (
    <div className="h-screen flex flex-col w-full min-h-screen">
      {/* Top menu */}
      <TopMenu />

      {/* Main body and sidebar */}
      <div className="flex flex-1 overflow-hidden ">
        {/* Sidebar */}
        <div className="hidden md:block w-64 h-full">
          <SideBar />
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <MainBody 
            electronicsProducts={electronicsProducts || []}
            kidsProducts={kidsProducts || []}
            toolsHardwareProducts={toolsHardwareProducts || []}
            beautyProducts={beautyProducts || []}
            homeLivingProducts={homeLivingProducts || []}
            fashionProducts={fashionProducts || []}
    
          />
        </div>
      </div>

      {/* Sidebar for mobile (rendered separately as fixed) */}
      <div className="md:hidden">
        <SideBar />
      </div>
    </div>
  )
}

export default App
