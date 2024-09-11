import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

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
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap',marginTop:"95px",marginLeft:"80px" }}>
            {datas.map((item) => (
                <Card key={item.id} sx={{ minWidth: 255, padding: 0 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                           
                            <Typography variant="h5">{item.header}</Typography>
                        </Box>
                        <Box sx={{display:'flex'}}>
                        <Typography variant="h6" sx={{ marginBottom: 1 }}>{item.count}</Typography>
                        <TrendingUpIcon sx={{ marginRight: 1 }} />
                        <Button variant="contained" color="primary" sx={{ marginBottom: 2 }} >
                            {item.button}
                        </Button>
                        </Box>
                        <Typography variant="body2" color="textSecondary">
                            {item.text}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default CardContainer;
