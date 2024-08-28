import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Search = ({updateinfo}) => {
    const[city,setCity]=useState("");
    const[error,setError]=useState(false)
    const   APIURL="https://api.openweathermap.org/data/2.5/weather";
    const   APIKEY="11ddb6240f08458985ca788d6fb67b0a";
  
    const getWeatherData=async()=>{
      try{
        let response=await fetch(`${APIURL}?q=${city}&appid=${APIKEY}&units=metric`)
        response=await response.json();
        console.log(response);
        const data={
            city:city,
            temp:response.main.temp,
            humidity:response.main.humidity,
            pressure:response.main.pressure,
            windSpeed:response.wind.speed,
            description:response.weather[0].description,   
        }
        console.log(data);
        return data;
      }catch(err){
        throw err;
      }
        
    }

    const handleClick=(e)=>{
        setCity(e.target.value);
       
    }
    const handleSubmit=async(e)=>{
      try{
        e.preventDefault();
        console.log(city);
        let newData=await getWeatherData();
        console.log("search");
        console.log(newData);
        updateinfo(newData);
      }catch(err){
        setError(!error)
      }
       
    }
  return (
    <div>
      <h2>Weather Widget</h2>
      <form onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="City name" variant="outlined" value={city} onChange={handleClick} required/><br/><br/>
      <Button variant="contained" size='large' type='submit'>Search</Button>
      {error&&<p>Don't exists place</p>}
      </form>
    </div>
  )
}

export default Search
