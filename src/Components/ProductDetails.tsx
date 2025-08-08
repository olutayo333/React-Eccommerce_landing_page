import React from 'react'
import type { ProductDetailsProps } from '../Types'
import { IoClose } from 'react-icons/io5'

const ProductDetails: React.FC<ProductDetailsProps> = ({
  handleCloseProductDetails,
  productDetails, addToCart
}) => {
  if (!productDetails) return null

  return (
    <div className=" p-4 lg:p-0 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative p-5">
        
        {/* Close button */}
        <button
          onClick={handleCloseProductDetails}
          className="absolute top-3 right-3 bg-gray-600 p-1 rounded-full"
        >
          <IoClose size={16} className='text-red-500 font-bold hover:text-red-700' />
        </button>

        {/* Product image */}
        <img
          src={productDetails?.image}
          alt={productDetails?.name}
          className="w-full lg:h-72 h-64 object-cover rounded-lg mb-4"
        />

        {/* Product info */}
        <h2 className="text-xl font-semibold mb-2">{productDetails?.name}</h2>
        <p className="text-gray-600 text-sm mb-4">{productDetails?.description}</p>
        <p className="text-yellow-600 font-bold text-lg mb-6">
          {productDetails.price}
        </p>

        {/* Add to cart button */}
        <button
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
            onClick={() => addToCart(productDetails)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
