import { StyleSheet ,View, Text, ImageBackground } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Location from 'expo-location';

import DateTime from '../../components/weather/DateTime'
import WeatherScroll from '../../components/weather/WeatherScroll'


const API_KEY = "f513209bdb0890ce3722a8b63edbb556"
// const API = 
export default function WeatherScreen() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("40.7128", "-74.0060")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`
      https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}
      `).then(res => res.json()).then(data => {
      setData(data)
      console.log(data);
      })
    }
  }

  let bg ;
  if (data && data.current && data.current.rain) {
    bg = require('../../../assets/rain.png')
  } else {
    bg = require('../../../assets/bg.png')
  }

  return (
    <View style={styles.continer}>
        <ImageBackground source={bg} style={styles.img}>
        <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} />
        {data.daily ? <WeatherScroll weatherData={data.daily} /> : <Text></Text>}
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


