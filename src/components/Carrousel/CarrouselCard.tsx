import React, { useState, useRef } from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'

import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarrouselCardItem'
import data from './data'

const CarouselCards = () => {
    const isCarousel = useRef(null)
    const [index, setIndex] = useState(0)

    return (
        <View>
            <Carousel
                layout="tinder"
                layoutCardOffset={9}
                autoplay={true}
                autoplayInterval={6000}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    )
}


export default CarouselCards