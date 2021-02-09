import React from 'react'
import { ImagePropTypes, Text, TouchableOpacity, StyleSheet } from 'react-native'


const ListItem = ({item, onItemPress}) => {

    return (
        <TouchableOpacity style={styles.itemStyle} onPress={() => onItemPress(item.id)}>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    itemStyle: {
        marginBottom: 10
    }
})

export default ListItem