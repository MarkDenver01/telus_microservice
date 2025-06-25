import React, { useEffect, useState } from 'react';
import type { Product } from '../types/Product';
import Pagination from '../components/Pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';
import { fetchProducts } from '../api/productApi';

const LandingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const pageSize = 6;

  useEffect(() => {
    //setProducts(dummyProducts); // Simulated fetch
    const load = async() => {
      const data = await fetchProducts(search, page, pageSize);
      setProducts(data.content);
      setPage(data.totalPages);
    };
    load();
  }, [search, page]);

  const filteredProducts = products.filter((p) =>
    [p.title, p.brand, p.category].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const start = (page - 1) * pageSize;
  const paginatedProducts = filteredProducts.slice(start, start + pageSize);

  return (
    <div className="p-4 mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Product Listings</h1>

      <input
        type="text"
        placeholder="Search by title, brand, or category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="overflow-x-auto bg-white shadow-md rounded-xl ring-1 ring-gray-200">
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell>Thumbnail</TableHeadCell>
              <TableHeadCell>Title</TableHeadCell>
              <TableHeadCell>Brand</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell className="text-right">Price</TableHeadCell>
              <TableHeadCell className="text-center">Rating</TableHeadCell>
              <TableHeadCell className="text-center">Stock</TableHeadCell>
              <TableHeadCell>Shipping</TableHeadCell>
              <TableHeadCell className="text-center">Action</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <TableRow key={product.id} className="bg-white dark:bg-gray-50">
                  <TableCell>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="object-cover w-16 h-16 border rounded-lg"
                    />
                  </TableCell>
                  <TableCell className="font-medium text-gray-900 dark:text-white">
                    {product.title}
                  </TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="font-semibold text-right text-blue-600">
                    ${product.price}
                  </TableCell>
                  <TableCell className="text-center text-yellow-500">
                    {product.rating}
                  </TableCell>
                  <TableCell className="text-center">{product.stock}</TableCell>
                  <TableCell className="text-green-600">{product.shippingInformation}</TableCell>
                  <TableCell className="text-center">
                    <button type="button"
                            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Check out
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
                <TableRow>
                  <TableCell colSpan={8} className="py-6 text-center text-gray-500">
                    No products found.
                  </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  );
};

export default LandingPage;
