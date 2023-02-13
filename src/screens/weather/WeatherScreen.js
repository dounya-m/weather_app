import { StyleSheet ,View, Text, ImageBackground } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Location from 'expo-location';

import DateTime from '../../components/weather/DateTime'
import WeatherScroll from '../../components/weather/WeatherScroll'

const bg = require('../../../assets/bg.png')
// const API_KEY = "f513209bdb0890ce3722a8b63edbb556"
// const API = `https://api.openweathermap.org/data/2.5/onecall?lat=-9.2717123&lon=32.2930725&exclude=daily,minutely&cnt=24&units=metric&appid=${API_KEY}`
export default function WeatherScreen() {

  // const [data, setData] = useState({})
  // const [url, setUrl] = useState(API)

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, [url]);
  // useEffect(() => {
  //   (async function () {
  //     setUrl(
  //       await API()
  //         .then((response) => response)
  //         .then((data) => {
  //           return data;
  //         })
  //     );
  //   })();
  // }, []);

  // const dataType  =   data.current
  // const dataTypeLoad  =data.hourly;

  // var vento = Math.round((dataTypeLoad ? dataType.wind_speed : null) * 3.6);
  // var feels = Math.round(dataTypeLoad ? dataType.feels_like : null);
  // var uvi = dataTypeLoad ? dataType.uvi : null;
  // var pressure = dataTypeLoad ? dataType.pressure : null;
  

  return (
    <View style={styles.continer}>
        <ImageBackground source={bg} style={styles.img}>
        <DateTime 
        // current={data.current} lat={data.lat} lon={data.lon} timezone={data.timezone} 
        />
        {/* <Text style={styles.paragraph}>{vento} </Text> */}
        {/* <Text style={styles.paragraph}>Latitue: {lon} Longitude:{lat}</Text> */}
        <WeatherScroll />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
    },
    img:{
        flex:1, 
        resizeMode:"cover", 
        justifyContent:'center'
    }
})
//  WeatherScreen


