import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
    card: {
        position: "relative",
        width: "20%",
        marginBottom: 10
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: "16px",
        fontWeight: 600,
        margin: "16px 0",
        textTransform: "uppercase"
    },
});