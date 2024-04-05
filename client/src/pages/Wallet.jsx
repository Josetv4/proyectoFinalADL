import {
    Container,
    Paper,
    Box,
    Typography,
    InputAdornment,
    TextField,
    Button,
} from "@mui/material";
import { CiCreditCard1 } from "react-icons/ci";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ButtonLittle from "../components/Buttons/buttonLittle/buttonLittle";

const displayFlexC = {
    display: "flex",
    flexDirection: "column",
};

const textStyle = {
    fontFamily: "var(--font-title)",
    fontSize: "18px",
    textAlign: "center",
    color: "var(--font-body-color)",
};

const Wallet = () => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                borderBottom: "30px solid var(--font-link-color)",
                borderTop: "30px solid var(--font-link-color)",
                height: "50rem",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: "75%",
                    borderRadius: 3,
                    bgcolor: "#F5F5F5",
                    height: "90%",
                    m: "25px auto",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "35px",
                    }}
                >
                    <Box sx={{ ...displayFlexC, gap: "22px" }}>
                        <Typography sx={{ ...textStyle }}>Estas pagando</Typography>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-mobile.png?alt=media&token=ab14fce9-2226-4781-b21d-244ae4ad8085"
                            alt="logo farmacia s y g"
                        />
                        <Box sx={{ pt: "100px" }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    fontSize: "50px",
                                    color: "var(--font-body-color)",
                                    width: "300px",
                                    borderRadius: '25px',
                                    borderColor: 'var(--font-link-color)'
                                }}
                            >
                                <CiCreditCard1 />
                                <Typography sx={{ ...textStyle, ml: "40px" }}>
                                    PAGO CON TARJETA
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ ...displayFlexC, gap: "22px" }}>
                        <Typography sx={{ ...textStyle }}>Monto a pagar:</Typography>
                        <Typography
                            sx={{
                                ...textStyle,
                                color: "var(--font-price-color)",
                                fontSize: "35px",
                            }}
                        >
                            $ 10.300
                        </Typography>
                    </Box>
                    <Box sx={{ ...displayFlexC }}>
                        <Typography sx={{ ...textStyle }}>
                            Ingresa los datos de tu Tarjeta
                        </Typography>
                        <Paper
                            elevation={1}
                            sx={{
                                ...displayFlexC,
                                width: "300px",
                                height: "180px",
                                borderRadius: 1,
                                bgcolor: "#786F9D1F",
                                m: "25px auto",
                                p: "25px ",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography sx={{ ...textStyle, textAlign: "left" }}>
                                <AccountBalanceIcon />
                            </Typography>
                            <Typography
                                sx={{
                                    ...textStyle,
                                    color: "#FFFFFF",
                                    textAlign: "left",
                                    wordSpacing: "15px",
                                }}
                            >
                                XXXX XXXX XXXX XXXX
                            </Typography>
                            <Typography
                                sx={{ ...textStyle, color: "#FFFFFF", textAlign: "left" }}
                            >
                                XX/XX
                            </Typography>
                        </Paper>
                        <Typography sx={{ ...textStyle, textAlign: "left" }}>
                            Número de Tarjeta
                        </Typography>
                        <Box>
                            <TextField
                                sx={{ backgroundColor: "#786F9D1F", width: "300px" }}
                                id="input tarjeta de pagos"
                                placeholder="XXXX XXXX XXXX XXXX"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ fontSize: "28px" }}>
                                            <CiCreditCard1 />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                            />
                        </Box>
                        <Box sx={{ ml: "130px", mt: "30px" }}>
                            <ButtonLittle>
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-body)",
                                        color: "var(--font-btn1-color)",
                                        fontSize: "16px",
                                    }}
                                >
                                    Pagar
                                </Typography>
                            </ButtonLittle>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default Wallet;
