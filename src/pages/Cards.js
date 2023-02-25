import React, {useContext, useEffect} from 'react';
import {CustomContext} from "../utils/context";
import Card from '@mui/material/Card';
import {Container} from "@mui/material";
import {CardMedia, Typography,TableRow} from "@mui/material";

function Cards() {
    const {level, getProducts, products, category} = useContext(CustomContext)
    useEffect(() => {
        getProducts()
    },[category, level])
    return (
            <Container sx={{width:'1200px'}}>
                <TableRow xs={2} md={1} sx={{display:'flex', justifyContent:'center',alignItems:'center', flexWrap:'wrap'}}>
                        {
                            products.data.map((item) => (
                                <Card sx={{ width: '250px',height:'400px',borderRadius:'30px 30px 12px 12px', margin:'10px'}} key={item.id} >
                                    <CardMedia
                                        sx={{ height: 236, width:'236', borderRadius:'24px 24px 12px 12px;' }}
                                        image={item.image}
                                    />
                                    <Typography sx={{ fontSize: 14, paddingLeft:'210px' }} color="text.secondary" gutterBottom>
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.54894 1.42705C8.8483 0.50574 10.1517 0.50574 10.4511 1.42705L11.8574 5.75532C11.9913 6.16734 12.3752 6.4463 12.8085 6.4463H17.3595C18.3282 6.4463 18.731 7.68592 17.9473 8.25532L14.2654 10.9303C13.9149 11.185 13.7683 11.6364 13.9021 12.0484L15.3085 16.3766C15.6078 17.298 14.5533 18.0641 13.7696 17.4947L10.0878 14.8197C9.7373 14.565 9.2627 14.565 8.91221 14.8197L5.23037 17.4947C4.44665 18.0641 3.39217 17.298 3.69153 16.3766L5.09787 12.0484C5.23174 11.6364 5.08508 11.185 4.7346 10.9303L1.05275 8.25532C0.269035 7.68592 0.67181 6.4463 1.64053 6.4463H6.19155C6.62477 6.4463 7.00873 6.16734 7.1426 5.75532L8.54894 1.42705Z" fill="#EDC538"/>
                                        </svg>
                                        {item.rate}
                                    </Typography>
                                    <Typography sx={{fontSize:15, display:'flex', justifyContent:'center', alignItems:'center'}} gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.level}
                                    </Typography>
                                </Card>
                                    ))
                        }
                </TableRow>

            </Container>
    );
}

export default Cards;