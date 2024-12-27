// about.js (About My App Page)
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function AboutApp() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        py: 8,
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          sx={{
            mb: 6,
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          About My App
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, fontSize: '1.25rem', lineHeight: 1.75 }}
        >
          This project involves the design and implementation of a cutting-edge Simple Mail Transfer Protocol (SMTP)
          server, designed to facilitate seamless email communication between two clients within a secure network
          environment. Our server ensures reliable message delivery and incorporates real-time monitoring to enhance
          server performance and user experience.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            color: 'secondary.main',
          }}
        >
          Key Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ mb: 2, color: 'primary.main', fontWeight: 'medium' }}
                >
                  SMTP Server Functionality
                </Typography>
                <Typography variant="body1">
                  Core features include efficient email transmission, secure communication, and error-handling to
                  ensure reliable message delivery.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ mb: 2, color: 'primary.main', fontWeight: 'medium' }}
                >
                  Real-Time Monitoring
                </Typography>
                <Typography variant="body1">
                  Our server offers real-time insights into performance metrics such as DNS resolution time, connection
                  latency, and SSL handshake duration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography
          variant="h2"
          sx={{ mt: 6, mb: 4, fontWeight: 'bold', color: 'secondary.main' }}
        >
          Interactive Dashboard
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.75, mb: 4 }}>
          The dashboard provides visualized data on server health, email status, and performance trends, enabling
          proactive management and optimization.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => router.push('/')}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
}
