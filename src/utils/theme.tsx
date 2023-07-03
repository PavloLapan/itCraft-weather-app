import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
        components: {
            MuiTypography: {
                defaultProps: {
                    variantMapping: {
                        h1: 'h21',
                        h2: 'h2',
                        h3: 'h3',
                        h4: 'h4',
                        h5: 'h5',
                        h6: 'h6',
                        subtitle1: 'h2',
                        subtitle2: 'h2',
                        body1: 'span',
                        body2: 'span',
                    },
                },
            },
        },
        palette: {
            primary:{
                main: '#FFF',
                red: '#a41d1d',
                pink: '#a18cd1',
                darkPink: '#fbc2eb'
            }
        }
});