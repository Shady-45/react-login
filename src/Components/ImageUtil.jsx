import React from 'react'

const ImageUtil = () => {
  const IMAGES = {
    image1 : new URL('../assets/image-1.png', import.meta.url).href
  }

  
  
  
  return (
    <section className='image-section'>
        
    <div className='container'></div> 
    <div className='line'></div> 
     <img className='image-container' src={IMAGES.image1} alt="" /> 
        
        </section>
  )
}

export default ImageUtil