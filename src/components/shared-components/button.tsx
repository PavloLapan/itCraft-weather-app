import {styled} from "@mui/material";

const Button = styled('button')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));

export default Button