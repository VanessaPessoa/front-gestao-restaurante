import { TextField } from "@mui/material"
import { useStyles } from "./styles"

export default function Input({ register, name, required, errors, msgError, type, label, disabled, placeholder}) {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            <TextField
                {...register(name, { required } )} 
                type={type}
                id="outlined-required"
                label={label}
                className={classes.input}
                multiline={false}
                disabled={disabled}
                placeholder={placeholder}
            />
            {errors[name] && <span className={classes.messageError}> {msgError} </span>}

        </div>
    )
}