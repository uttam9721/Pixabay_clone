import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'
const images = () => {
    const {imageData} = useContext(PixabayContext);

  return (
    <div className="container">
    <div className='flex'>
      {imageData.map((image)=>
      (<div key={image.id}>
        <div className="item">
            <img src={image.largeImageURL} alt="img" />
        </div>
      </div>))}
    </div>
    </div>
  )
}

export default images
