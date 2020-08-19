import React ,{useState} from 'react';
import './App.css';
import axios from "axios"
import Logo from  "./Assets/logo.png"
import {Input , Button} from "@material-ui/core"
import WeatherCard from './Components/WeatherCard';

function App() {

  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [weather, setWeather] = useState({})
  const [temp, setTemp] = useState("")

  const API_KEY = "7197494c5e0d88d802b603efaf14b0f4";

  const fetchWeather = async () => {
    try {
      const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
      setWeather(data.data.weather[0]);
      setTemp(data.data.main.temp)
    } catch (error) {
      alert("Input Proper City and Country Name")
    }
    
  }
console.log(weather)

  return (
    <div className="App">
      <h1 className="app_title">Weather App</h1>
      <img src= {Logo} alt="" className="app_logo"/>
      <WeatherCard weather = {weather} temp = {temp} />
      <Input className="app_cityinput" placeholder="City" value = {city} onChange={(e) => setCity(e.target.value)} type="text"/>
      <Input className=  "app_countryinput"  placeholder="Country" value = {country} onChange={(e) => setCountry(e.target.value)} type="text"/>
      <Button  variant="contained" color="primary" onClick= {fetchWeather} >Show Weather</Button>
    </div>
  );
}

export default App;
