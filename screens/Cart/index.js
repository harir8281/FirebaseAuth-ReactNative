import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TitleComponent from '../../components/TitleComponent'
import NavHandler from '../../components/NavHandler'

const Cart = () => {
  return (
    <View>
      <TitleComponent screenName={'Cart'} subTitle='Human' />
      <NavHandler/>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})