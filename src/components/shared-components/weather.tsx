import {Box, BoxProps, styled} from "@mui/material";

const WeatherWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    width: 850,
    margin: "3em auto",
    border: `2px solid ${theme.palette.primary.red}`,
    backgroundImage:`linear-gradient(to top, ${theme.palette.primary.pink} 0%, ${theme.palette.primary.darkPink} 100%);`,
    padding: '2rem'

}));

export default WeatherWrapper
