import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import Card from './Card'
import { GalleryData } from './GalleryData'
function Gallery() {
  return (
    < >
        <HeadTitle />

        <secton className='gallery top'> 
            <div className='container grid'>
                {
                    GalleryData.map((value) => {
                        return <Card image = {value.image} title = {value.title} />
                    })
                }
            </div>
        </secton>
    </ >
  )
}

export default Gallery