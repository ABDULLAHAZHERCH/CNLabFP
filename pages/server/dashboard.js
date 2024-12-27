import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Stack,
} from "@mui/material";
import Navigation from "../../components/Navigation";
import { Speed, CloudQueue, Memory, Storage } from "@mui/icons-material";
import NetworkStatsChart from "./NetworkStatsChart";

const MetricCard = ({ icon: Icon, title, value, progress, color }) => (
  <Card>
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <Box
          sx={{
            backgroundColor: `${color}15`,
            borderRadius: 2,
            p: 1,
            display: "flex",
          }}
        >
          <Icon sx={{ color: color }} />
        </Box>
        <Typography variant="h6">{title}</Typography>
      </Stack>
      <Typography variant="h4" color={color} gutterBottom fontWeight="bold">
        {value}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: `${color}20`,
          "& .MuiLinearProgress-bar": {
            backgroundColor: color,
          },
        }}
      />
    </CardContent>
  </Card>
);

const ServerDashboard = () => {
  const [networkStats, setNetworkStats] = useState([]);

  const fetchStats = async () => {
    try {
      const response = await fetch(`/api/stats`);
      const data = await response.json();
      setNetworkStats(data);
    } catch (error) {
      console.error("Error fetching network stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 2000);
    return () => clearInterval(interval);
  }, []);

  const latestStatus = networkStats[networkStats.length - 1] || {};
  const latestStats = latestStatus.networkStats || {};
  // console.log("Latest Stats:", latestStats);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navigation isServer />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card
              sx={{
                mt: 4,
                background: "linear-gradient(45deg, #00C6AE 30%, #FFD100 90%)",
                color: "white",
              }}
            >
              <CardContent>
                <Grid container alignItems="center" spacing={3}>
                  <Grid item xs={12} md={8}>
                    <Typography
                      variant="h3"
                      gutterBottom
                      sx={{ color: "black" }}
                    >
                      Server Performance Insights
                    </Typography>
                    <Typography variant="body1" sx={{ color: "black", mb: 2 }}>
                      Monitor your SMTP server's performance metrics in
                      real-time. Track latency, throughput, and system
                      resources.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <MetricCard
              icon={Speed}
              title="Latency"
              value={`${latestStats.latency || 0}ms`}
              progress={Math.min((latestStats.latency || 0) / 2, 100)}
              color="#FF4B8C"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MetricCard
              icon={CloudQueue}
              title="DNS Time"
              value={`${latestStats.dnsTime || 0}ms`}
              progress={Math.min((latestStats.dnsTime || 0) / 2, 100)}
              color="#00C6AE"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MetricCard
              icon={Memory}
              title="Connect Time"
              value={`${latestStats.connectTime || 0}ms`}
              progress={Math.min((latestStats.connectTime || 0) / 2, 100)}
              color="#FFB800"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MetricCard
              icon={Storage}
              title="SSL Handshake Time"
              value={`${latestStats.sslHandshakeTime || 0}ms`}
              progress={Math.min((latestStats.sslHandshakeTime || 0) / 2, 100)}
              color="#FFD100"
            />
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Network Performance Over Time
                </Typography>
                <NetworkStatsChart data={networkStats} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Server Information
                </Typography>
                <Typography variant="body1">
                  IP Address: {latestStats.ipAddress || "N/A"}
                </Typography>
                <Typography variant="body1">
                  Network Type: {latestStats.networkType || "N/A"}
                </Typography>
                <Typography variant="body1">
                  Last Updated:{" "}
                  {latestStats.sentAt
                    ? new Date(latestStats.sentAt).toLocaleString()
                    : "N/A"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServerDashboard;
