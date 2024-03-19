import * as React from 'react';
import { Box, IconButton, OutlinedInput, InputAdornment, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', width: '25%' }}>
            <FormControl
                sx={{
                    m: 1,
                    width: '100%',
                    borderRadius: '50px',
                    backgroundColor: '#FCFDFF',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                        backgroundColor: 'transparent',
                        '&:hover fieldset': {
                            borderColor: '#91C3E4',
                        },
                    },
                    '& .MuiOutlinedInput-input': {
                        padding: '9px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#91C3E440',
                    },
                    '& .Mui-focused': {
                        '& fieldset': {
                            borderColor: '#91C3E4 !important',
                        },
                    },
                }}
            >
                <InputLabel sx={{
                    color: '#6B6C6C',
                    fontFamily: 'Arvo',
                    textAlign: 'center',
                    fontSize: '13px',
                    fontStyle: 'italic',
                    m: '-4px 0px 40px 10px',
                }}
                    htmlFor="seacrh-medicine">
                    Busca tu medicamento
                </InputLabel>
                <OutlinedInput
                    id="search-medicine"
                    type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                sx={{
                                    backgroundColor: '#91C3E440',
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    aria-describedby="search-medicine"
                    label="Busca tu Medicamento"
                />
            </FormControl>
        </Box>
    );
}