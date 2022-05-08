import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import 'animate.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../actions/accountActions';

const Items = () => {
    const { itemsData } = useSelector(state => state);
    const dispatch = useDispatch();
    const handleClickDeleteItem = (index) => {
        itemsData.splice(index, 1);
        dispatch(deleteItem(itemsData));
    }
    return (
        itemsData.map((item, index) => (
            <Card key={item.symbol}
                className='animate__animated animate__bounceInRight'
                sx={{
                    minWidth: 300,
                    backgroundColor: '#C7C5F4',
                    p: 1,
                    m: 1,
                    borderRadius: 5
                }} >
                {(item) &&
                    <CardContent>
                        <Typography align='center' variant="h5">
                            {item.symbol}
                        </Typography>
                        {Object.keys(item).filter(elem => elem !== "symbol" && elem !== "respTime").map((elem) =>
                        (
                            (elem === "openTime" || elem === "closeTime")
                                ?
                                <Typography key={elem} sx={{ fontSize: 25 }} color="text.primary" gutterBottom>
                                    {elem}: {(new Date(item[elem])).toLocaleString()}
                                </Typography>
                                :
                                <Typography key={elem} sx={{ fontSize: 25 }} color="text.primary" gutterBottom>
                                    {elem}: {item[elem]}
                                </Typography>
                        )
                        )}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: 10,
                            }}
                        >
                            <IconButton onClick={() => handleClickDeleteItem(index)}
                                aria-label="delete" size="large" sx={{ p: 0, m: 0 }} >
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </Box>
                    </CardContent>
                }
            </Card>
        ))
    );
}

export default Items