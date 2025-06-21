import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Product } from '../types/Product';
import { addToCart } from '../api/cartApi'; // ✅ import this

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        axios
            .get<Product[]>('/api/java/products')
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load products');
                setLoading(false);
            });
    }, []);

    const handleAddToCart = async (product: Product) => {
        await addToCart({
            productId: product.id,
            title: product.title,
            price: product.price,
            quantity: 1
        });
        alert(`Added "${product.title}" to cart.`);
    };

    if (loading) return <div>Loading products...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
                <div key={product.id} className="border rounded p-4 shadow">
                    {product.thumbnail && (
                        <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-2" />
                    )}
                    <h2 className="font-bold">{product.title}</h2>
                    <p>{product.brand}</p>
                    <p>{product.category}</p>
                    <p>₱{product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <p className="text-sm text-gray-600">{product.shippingInformation}</p>

                    <button
                        onClick={() => handleAddToCart(product)}
                        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
