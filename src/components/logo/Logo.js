import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// import  { BlurView }  from 'react-native-blur'

const Logo = () => {
  return (
    <View>
    <View style={{backgroundColor: '#8ceae6', flex: 0.3, width: 30, height: 30, borderRadius: 100 ,
    position: 'absolute', top: 2, left: 50, right: 0, bottom: 0,}} blurRadius={90} >
    </View>
    <Text style={logostyles.logo}>Zeus</Text>
    </View>
  )
}

const logostyles = StyleSheet.create({
    logo:{
        fontSize: 32,
        fontWeight: "800",
        color: "#100F36",
    }
})

export default Logo