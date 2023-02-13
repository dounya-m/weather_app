import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const FuturForcast = () => {
return (
    <View style={{flexDirection: 'row'}}>
        <FuturForcastItem />
        <FuturForcastItem />
        <FuturForcastItem />
    </View>
)
}

const FuturForcastItem = () => {
    const img = {uri: "http://openweathermap.org/img/wn/10d@2x.png"}
    return(
        <View style={{flex: 1, justifyContent: 'center', backfaceVisibility: '#00000013', borderRadius: 20, borderColor: "#eee", borderWidth: 1, padding:  20, marginLeft: 10,}}>
            <Text style={futurStyle.day}>Mon</Text>
            <Image source={img} style={futurStyle.img} />
            <Text style={futurStyle.text}>Night - 26&#176;C</Text>
            <Text style={futurStyle.text}>Day - 26&#176;C</Text>
        </View>
    )
}

const futurStyle = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
    },
    day: {
        fontSize: 20,
        color: 'white',
        backgroundColor: '#3c3c44', 
        padding: 7,
        textAlign: 'center',
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15
    },
    text:{
        fontSize: 16,
        color: 'white',
        fontWeight: "100",
        textAlign: "center"
    }
})
export default FuturForcast