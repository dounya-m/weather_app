import { View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import React from 'react'
import FuturForcast from './FuturForcast'

const WeatherScroll = () => {
return (
    <ScrollView horizontal={true} style={ScrolList.scrollView}>
    <CurrentItemEl />
    <FuturForcast />
    </ScrollView>
)
}

const CurrentItemEl = () => {
    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
    return(
        <View style={ScrolList.currenTempContainer}>
            <Image source={img} style={ScrolList.img} />
            <View style={ScrolList.orderContainer}>
                <Text style={ScrolList.day}>sunday</Text>
                <Text style={ScrolList.temp}>Night - 28&#176;C</Text>
                <Text style={ScrolList.temp}>Day - 35&#176;C</Text>
            </View>
        </View>
    )
}

const ScrolList = StyleSheet.create({
    scrollView: {
        flex: 0.4,
        backgroundColor: '#18181bcc',
        padding: 30,
    },
    img: {
        width: 150,
        height: 150,
    },
    currenTempContainer: {
        flexDirection: 'row', 
        backgroundColor: '#00000033', 
        justifyContent:'center', 
        alignItems: 'center', 
        borderRadius: 10, 
        borderColor: '#eee', 
        borderWidth: 1,
        padding: 15
    },
    orderContainer: {
        padding: 40
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
    temp: {
        fontSize: 16,
        color: 'white',
        fontWeight: "100",
        textAlign: "center"
    }
})
export default WeatherScroll