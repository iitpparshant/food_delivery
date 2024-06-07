import React, { useState, useEffect } from 'react';
import topImage1 from '../../image/top.jpg';
import topImage2 from '../../image/1.jpg';
import topImage3 from '../../image/2.jpg';
import topImage4 from '../../image/3.jpg';
import topImage5 from '../../image/4.jpg';
import topImage6 from '../../image/5.jpg';
import topImage7 from '../../image/6.jpg';
import topImage8 from '../../image/7.jpg';
import topImage9 from '../../image/8.jpg';

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    const totalSlides = 9; // Update this to the total number of slides

    const getSlideImage = () => {
        switch (slideIndex) {
            case 0: return topImage1;
            case 1: return topImage2;
            case 2: return topImage3;
            case 3: return topImage4;
            case 4: return topImage5;
            case 5: return topImage6;
            case 6: return topImage7;
            case 7: return topImage8;
            case 8: return topImage9;
            default: return topImage5; // handle default case or throw an error
        }
    };

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '500px',
        overflow: 'hidden',
        backgroundImage: `url(${getSlideImage()})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div style={containerStyle}>
            <div>
            </div>
        </div>
    );
};


export default Slideshow;
