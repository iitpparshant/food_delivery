import React from 'react';
import { useCart, useDispatchCart } from '../../conponents/ContextReducer/ContextReducer';
import './Cart.css';


export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='empty-cart-message' style={{ color: 'white' }}>The Cart is Empty!</div>
      </div>
    );
  }



  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(userEmail);
    const currentDate = new Date();

    // Format the date and time as "1/2/2023 12:35"
    const formattedDateTime = currentDate.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    }) + ' ' +
      currentDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });

    let response = await fetch("https://food-delivery-kohl-kappa.vercel.app/api/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: [data, formattedDateTime],
        email: userEmail
        // order_date: new Date().toISOString()
      })
    });

    console.log("JSON RESPONSE:::::", response);

    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      {console.log(data)}
      <div className='custom-cart-container' style={{ color: 'white' }}>
        <table className='custom-cart-table'>
          <thead className='custom-table-header'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="custom-delete-btn" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='custom-total-price'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='custom-checkout-btn' onClick={handleCheckOut}>Check Out</button>
        </div>
      </div>
    </div>
  );
}
