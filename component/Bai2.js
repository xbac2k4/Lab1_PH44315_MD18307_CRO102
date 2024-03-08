import { Button, Image, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSetion from './CustomSection'

const data = [
  {
      title: "Lịch trình",
      events: [
          {
              title: "Địa điểm",
              content: "Hồ Tràm, Vũng Tàu"
          },
          {
              title: "Thời gian",
              content: "09:00 AM - 12:00 AM, 12/12/2024"
          },
          {
              title: "Phương tiện di chuyển",
              content: "Xe bus"
          },
          {
              title: "Thời gian",
              content: "21:00 - 22:00"
          },
          {
              contentComponent : (
                  <View style={{
                      marginTop: -20,
                  }}>
                      <Text>Hình ảnh</Text>
                      <Image height={150} source={{uri:'https://scr.vn/wp-content/uploads/2020/07/C%E1%BA%A3nh-bi%E1%BB%83n-Full-HD-s%E1%BA%AFc-n%C3%A9t.jpg'}}/>
                  </View>
              )
          }
      ]
  },
  {
      title: "Khách sạn",
      events: [
          {
              title: "Tên khách sạn",
              content: "Hồng Quỳnh"
          },
          {
              title: "Giờ mở cửa",
              content: "06:00 AM - 12:00 AM"
          },
          {
              title: "Địa điểm",
              content: "234 Quang Trung, Hồ Chí Minh"
          },
          {
              contentComponent : (
                  <Button title='Chi tiết'></Button>
              )
          }
      ]
  }
]
const Bai2 = () => {
  return (
    <CustomSetion data={data}></CustomSetion>
  )
}

export default Bai2

const styles = StyleSheet.create({})