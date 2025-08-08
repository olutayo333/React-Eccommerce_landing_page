import React, { useState } from 'react'
import type { MainBodyProps, ProductProps } from '../Types'
import { FaBoxOpen } from 'react-icons/fa6';
import ProductDetails from './ProductDetails';

const MainBody: React.FC<MainBodyProps> = ({
    electronicsProducts,
    kidsProducts,
    toolsHardwareProducts,
    beautyProducts,
    homeLivingProducts,
    fashionProducts,
    addToCart
}) => {

    const [productDetails, setProductDetails] = useState<ProductProps | null>(null);
    const [openProductDetails, setOpenProductDetails] = useState(false)

    //close product details
    const handleCloseProductDetails = () => { setOpenProductDetails(false) }

    //open product details when clicked upon
    const handleProductClick = (product: ProductProps) => {
        setProductDetails(product);
        setOpenProductDetails(true);
    };

    const renderCategory = (title: string, products: ProductProps[]) => (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {products && products?.length > 0 ? (
                    products?.map((product, index) => (
                        <div
                            key={product?.id || index}
                            className="group border p-2 rounded hover:shadow-md transition flex flex-col justify-between"
                        >
                            <div className='cursor-pointer'
                                onClick={()=>{handleProductClick(product)}}
                            >
                                <img
                                    src={product?.image}
                                    alt={product?.name}
                                    className="w-full lg:h-36 object-cover rounded mb-2"
                                />
                                <h3 className="text-sm font-medium">{product.name}</h3>
                                <p className="text-xs text-gray-500">{product.description}</p>
                                <p className="text-yellow-600 font-semibold text-sm mt-1">{product.price}</p>
                            </div>

                            {/* Add to Cart button (shown only on hover) */}
                            <div className="mt-2">
                                <button
                                    className="w-full bg-yellow-500 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    onClick={()=>addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center text-gray-500 py-10">
                        <FaBoxOpen className="text-4xl mb-2 text-yellow-500" />
                        <p className="text-sm">No products found for this category</p>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div>
            <main className="p-4 space-y-8 bg-gray-100 min-h-screen">
                {renderCategory('Electronics', electronicsProducts)}
                {renderCategory('Kids', kidsProducts)}
                {renderCategory('Tools & Hardware', toolsHardwareProducts)}
                {renderCategory('Beauty', beautyProducts)}
                {renderCategory('Home & Living', homeLivingProducts)}
                {renderCategory('Fashion', fashionProducts)}
            </main>

            {
                openProductDetails &&
                <ProductDetails
                    productDetails={productDetails || null}
                    handleCloseProductDetails={handleCloseProductDetails}
                    addToCart={addToCart}
                />
            }
        </div>
    )
}

export default MainBody
