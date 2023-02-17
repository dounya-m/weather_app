import { View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import React from 'react'
import FuturForcast from './FuturForcast'
import moment from 'moment-timezone'

const WeatherScroll = ({weatherData}) => {
return (
    <ScrollView horizontal={true} style={ScrolList.scrollView}>
    <CurrentItemEl data={weatherData && weatherData.length > 0 ? weatherData[0] : {}} />
    <FuturForcast data={weatherData} />
    </ScrollView>
)
}

const CurrentItemEl = ({data}) => {
    if(data && data.weather){
        const img = {uri: 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'}
    return(
        <View style={ScrolList.currenTempContainer}>
            <Image source={img} style={ScrolList.img} />
            <View style={ScrolList.orderContainer}>
                <Text style={ScrolList.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                <Text style={ScrolList.temp}>Night - { data.temp.night }&#176;C</Text>
                <Text style={ScrolList.temp}>Day - {data.temp.day}&#176;C</Text>
            </View>
        </View>
    )
    }else{
        return(
            <View>

            </View>
        )
    }
    
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