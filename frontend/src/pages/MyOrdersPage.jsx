import { useState, useEffect } from 'react';

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const mockOrders = [
                {
                    id: 1234,
                    createdAt: new Date().toISOString(), // Use valid date
                    shippingAddress: {
                        city: "Lahore",
                        country: "Pakistan"
                    },
                    orderItems:[
                        {
                            name: 'Product 1',
                            image: 'https://picsum.photos/200/300?random=1',
                        }
                    ],
                    totalPrice: 100,
                    ispaid: false,
                },
                {
                    id: 1235,
                    createdAt: new Date().toISOString(),
                    shippingAddress: {
                        city: "Karachi",
                        country: "Pakistan"
                    },
                    orderItems: [
                        {
                            name: 'Product 2',
                            image: 'https://picsum.photos/200/300?random=2',
                        }
                    ], 
                    totalPrice: 200,
                    ispaid: true,
                },
                {
                    id: 1236,
                    createdAt: new Date().toISOString(),
                    shippingAddress: {
                        city: "Islamabad",
                        country: "Pakistan"
                    },
                    orderItems: [
                        {
                            name: 'Product 3',
                            image: 'https://picsum.photos/200/300?random=3',
                        }
                    ],
                    totalPrice: 300,
                    ispaid: false,
                },
            ];
            setOrders(mockOrders);
        }, 1000);
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold my-6">My Orders</h2>
            <div className="relative shadow-md sm:rounded-lg overflow-hidden">
                <table className="min-w-full text-left text-sm text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="py-2 px-4 sm:py-3">Image</th>
                            <th className="py-2 px-4 sm:py-3">Order ID</th>
                            <th className="py-2 px-4 sm:py-3">Created At</th>
                            <th className="py-2 px-4 sm:py-3">Shipping Address</th>
                            <th className="py-2 px-4 sm:py-3">Price</th>
                            <th className="py-2 px-4 sm:py-3">Status</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        { orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order.id} className="border-b hover:bg-gray-50 cursor-pointer">
                                    <td className="py-2 px-4 sm:py-4 sm:px-4">
                                        <img 
                                            src={order.orderItems[0].image} 
                                            alt={order.orderItems[0].name} 
                                            className="w-10 h-10 object-cover rounded-lg" 
                                        />
                                    </td>
                                    <td className='py-2 px-4 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>
                                        #{order.id}
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        {new Date(order.createdAt).toLocaleDateString()}{" "}
                                        {new Date(order.createdAt).toLocaleTimeString()}
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        {order.shippingAddress 
                                            ? `${order.shippingAddress.city}, ${order.shippingAddress.country}` 
                                            : "N/A"}
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        ${order.totalPrice}
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        <span className={`text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${
                                            order.ispaid ? 'bg-green-500' : 'bg-red-500'
                                        }`}>
                                            {order.ispaid ? "Paid" : "Pending"}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td 
                                    colSpan={7} 
                                    className="py-4 px-4 sm:py-4 sm:px-4 text-center text-gray-500">
                                    No orders found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyOrdersPage;
