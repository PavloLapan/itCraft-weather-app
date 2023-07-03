import {informationFormProps} from "../../utils/types.ts";

class fetchConfiguration {
    public getWeatherFetchConfiguration = async (position: any) => {
        try {
            const weatherObj = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_FETCH_API_KEY}&q=${position}`)
            const result = await weatherObj.json();
            return result;
        }
        catch (err) {
            console.error(`The problem is in ${err}`);
        }
    }
    public postInformationForm = async (fields: informationFormProps) => {
        try {
            const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_FETCH_API_KEY}&q=${fields}`, {method: "POST"})
            const result = await res.json();
            return result;
        }
        catch (err){
            console.error(`The problem is in ${err}`);
        }
    }
}

export default fetchConfiguration