
export type WeatherDataProps = {
    current: {
        condition: {
            icon: string;
            text: string;
        };
        temp_c: number;
    };
    forecast: {
        forecastday: [
            {
                day: {
                    maxtemp_c: number;
                    mintemp_c: number;
                };
            }
        ];
    };
    location: {
        region: string;
        country: string,
        name: string;
    };
};

export interface informationFormProps {
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    city: string,
    state: string,
    zip: string,
}