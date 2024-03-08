import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from './CustomHeader'

const Bai1 = () => {
  return (
    <View>
      <CustomHeader
        title='Header'
        leftIconSize={30}
        iconLeft='https://cdn4.iconfinder.com/data/icons/outline-arrows-7/24/arrow_leftwards-512.png'
        rightIconSize={22}
        iconRight='https://icon-library.com/images/sandwich-menu-icon/sandwich-menu-icon-24.jpg' />
      <CustomHeader
        title='Trang Chủ'
        leftIconSize={30}
        iconLeft='https://cdn4.iconfinder.com/data/icons/outline-arrows-7/24/arrow_leftwards-512.png' />
      <CustomHeader
        leftIconSize={30}
        iconLeft='https://cdn4.iconfinder.com/data/icons/outline-arrows-7/24/arrow_leftwards-512.png' />
    </View>
  )
}

export default Bai1

const styles = StyleSheet.create({})