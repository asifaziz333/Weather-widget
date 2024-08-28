import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import KayakingIcon from '@mui/icons-material/Kayaking';
import Button from '@mui/material/Button';
import './Info.css'

const Info = ({info}) => {
    //const img="https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM="
  // const info={
  //   city:"Delhi",
  //   tempMax:23.33,
  //   tempMin:21,
  //   humidity:88,
  //   weather:"haze"
  // }
  const rain_img="https://t4.ftcdn.net/jpg/01/63/96/63/360_F_163966311_qh3qSk57mw9oLPOklZigzX9zlB5DgdaM.jpg"
  const hot_img="https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-148330905.jpg"
  const cold_img="https://media.istockphoto.com/id/1428401936/photo/beautifull-background-on-a-christmas-theme-with-snowdrifts-snowfall-and-a-blurred-background.jpg?s=612x612&w=0&k=20&c=msIbZYv4J7aplO6SnkoseIEi43W2Ej1BFLpccOOfw6E="
    return (
    <div>
      <div className='card'>
    <Card sx={{ maxWidth: 345 }} style={{width:"350px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80?rain_img:info.temp>20?hot_img:cold_img}

          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">      
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
           <Button endIcon={info.humidity>80?<ThunderstormIcon/>:info.temp>20?<AcUnitIcon/>:<KayakingIcon/>}>{info.city}</Button>
           <p>Temperature:{info.temp}&deg;C</p>
           <p>Pressure:{info.pressure}</p>
           <p>Humidity:{info.humidity}</p>
           <p>Thw weather can describe as {info.description}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  )
}

export default Info
