import {Box, Typography} from "@mui/material";

const Header = () => (
    <Box sx={{
        height: '50px',
        width: "100%",
        background: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);"
    }}>
        <Typography sx={{p: 1}} variant='h6'>Weather APP</Typography>
    </Box>
)

 export default Header