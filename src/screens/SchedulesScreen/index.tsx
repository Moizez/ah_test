import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Calendar from '../../components/Calendar';

const SchedulesScreen = () => {
    const mdTheme = createTheme();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header position="absolute" open={open} setOpen={setOpen} />
                <Menu variant="permanent" open={open} setOpen={setOpen} />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default SchedulesScreen;