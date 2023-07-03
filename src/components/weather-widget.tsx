import fetchConfiguration from "./helpers/fetch-configuration.ts";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";



const WeatherWidget = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const fetchConfig = new fetchConfiguration()

    useEffect( () => {



        // @ts-ignore
        async function fetchData(pos) {

           const query = `${pos.coords.latitude},${pos.coords.longitude}`

            const response = await fetchConfig.getWeatherFetchConfiguration(query);
            setIsLoading(false)
            return response

        }
        navigator.geolocation.getCurrentPosition((pos)=>fetchData(pos))
    },[])

    if(isLoading){
        <CircularProgress color="secondary" />
    }

    return (
        <>
            <p>Weather widget</p>


        </>
    )
}

export default WeatherWidget