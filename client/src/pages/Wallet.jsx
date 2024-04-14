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
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { DataContext } from "../context/DataContext";

const displayFlexC = {
    display: "flex",
    flexDirection: "column",
};

const textStyle = {
    fontFamily: "var(--font-title)",
    fontSize: "1.1rem",
    textAlign: "center",
    color: "var(--font-body-color)",
};

const Wallet = () => {
    const {userId} = useContext(AuthContext);
    const {deleteCartItem} = useContext(DataContext)
    const closeCart = async () => {
        try {
            console.log(userId);
            await deleteCartItem(userId)
        } catch (err) {
            console.error("No fue posible cerrar el carrito", err)
        }
    }
    return (
        <Container
            maxWidth="xll"
            sx={{
                pt:'1.2rem',
                borderBottom: "30px solid var(--font-link-color)",
                borderTop: "30px solid var(--font-link-color)",
                height: "43.1rem",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    maxWidth:"800px",
                    width: "50%",
                    borderRadius: 3,
                    bgcolor: "#F5F5F5",
                    height: "26rem",
                    m: "6rem auto",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "35px",
                    }}
                >
                    <Box sx={{ ...displayFlexC, gap: "25px" }}>
                        <Typography sx={{ ...textStyle }}>Estas pagando</Typography>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-mobile.png?alt=media&token=ab14fce9-2226-4781-b21d-244ae4ad8085"
                            alt="logo farmacia s y g"
                        />
                        <Box>
                            <Button
                                variant="outlined"
                                sx={{
                                    fontSize: "2rem",
                                    color: "var(--font-body-color)",
                                    width: "13rem",
                                    borderRadius: '25px',
                                    borderColor: 'var(--font-link-color)'
                                }}
                            >
                                <CiCreditCard1 />
                                <Typography sx={{ ...textStyle, ml: "1rem" }}>
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
                                fontSize: "1.2rem",
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
                                width: "13rem",
                                height: "6rem",
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
                                sx={{ backgroundColor: "#786F9D1F", width: "15rem" }}
                                id="input tarjeta de pagos"
                                placeholder="XXXX XXXX XXXX XXXX"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ fontSize: "1.8rem" }}>
                                            <CiCreditCard1 />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                            />
                        </Box>
                        <Box sx={{ ml: "5.6rem", mt: "1rem" }}>
                            <ButtonLittle to="/purchase-thanks" onClick={() => closeCart()}>
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
