import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import moment from 'moment-timezone'

const FuturForcast = ({data}) => {
    return (
    <View style={{flexDirection: 'row'}}>
        {data?.length > 0 ? 
        data.map((data, idx) => {
            return idx !== 0 && <FuturForcastItem futurForcast={data} />
        })
        : <View></View>
        }
    </View>
    );
};


const FuturForcastItem = ({futurForcast}) => {
    if(futurForcast && futurForcast.weather){
        const img = {uri: "http://openweathermap.org/img/wn/" + futurForcast.weather[0].icon + "@2x.png"}
        return(
            <View style={{flex: 1, justifyContent: 'center', backfaceVisibility: '#00000013', borderRadius: 20, borderColor: "#eee", borderWidth: 1, padding:  20, marginLeft: 10,}}>
                <Text style={futurStyle.day}>{moment(futurForcast.dt * 1000).format('ddd')}</Text>
                <Image source={img} style={futurStyle.img} />
                <Text style={futurStyle.text}>Night - { futurForcast.temp.night }&#176;C</Text>
                <Text style={futurStyle.text}>Day - {futurForcast.temp.day}&#176;C</Text>
            </View>
        )
    }else{
        <View>

        </View>
    }
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
        fontSize: 14,
        color: 'white',
        fontWeight: "100",
        textAlign: "center"
    }
})
export default FuturForcast