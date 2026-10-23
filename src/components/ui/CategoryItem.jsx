import React from 'react'
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { CardActionArea } from '@mui/material';
export default function CategoryItem({ category }) {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Chip label={category.name} clickable />
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
