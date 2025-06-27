import React from 'react';
import type { Product } from '../types/Product';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
} from 'flowbite-react';

interface ProductTableProps {
    //products: Product[] | undefined;
    products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
    if (!products) {
        return (
            <div className="text-center py-10 text-gray-500">
                Loading products...
            </div>
        );
    }

    return (
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
                    {products.length > 0 ? (
                        products.map((product) => (
                            <TableRow key={product.id} className="bg-white dark:bg-gray-50">
                                <TableCell>
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="object-cover w-16 h-16 border rounded-lg"
                                    />
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
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
                                <TableCell className="text-green-600">
                                    {product.shippingInformation}
                                </TableCell>
                                <TableCell className="text-center">
                                    <button
                                        type="button"
                                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    >
                                        Check out
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={9} className="py-6 text-center text-gray-500">
                                No products found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProductTable;
