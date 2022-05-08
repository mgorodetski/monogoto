import { Backdrop, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logWPassKey } from '../../actions/accountActions';

const Login = () => {
    const [symbol, setSymbol] = useState('');
    const [validate, setValidate] = useState(true);
    const msg = useSelector(state => state.msg);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleClickLogin = (event) => {
        event.preventDefault();
        if (!symbol) {
            setValidate(false);
        } else {
            dispatch(logWPassKey(symbol));
            setOpen(!open);
        }
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        {(msg || !validate)
                            ?
                            < TextField
                                onChange={(e) => setSymbol(e.target.value.trim())}
                                error
                                fullWidth
                                margin="normal"
                                helperText={msg + " is not a correct passkey"}
                                label="PASSKEY"
                                name="passkey"
                                id="passkey"
                            />
                            :
                            <TextField
                                onChange={(e) => setSymbol(e.target.value.trim())}
                                margin="normal"
                                required
                                fullWidth
                                id="passkey"
                                label="PASSKEY"
                                name="passkey"
                                autoComplete="passkey"
                                autoFocus />
                        }

                        <button className="button login__submit" onClick={handleClickLogin}>
                            <span className="button__text">Log In</span>
                        </button>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                            onClick={handleClose}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background--shape4"></span>
                    <span className="screen__background__shape screen__background--shape3"></span>
                    <span className="screen__background__shape screen__background--shape2"></span>
                    <span className="screen__background__shape screen__background--shape1"></span>
                </div>
            </div>
        </div>
    )
}

export default Login