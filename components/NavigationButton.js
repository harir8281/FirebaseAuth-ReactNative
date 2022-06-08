import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'

const NavigationButton = ({label,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

export default NavigationButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:"cyan",
        padding:6,
        borderRadius:30,
        marginHorizontal:10
        
    },
    text:{
        fontSize:15
    }
})