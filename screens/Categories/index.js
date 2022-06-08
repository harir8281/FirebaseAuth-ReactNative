import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TitleComponent from '../../components/TitleComponent'
import NavHandler from '../../components/NavHandler'

const Categories = () => {
  return (
    <View>
      <TitleComponent screenName={'Categories'} subTitle="Human" />
      <NavHandler/>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})