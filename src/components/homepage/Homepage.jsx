import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../actions/accountActions';
import Info from './Info';


const Homepage = (itemsData, symbolsData) => {
    const dispatch = useDispatch();

    return (
        <div>
            <Link to={'/'}>
                <Box
                    sx={{
                        m: 5,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end"
                    }} 
                >
                    <Button
                        variant='contained'
                        size="large"
                        onClick={() => dispatch(logoutAction())}>
                        Logout
                    </Button>
                </Box>
            </Link>
            <Info itemsData={itemsData} symbolsData={symbolsData} />

        </div>
    )
}

export default Homepage