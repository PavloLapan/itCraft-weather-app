import ('dotenv')


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

    static postInformationForm = () => {

    }


}

export default fetchConfiguration