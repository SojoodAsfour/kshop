
import React from 'react'
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import { CardContent, Box, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

export default function CategoryItem({ category, index }) {
    return (
        
        <Card sx={{
            bgcolor: 'secondary.main', boxShadow: 'none', borderRadius: 2, position: 'relative', overflow: 'hidden',
            '&::after': {
                content: '""',
                position: 'absolute',
                width: 90,
                height: 90,
                borderRadius: '50%',
                bgcolor: 'background.footer',
                right: -35,
                bottom: -35,
                pointerEvents: 'none'
            }
        }}>
            
            <CardActionArea sx={{ height: '100%' }}>
                <CardContent sx={{ minHeight: 210, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                            {String(index + 1).padStart(2, '0')}
                        </Typography>

                        <Box sx={{ bgcolor: 'background.paper', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CategoryOutlinedIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                        </Box>
                    </Box>

                    <Box>
                        <Chip label={category.name} sx={{ bgcolor: 'transparent', justifyContent: 'flex-start', height: 'auto', }} />
                        <Typography variant="caption" sx={{ display: 'block',color: 'text.secondary',mt: 0.5}}>
                            Explore collection
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
