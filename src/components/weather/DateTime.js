import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={{color: '#eee', fontSize: 14, fontWeight: '100'}}>
                {title}
            </Text>
            <Text style={{color: '#eee', fontSize: 14, fontWeight: '100'}}>
                {value}{unit}
            </Text>
        </View>
    )
}

const DateTime = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursFormat = hour >= 13 ? hour % 12 : hour;
            const minutes = time.getMinutes();
            const ampm = hour >= 12 ? 'pm' : 'am';

            setTime((hoursFormat < 10 ? '0' 
            + hoursFormat : hoursFormat) + ':' + (minutes < 10 ? '0' 
            + minutes : minutes) + ' ' + ampm) 

            setDate(days[day] + ',' + date + ' ' + months[month])
        }, 1000)
    }, [])

return (
    <View style={weather.container}>
        <View>
            <View>
                <Text style={weather.headering}>{time}</Text>
            </View>
            <View>
                <Text style={weather.subhadling}>{date}</Text>
            </View>
            <View style={weather.witherItemContain}>
                <WeatherItem title="Humidity" value="79" unit="%" />
                <WeatherItem title="Pressur" value="1000" unit="hPA" />
                <WeatherItem title="Sunrise" value="06:00" unit="am" />
                <WeatherItem title="Sunset" value="06:30" unit="pm" />
            </View>
        </View>

        
        <View style={weather.right}>
            <Text style={weather.timezone}></Text>
            <Text style={weather.latlong}>4.22N 50E</Text>
        </View>
    </View>
)
}
const weather = StyleSheet.create({
    container:{
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    headering:{
        fontSize: 45,
        color: 'white',
        fontWeight: 'normal'
    },
    subhadling:{
        fontSize: 25,
        color: "#eee",
        fontWeight: 'light'
    },
    right:{
        textAlign: 'right',
        marginTop: 20,
    },
    timezone:{
        fontSize: 20,
        color: 'white'
    },
    latlong:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    witherItemContain:{
        backgroundColor: "#18181b99",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,

    }
})

export default DateTime