import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TitleComponent from '../../components/TitleComponent'
import NavHandler from '../../components/NavHandler'

const Notifications = () => {
  return (
    <View>
      <TitleComponent screenName={'Notifications'} subTitle='Human' />
      <NavHandler/>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})