import React from 'react'
import { Carousel, Card } from 'react-bootstrap'
const Slider = ({img}) => {
  return <>
    <Carousel>
        {img.map((x, index)=>(
            <Carousel.Item>
                <img
                className='d-block w-100'
                src={x.image}
                style={{objectFit: 'cover', height: '500px'}}
                />
            </Carousel.Item>
        ))}
    </Carousel>
  </>
}

export default Slider