import React, { useState } from 'react';
import { Product } from '../types/Product';
import { checkoutOrder } from '../api/product_api';

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedProducts: Product[];
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
                                                         isOpen,
                                                         onClose,
                                                         selectedProducts,
                                                     }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [deliveryStart, setDeliveryStart] = useState('');
    const [deliveryEnd, setDeliveryEnd] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    const totalPrice = selectedProducts.reduce((sum, p) => sum + p.price, 0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccessMsg('');

        try {
            const response = await checkoutOrder({
                name,
                address,
                contactNumber,
                deliveryDateStart: deliveryStart,
                deliveryDateEnd: deliveryEnd,
                products: selectedProducts.map((p) => ({
                    productId: p.id,
                    productTitle: p.title,
                    price: p.price,
                    quantity: p.stock,
                    totalPrice: p.price * p.stock,
                })),
            });

            setSuccessMsg(response.message || 'Checkout successful!');
            // Optionally reset form
            setName('');
            setAddress('');
            setContactNumber('');
            setDeliveryStart('');
            setDeliveryEnd('');
        } catch (error) {
            console.error('Checkout failed', error);
            alert('Checkout failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            id="checkout-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
            <div className="relative w-full max-w-md p-4">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Checkout Details
                        </h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            ×
                        </button>
                    </div>

                    <form className="p-4 space-y-4" onSubmit={handleSubmit}>
                        {successMsg && (
                            <div className="p-2 text-green-600 bg-green-100 rounded">
                                {successMsg}
                            </div>
                        )}

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 text-sm border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                Address
                            </label>
                            <input
                                required
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full p-2 text-sm border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                Contact Number
                            </label>
                            <input
                                required
                                type="text"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                                className="w-full p-2 text-sm border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Delivery Start
                                </label>
                                <input
                                    required
                                    type="date"
                                    value={deliveryStart}
                                    onChange={(e) => setDeliveryStart(e.target.value)}
                                    className="w-full p-2 text-sm border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Delivery End
                                </label>
                                <input
                                    required
                                    type="date"
                                    value={deliveryEnd}
                                    onChange={(e) => setDeliveryEnd(e.target.value)}
                                    className="w-full p-2 text-sm border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                                Products
                            </h4>
                            <ul className="space-y-1 text-sm">
                                {selectedProducts.map((product) => (
                                    <li key={product.id} className="flex justify-between">
                                        <span>{product.title}</span>
                                        <span>${product.price.toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-2 font-bold text-right text-blue-600">
                                Total: ${totalPrice.toFixed(2)}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg"
                        >
                            {isLoading ? 'Processing...' : 'Confirm Checkout'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;
