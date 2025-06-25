import React from 'react'
import type { Product } from "../types/Product";

interface ProductCardProps { product : Product}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex gap-4 p-4 border rounded-2xl shadow bg-white">
      <img src={product.thumbnail} alt={product.title} className="w-24 h-24 object-cover rounded-xl" />
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-500">{product.brand} • {product.category}</p>
        </div>
        <div className="text-sm mt-2 grid grid-cols-2 gap-x-4">
          <p>💰 <strong>${product.price}</strong></p>
          <p>⭐ {product.rating}</p>
          <p>📦 {product.stock} in stock</p>
          <p className="text-green-600">{product.shippingInformation}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;