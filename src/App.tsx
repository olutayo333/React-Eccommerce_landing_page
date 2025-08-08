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
      image: "/src/assets/television.jpg",
      price: "₦75,000",
      description: "Smart LED TV with HDMI & USB ports",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      image: "/src/assets/bluetooth_speaker.jpg",
      price: "₦9,000",
      description: "Portable and waterproof speaker with rich bass",
    },
    {
      id: 5,
      name: "Surge Protector",
      image: "/src/assets/surge_protector.jpg",
      price: "₦19,000",
      description: "Protects devices from voltage spikes and surges",
    },
    {
      id: 6,
      name: "Refrigerator",
      image: "/src/assets/fridge.jpg",
      price: "₦99,000",
      description: "Energy-efficient fridge with 300L capacity",
    },

  ];

  const kidsProducts: ProductProps[] = [
    {
      id: 1,
      name: "Educational Tablet",
      image: "/src/assets/kids_tab.png",
      price: "₦18,000",
      description: "Preloaded with learning games for kids aged 3-8",
    },
    {
      id: 2,
      name: "Toy Car Set",
      image: "/src/assets/toy_pack.jpg",
      price: "₦6,000",
      description: "Durable die-cast cars for kids aged 4+",
    },
    {
      id: 3,
      name: "Coloring Book Pack",
      image: "/src/assets/baby_writing_pad.jpg",
      price: "₦2,500",
      description: "Set of 5 themed coloring books + crayons",
    },
    {
      id: 4,
      name: "Baby Carrier",
      image: "/src/assets/baby_carrier.jpg",
      price: "₦12,000",
      description: "Comfortable and adjustable for infants",
    },
    {
      id: 5,
      name: "Baby Pampers",
      image: "/src/assets/baby_pad.jpg",
      price: "₦5,000",
      description: "Soft and absorbent diapers for newborns",
    },
    {
      id: 6,
      name: "Writing Pad",
      image: "/src/assets/baby_writing_pad.jpg",
      price: "₦24,000",
      description: "Digital writing pad with stylus for kids",
    },
  ];

  const toolsHardwareProducts: ProductProps[] = [
    {
      id: 1,
      name: "Cordless Drill",
      image: "/src/assets/drill.jpg",
      price: "₦19,500",
      description: "Rechargeable drill with dual speed and bits",
    },
    {
      id: 2,
      name: "Tool Box Set",
      image: "/src/assets/tool_kit.jpg",
      price: "₦14,000",
      description: "Multi-tool kit with wrenches, pliers, and screwdrivers",
    },
    {
      id: 3,
      name: "Extension Cable",
      image: "/src/assets/cable_extension.jpg",
      price: "₦3,000",
      description: "10-meter 4-socket surge protector",
    },
    {
      id: 4,
      name: "Spirit Level",
      image: "/src/assets/spirit_level.jpg",
      price: "₦1,800",
      description: "24-inch level with 3 bubbles for accurate alignment",
    },
    {
      id: 5,
      name: "Safety Goggles",
      image: "/src/assets/safety_goggles.jpg",
      price: "₦2,500",
      description: "Protective eyewear for construction and DIY projects",
    },
    {
      id: 6,
      name: "Measuring Tape",
      image: "/src/assets/measuring_tape.jpg",
      price: "₦1,200",
      description: "5-meter retractable tape with lock feature",
    },

  ];

  const beautyProducts: ProductProps[] = [
    {
      id: 1,
      name: "Shea Butter Moisturizer",
      image: "/src/assets/shea_butter.png",
      price: "₦2,000",
      description: "Natural shea butter cream for glowing skin",
    },
    {
      id: 2,
      name: "Hair Relaxer Kit",
      image: "/src/assets/hair_relaxer.jpg",
      price: "₦3,200",
      description: "Full kit with shampoo and conditioner",
    },
    {
      id: 3,
      name: "Perfume - Oud Royal",
      image: "/src/assets/perfume.jpg",
      price: "₦9,800",
      description: "Long-lasting fragrance for men and women",
    },
    {
      id: 4,
      name: "Makeup Brush Set",
      image: "/src/assets/make_up_brush.jpg",
      price: "₦5,500",
      description: "10-piece professional brush set with pouch",
    },
    {
      id: 5,
      name: "Face Mask Pack",
      image: "/src/assets/face_mask.jpg",
      price: "₦1,500",
      description: "Set of 5 hydrating sheet masks for all skin types",
    },
    {
      id: 6,
      name: "Nail Polish Set",
      image: "/src/assets/nail_polish.jpg",
      price: "₦2,800",
      description: "6 vibrant colors with long-lasting finish",
    },
    // {
    //   id: 7,
    //   name: "Lip Balm Trio",
    //   image: "https://via.placeholder.com/150",
    //   price: "₦1,200",
    //   description: "Natural lip balms with coconut, mint, and vanilla flavors",
    // }
  ];

  const homeLivingProducts: ProductProps[] = [
    {
      id: 1,
      name: "Luxury Bedsheet Set",
      image: "/src/assets/bed_spray.jpg",
      price: "₦8,500",
      description: "4-piece cotton bedsheet with pillowcases",
    },
    {
      id: 2,
      name: "Non-Stick Cookware Set",
      image: "/src/assets/cook_ware.jpg",
      price: "₦18,000",
      description: "5-piece set with glass lids and heat-resistant handles",
    },
    {
      id: 3,
      name: "Wall Clock",
      image: "/src/assets/wall_clock.png",
      price: "₦3,500",
      description: "Modern decorative clock for living room",
    },
    {
      id: 4,
      name: "Standing Fan",
      image: "/src/assets/standing_fan.jpg",
      price: "₦13,000",
      description: "16-inch 3-speed fan with oscillation feature",
    },
    {
      id: 5,
      name: "Kitchen Knife Set",
      image: "/src/assets/knife.png",
      price: "₦4,500",
      description: "6-piece stainless steel knife set with block",
    },
    {
      id: 6,
      name: "Decorative Vase",
      image: "/src/assets/decorative_vase.jpg",
      price: "₦2,000",
      description: "Ceramic vase for home decor with floral arrangements",
    }
  ];

  const fashionProducts: ProductProps[] = [
    {
      id: 1,
      name: "Men’s Polo Shirt",
      image: "/src/assets/mens_polo_shirt.jpg",
      price: "₦7,500",
      description: "Cotton short sleeve polo with classic fit",
    },
    {
      id: 2,
      name: "Ladies Handbag",
      image: "/src/assets/ladies_handbag.jpg",
      price: "₦12,000",
      description: "Elegant leather handbag with gold detailing",
    },
    {
      id: 3,
      name: "Denim Jacket",
      image: "/src/assets/denim.png",
      price: "₦14,000",
      description: "Classic unisex denim with side pockets",
    },
    {
      id: 4,
      name: "Ankara Dress",
      image: "/src/assets/ankara.jpg",
      price: "₦9,800",
      description: "Colorful African print dress for casual outings",
    },
    {
      id: 5,
      name: "Running Shoes",
      image: "/src/assets/running_shoes.jpg",
      price: "₦15,000",
      description: "Lightweight and breathable shoes for all-day comfort",
    },
    {
      id: 6,
      name: "Sunglasses",
      image: "/src/assets/sunglasses.jpg",
      price: "₦3,500",
      description: "UV-protected stylish sunglasses for summer",
    }
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
