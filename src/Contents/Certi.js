// Components
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavbarComp from '../Components/Navbar';
import Footer from '../Components/Footer';

// Contents
import { Certification } from '../Data/Data';

const theme = createTheme();

export default function Certi() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <NavbarComp />
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Recognition of Achievement
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            ผลงานที่กระผมได้ทำการเข้าร่วมการฝึกอบรม เรียน ตามคอร์สเรียนต่างๆ
                        </Typography>
                    </Container>
                </Box>

                <Container sx={{ py: 2 }}>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {Certification.map((item) => (
                            <Grid item key={item} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    className="hover-zoom"
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '10.9%',
                                        }}
                                        image={item.src}
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography className='text-indent'>
                                            {item.contnets}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Footer />
            {/* End footer */}
        </ThemeProvider>
    );
}