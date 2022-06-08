import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TitleComponent from '../../components/TitleComponent'
import NavHandler from '../../components/NavHandler'

const Home = () => {
  return (
    <View>
      <TitleComponent screenName={'Human'} />
      <NavHandler/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})