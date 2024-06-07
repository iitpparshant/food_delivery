import React, { useEffect, useState } from 'react';
import Navbar from '../../conponents/Navbar/Navbar';
import Footer from '../../conponents/Footer/Footer';
import './style.css'

export default function MyOrder() {
    const [orderData, setOrderData] = useState([]);

    const fetchMyOrder = async () => {
        try {
            const response = await fetch("https://food-delivery-kohl-kappa.vercel.app/api/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail'),
                }),
            });

            const data = await response.json();
            console.log(data);

            setOrderData(data.orderData || []); // Ensure that data.orderData is an array
        } catch (error) {
            console.error('Error fetching my order data:', error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    console.log("Rendered Order Data:", orderData);

    return (
        <>
            {/* <div className="navbar-container">
                <Navbar/>
            </div> */}
            <div className="main-container">
                <div className="order-container">
                    {orderData.length !== 0 ? (
                        <div>
                            {orderData['order_data'].slice(0).reverse().map((item, index) => (
                                <div key={index} className="order-item">
                                    <div className="order-date">{item[1]}</div>
                                    {item[0].map((dish, dishIndex) => (
                                        <div key={dishIndex} className="dish-item">
                                            <h5>{dish.name}</h5>
                                            <div className="dish-details">
                                                <span>{dish.qty} {dish.size}</span>
                                                <div className='price'>
                                                    ₹{dish.price}/-
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-orders">No orders found.</p>
                    )}
                </div>
            </div>
            {/* <div className='footer-container'>
                <Footer/>
            </div> */}
        </>
    );
}
