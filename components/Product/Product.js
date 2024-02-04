import React from 'react';
import {Text, Image, View} from 'react-native'
import styles from './Product.style'

const Product = ({product}) => {
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Image style={styles.image} source= {{uri: product.imgURL}}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.stock}>{product.inStock ? "" : "STOKTA YOK"}</Text>
            </View>
        </View>
    )
} 

export default Product