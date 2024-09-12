import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';

const CardContainer = () => {
    const datas = [
        {
            id: 1,
            header: "Total Page Views",
            count: "4,42,236",
            button: "59.3%",
            text: "You made an extra 35,000 this year"
        },
        {
            id: 2,
            header: "Total Users",
            count: "78,250",
            button: "70.3%",
            text: "You made an extra 8,900 this year"
        },
        {
            id: 3,
            header: "Total Forms",
            count: "18,800",
            button: "27.4%",
            text: "You made an extra 1,943 this year"
        },
        {
            id: 4,
            header: "Total Page Views",
            count: "$35,078",
            button: "27.4%",
            text: "You made an extra $20,395 this year"
        },
    ];

    return (
        <Box sx={{ flexGrow: 1, marginTop: '95px', marginLeft: '80px' }}>
            <Grid container spacing={4}>
                {datas.map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item.id}>
                        <Card sx={{ minWidth: 255, padding: 0 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                    <Typography variant="h5">{item.header}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1 }}>{item.count}</Typography>
                                    <TrendingUpIcon sx={{ marginRight: 1 }} />
                                    <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
                                        {item.button}
                                    </Button>
                                </Box>
                                <Typography variant="body2" color="textSecondary">
                                    {item.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default CardContainer;
