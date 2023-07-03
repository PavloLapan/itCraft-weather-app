import {Box, Typography} from "@mui/material";


const Footer = () => (
    <Box sx={{
        height: '50px',
        width: "100%",
        background: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);",
        position: 'fixed',
        bottom: 0
    }}>
        <Typography sx={{p: 1}} variant='h6'>created by Pavlo Lapan</Typography>
    </Box>
)

export default Footer