import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Adornments
import InputAdornment from '@mui/material/InputAdornment';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import KeyIcon from '@mui/icons-material/Key';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';

const adminFunctionBox = (props) => {
    const data = props.data;
    const errors = props.errors;

    return (
        <div className='fbox'>
            <h1> GENERATE PROFESSOR TICKET </h1>
            <br />
            <Box component="form" autoComplete="off">

                <CssTextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <ContactMailIcon />
                            </InputAdornment>
                        ),
                    }}
                    id="input-email"
                    name='email'
                    value={data.email}
                    onChange={props.handleInputChange}
                    label="PROFESSOR EMAIL"
                    type='email'
                    helperText=""
                    error={errors.email}
                    helperText={errors.email}
                />


                <CssTextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <KeyIcon />
                            </InputAdornment>
                        ),
                    }}
                    id="input-password"
                    name='password'
                    type='password'
                    value={data.password}
                    onChange={props.handleInputChange}
                    label="ADMIN PASSWORD"
                    helperText=""
                    error={errors.password}
                    helperText={errors.password}
                />


            </Box>
            <div className='centerbutton'>
                <Button sx={{ m: 2, width: 300 }} size='large' color="error" variant="contained" endIcon={<SendAndArchiveIcon />} onClick={props.handleSubmit}>
                    GENERATE AND SEND
                </Button>
            </div>
        </div>
    );
}

export default adminFunctionBox;




const CssTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        color: 'white'
    },
    '& label': {
        color: '#666666'
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#ce3333',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#666666',
        },
        '&:hover fieldset': {
            borderColor: '#ce3333',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ce3333',
        },
    },

    "& .MuiFormLabel-root.Mui-error": {
        color: "#ffdd00 !important"
    },
    '& label.Mui-focused.Mui-error': {
        color: "white !important",
    },
    '& .MuiOutlinedInput-root.Mui-error': {
        '& fieldset': {
            borderColor: "#ffdd00 !important",
        },
        '&:hover fieldset': {
            borderColor: "#ffdd00 !important",
        },
        '&.Mui-focused fieldset': {
            borderColor: "#ffdd00 !important",
        },
    },

    '& .MuiInputBase-input.Mui-disabled': {
        color: '#808080'
    },
    "& .MuiFormLabel-root.Mui-disabled": {
        color: "#ce3333 !important"
    },
    '& label.Mui-focused.Mui-disabled': {
        color: "#808080 !important",
    },
    '& .MuiOutlinedInput-root.Mui-disabled': {
        '& fieldset': {
            borderColor: "#ce3333 !important",
        },
        '&:hover fieldset': {
            borderColor: "#ce3333 !important",
        },
        '&.Mui-focused fieldset': {
            borderColor: "#ce3333 !important",
        },
    },
});