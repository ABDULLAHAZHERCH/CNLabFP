import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import Navigation from '../../components/Navigation';
import { Send, Inbox, AccessTime, Star } from '@mui/icons-material';

const MailCard = ({ icon: Icon, title, count, color }) => (
  <Card>
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          sx={{
            backgroundColor: `${color}15`,
            borderRadius: 2,
            p: 1,
            display: 'flex',
          }}
        >
          <Icon sx={{ color: color }} />
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" color={color} fontWeight="bold">
            {count}
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

const ClientDashboard = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navigation />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <MailCard
              icon={Inbox}
              title="Inbox"
              count="24"
              color="#FF4B8C"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MailCard
              icon={Send}
              title="Sent"
              count="12"
              color="#00C6AE"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MailCard
              icon={AccessTime}
              title="Pending"
              count="5"
              color="#FFB800"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MailCard
              icon={Star}
              title="Starred"
              count="8"
              color="#FFD100"
            />
          </Grid>

          <Grid item xs={12}>
            <Card
              sx={{
                mt: 4,
                background: 'linear-gradient(45deg, #FF4B8C 30%, #FFD100 90%)',
                color: 'white',
              }}
            >
              <CardContent>
                <Grid container alignItems="center" spacing={3}>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
                      Welcome to Your Mail Dashboard
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                      Send and receive emails with our beautiful and intuitive interface.
                      Track your communications and stay organized.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        mt: 2,
                        bgcolor: 'white',
                        color: '#FF4B8C',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.9)',
                        },
                      }}
                    >
                      Compose New Email
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box
                      component="img"
                      src="/mail-illustration.svg"
                      alt="Mail illustration"
                      sx={{
                        width: '100%',
                        maxWidth: 300,
                        display: 'block',
                        margin: 'auto',
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientDashboard;

