import React from 'react'
import "./WeatherCard.css"
import { Card, CardContent, Typography} from '@material-ui/core'

const WeatherCard = ({weather : {main , description , icon} , temp}) => {

    return (
        main ? (
            <div className="weather">
        <Card className="weather_card" variant="outlined">
        <CardContent>
            <Typography className="main" variant="h5" component="h2">
                   {`Weather:${main}`} 
            </Typography>
            <Typography className="description" variant="h5" component="p">
                {`Description : ${description}`}  
            </Typography>
            <Typography className="temp" variant="h5" component="p">
                {`Temperature : ${temp}C`}  
            </Typography>
        </CardContent>
        </Card>
        </div>
        ):(
            <h3 className="weather">Enter the Location Below :</h3>
        )
        
    )
}

export default WeatherCard
