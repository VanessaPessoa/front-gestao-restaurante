import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
    card: {
        position: "relative",
        width: "25%",
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
    location: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        width: "80%",
        wordBreak: "break-all",
    }
});