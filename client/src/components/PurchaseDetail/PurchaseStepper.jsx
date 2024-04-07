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
        <Box sx={{ display: "flex", padding: "0", textAlign: "center", justifyContent: 'center', alignItems: "center", height: '12vh' }}>
            <Stepper activeStep={page} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <ThemeProvider theme={outerTheme}>
                            <StepLabel sx={{ padding:"8px"}}></StepLabel>
                        </ThemeProvider>
                    </Step>
                ))}
            </Stepper>
        </Box>
        
    )
}
export default PurchaseStepper;