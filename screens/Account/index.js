import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TitleComponent from '../../components/TitleComponent'
import NavHandler from '../../components/NavHandler'

const Account = () => {
  return (
    <View>
      <TitleComponent screenName={'Account'} subTitle='Human' />
      <NavHandler/>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})
