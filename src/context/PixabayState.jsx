import React, { useEffect, useState } from 'react';
import PixabayContext from './PixabayContext';

const PixabayState = (props) => {
    const [imageData, setImageData] = useState([]);
    const api_key = "46045153-9dec64d61171f79f307f59715";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pixabay.com/api/?key=${api_key}&q=london&image_type=photo&pretty=true&per_page=100`);
                const data = await response.json();
                setImageData(data.hits); // Assuming the image data is in the 'hits' array
                console.log(data.hits);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    const fetchImageByCategory =async (cat)=>{
        const response = await fetch(`https://pixabay.com/api/?key=${api_key}&q=category=${cat}&image_type=photo&pretty=true&per_page=100`);
        const data = await response.json();
        setImageData(data.hits); // Assuming the image data is in the 'hits' array
        console.log(data.hits);

    }

    return (
        <PixabayContext.Provider value={{ imageData,fetchImageByCategory }}>
            {props.children}
        </PixabayContext.Provider>
    );
};

export default PixabayState;
