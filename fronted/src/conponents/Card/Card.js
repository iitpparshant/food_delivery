import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { useCart, useDispatchCart } from '../ContextReducer/ContextReducer';


export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();

    let options = props.options;
    let priceOptions = Object.keys(options);

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState('')

    const handleAddToCart = async () => {
        let food=[];
        for(const item of data){
            if(item.id===props.foodItem._id){
                food= item;
                break;
            }
        }
        if(food.length !== 0){
            if(food.size===size){
                await dispatch({type:"UPDATE", id:props.foodItem._id,price:finalPrice,qty:qty});
                return ;
            }
            else if(food.size!==size){

                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
                return;
            }
            return;
        }
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
        // console.log(data);
        alert(`${props.foodItem.name} Added to Cart`);
    }

    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value);
    }, [])

    return (
        <div>
            <div className="card">
                <img style={{'height':'150px'}} src={props.foodItem.img} alt="" />
                <h2 className="card-title">{props.foodItem.name}</h2>
                {/* <p className="card-content"></p> */}
                <div className="selector">
                    <select id="selectOption" onChange={(e) => setQty(e.target.value)}>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            )
                        })}
                    </select>
                    <select id="selectOption" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                        {priceOptions.map((data) => {
                            return <option key={data} value={data}>{data}</option>
                        })}
                    </select>
                    <div className="price">
                    ₹{finalPrice}/-
                    </div>
                </div>
                <hr />
                <button className='button' onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}
