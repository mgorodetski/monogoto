import { Box, ListItemButton, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logWPassKey } from '../../actions/accountActions';
import { apiCallTimer } from '../../utils/constants';
import Items from './Items';

const Info = () => {
    const { itemsData, symbolsData } = useSelector(state => state);

    const dispatch = useDispatch();

    const handleClickGetInfo = (name) => {
        const element = itemsData.filter(item => item.symbol === name);
        if (!element[0] || (Date.now() - element[0].respTime > apiCallTimer))
            if (!element[0]) {
                dispatch(logWPassKey(name));
            } else {
                dispatch(loginAction(element[0]));
            }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 3,
                ml: 5,
                borderRadius: 1,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }} >
                <Items />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                }}
            >
                <List
                    sx={{
                        width: '100%',
                        // maxWidth: 360,
                        bgcolor: '#b4ffff',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 1000,
                        '& ul': { padding: 0 },
                    }}
                    subheader={<li />}
                >
                    {
                        symbolsData.map((name, index) => (
                            <ul key={index} >
                                <ListItemButton key={name} sx={{
                                    bgcolor: '#e02e7e',
                                    border: '1px dashed black'
                                }}
                                    onClick={() => handleClickGetInfo(name)}
                                >
                                    <ListItemText primary={name} />
                                </ListItemButton>
                            </ul>
                        ))}
                </List>
            </Box>
        </Box>
    )
}

export default Info