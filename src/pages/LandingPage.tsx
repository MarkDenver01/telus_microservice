import React, { useEffect, useState } from 'react';
import type { Product } from '../types/Product';
import {
    fetchAllProducts,
    fetchPaginatedProduct,
    searchProduct
} from '../api/product_api';
import Pagination from '../components/Pagination';
import ProductTable from '../components/ProductTable';
import CheckoutModal from "../components/CheckOutModal";

const LandingPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [viewAll, setViewAll] = useState(false);
    const pageSize = 6;
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const loadProducts = async () => {
            if (viewAll) {
                const result = await fetchAllProducts();
                setProducts(result);
                setTotalPages(1);
                setPage(0);
            } else if (search.trim()) {
                const result = await searchProduct(search, page, pageSize);
                setProducts(result.content);
                setTotalPages(result.totalPages);
            } else {
                const result = await fetchPaginatedProduct('', page, pageSize);
                setProducts(result.content);
                setTotalPages(result.totalPages);
            }
        };

        loadProducts();
    }, [search, page, viewAll]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(0);
    };

    const handleCheckout = (product: Product) => {
        setSelectedProducts([product]); // single product for now
        setIsModalOpen(true);
    };

    return (
        <div className="p-4 mx-auto max-w-7xl">
            <h1 className="mb-6 text-3xl font-bold text-gray-800">Product Listings</h1>

            <div className="flex items-center gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by title, brand, or category"
                    value={search}
                    disabled={viewAll}
                    onChange={handleSearchChange}
                    className="w-full p-3 border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={() => setViewAll(!viewAll)}
                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                    {viewAll ? 'Use Pagination' : 'View All'}
                </button>
            </div>

            <ProductTable products={products} onCheckout={handleCheckout}/>
            <CheckoutModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                selectedProducts={selectedProducts}
            />

            {!viewAll && totalPages > 1 && (
                <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            )}
        </div>
    );
};

export default LandingPage;
