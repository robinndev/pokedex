import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from "react-native"

import { styles } from './styles'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground borderRadius={12} style={styles.background} source={{uri: item.imgUrl}}>
                <View style={styles.overlay}/>
                <View style={styles.container}>


                    <Text style={styles.header}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                </View>

            </ImageBackground>
        </View>
    )
}


export default CarouselCardItem