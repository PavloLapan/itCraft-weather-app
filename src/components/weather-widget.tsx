import fetchConfiguration from "./helpers/fetch-configuration.ts";
import {useEffect, useState} from "react";
import {Box, CircularProgress, Typography} from "@mui/material";
import WeatherWrapper from "./shared-components/weather.tsx";
import {WeatherDataProps} from "../utils/types.ts";



const WeatherWidget = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const fetchConfig = new fetchConfiguration()
    const [weatherData, setWeatherData] = useState<WeatherDataProps>()

    useEffect( () => {
        // @ts-ignore
        async function fetchData(pos) {
           const query = `${pos.coords.latitude},${pos.coords.longitude}`
            const response = await fetchConfig.getWeatherFetchConfiguration(query);
            setWeatherData(response)
            setIsLoading(false)
        }
        navigator.geolocation.getCurrentPosition((pos)=>fetchData(pos), ()=> {alert('You didn`t allowed use your position')})
    },[])

    if(isLoading){
        <CircularProgress color="secondary" />
    }

    return (
        <WeatherWrapper>
            {
                weatherData &&
                (
                    <Box sx={{display: 'flex'}}>
                        <div>

                            <Box
                                component="img"
                                alt={weatherData.current.condition.text}
                                src={weatherData.current.condition.icon}
                                sx={{
                                    height: 150,
                                    width: 150,
                                }}
                            >
                            </Box>

                            <Typography variant="h2" component="h2">
                                {weatherData.current.temp_c}°С
                            </Typography>

                            <Typography variant="h5" component="h5">
                                {weatherData.current.condition.text}
                            </Typography>
                        </div>


                        <div style={{textAlign: 'right'}}>
                            <Typography variant="h3" component="h2">
                                {new Date().toUTCString()}
                            </Typography>

                            <Typography variant='h4' component='h4'>
                                {weatherData.location.country}
                            </Typography>

                            <Typography  component="p">
                                {weatherData.location.name}, {weatherData.location.region}
                            </Typography>

                            <Typography  component="p">
                                Daily max/min ({weatherData.forecast.forecastday[0].day.maxtemp_c
                            }°С, {weatherData.forecast.forecastday[0].day.mintemp_c}°С)
                            </Typography>

                        </div>

                    </Box>

                )

            }


        </WeatherWrapper>
    )
}

export default WeatherWidget