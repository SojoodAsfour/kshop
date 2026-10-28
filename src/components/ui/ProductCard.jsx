import React from 'react'
import { Card, CardActionArea,CardContent, CardMedia, Rating } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ProductCard({product}) {
    return (
        <>
            <Card>
                <CardActionArea component={Link} to={`/products/${product.id}`}>
                    <CardMedia 
                    component="img"
                    image={product.image}
                    alt={product.name}
                    />
                    <CardContent>
                        <Typography variant='h6' component={'h3'}>{product.name}</Typography>
                        <Rating value={product.rating}></Rating>
                        <Typography variant='h6' color='primary'>{product.price}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}
