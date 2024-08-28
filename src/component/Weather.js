import React,{useState} from 'react'
import Search from './Search'
import Info from './Info'

const Weather = () => {
   const [weather,setWeather]=useState({
    city:"Mirzapur",
    temp:19,
    humidity:18,
    pressure:99,
    windSpeed:101,
    description:"cloudy"
   })
   let updateData=(newData)=>{
   setWeather(newData)
   }
  return (
    <div>
      <Search updateinfo={updateData}/>
      <Info info={weather}/>
    </div>
  )
}

export default Weather
