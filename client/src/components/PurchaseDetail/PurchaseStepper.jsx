import React from 'react'
import {
    Container, 
    Box
} from "@mui/material";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const PurchaseStepper = ({ page }) => {
    const steps = [1,2,3];
        const outerTheme = createTheme({
            palette: {
                primary: {
                    main: '#fe486a',
                },
            },
            components: {
                MuiStepLabel: {
                    styleOverrides: {
                        iconContainer: {
                            '& svg': {
                                fontSize: '2em',
                            },
                        },
                    },
                },
            },
        });
    return (
        <Container sx={{ padding: 4, textAlign: "center", display: "flex", justifyContent: 'center', height: '15vh' }}>
        <Box sx={{ width: '30%' }}>
            <Stepper activeStep={page} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <ThemeProvider theme={outerTheme}>
                            <StepLabel></StepLabel>
                        </ThemeProvider>
                    </Step>
                ))}
            </Stepper>
        </Box>
        </Container>
    )
}
export default PurchaseStepper;