import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <Container maxWidth="lg">
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Box sx={{backgroundColor: 'primary.main', color: 'white', p: 2}}>
            <Typography variant="h1" component={"h2"}>test</Typography>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Box sx={{backgroundColor: 'primary.main', color: 'white', p: 2}}>
            <Typography variant="h1" component={"h2"}>test</Typography>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Box sx={{backgroundColor: 'primary.main', color: 'white', p: 2}}>
            <Typography variant="h1" component={"h2"}>test</Typography>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Box sx={{backgroundColor: 'primary.main', color: 'white', p: 2}}>
            <Typography variant="h1" component={"h2"}>test</Typography>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Box sx={{backgroundColor: 'primary.main', color: 'white', p: 2}}>
            <Typography variant="h1" component={"h2"}>test</Typography>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Box sx={{backgroundColor: 'primary.main', color: 'white', p: 2}}>
            <Typography variant="h1" component={"h2"}>test</Typography>
        </Box>
      </Grid>
    </Grid>
    </Container>
  )
}
