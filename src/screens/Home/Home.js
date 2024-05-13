import React, { useEffect, useState } from 'react';
import Navbar from '../../conponents/Navbar/Navbar';
import Card from '../../conponents/Card/Card';
import './style.css';
import Slideshow from './slides';
import Footer from '../../conponents/Footer/Footer';


export default function () {
    const [search, setSearch] = useState('')
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);


    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:5000/api/foodData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            response = await response.json();
            // Assuming response is an array with two elements
            setFoodItem(response[0]);
            setFoodCat(response[1]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <div style={{ 'position': 'fixed', 'zIndex': '100', 'width': '100%' }}>
                <Navbar />
            </div>
            <div>
                <div className="carousel-container">
                    <div className="slides">
                        {/* <img src={topImage1} alt="Top" className="carousel-image" /> */}
                        <Slideshow />
                    </div>
                    <div className="content-container">
                        <h1>Welcome to Our Website</h1>
                        <p>Explore the amazing content and find what you're looking for.</p>
                        <div className="search-bar-container">
                            <input type="search" placeholder="Search..." className="search-bar" value={search} onChange={((e) => { setSearch(e.target.value) })} />
                            {/* <button type="submit" className="submit-button">
                                Submit
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="category-container">
                {foodCat.length > 0 ? (
                    foodCat.map((data) => (
                        <div key={data._id} className="category">
                            <div className="categoryname">

                                {data.CategoryName}
                            </div>
                            <hr className="hr-line" />
                            {foodItem.length > 0 ? (
                                <div className="card-container">
                                    {foodItem
                                        .filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                                        .map((filterItem) => (
                                            <div key={filterItem._id}>
                                                <Card foodItem={filterItem} options={filterItem.options[0]} />
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <div className="no-data-message">No such data</div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="no-data-message">No food categories available</div>
                )}
            </div>
            <Footer />

        </>
    );
}
