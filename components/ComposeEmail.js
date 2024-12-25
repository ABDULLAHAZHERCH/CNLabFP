import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Card, 
  CardContent,
  Typography,
  IconButton
} from '@mui/material';
import { Send as SendIcon, AttachFile as AttachFileIcon } from '@mui/icons-material';

const ComposeEmail = ({ onSend }) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend({ to, subject, body });
    setTo('');
    setSubject('');
    setBody('');
  };

  return (
    <Card elevation={0} sx={{ mb: 3, overflow: 'visible' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: '#ffffff' }}>
          Compose Email
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="to"
            label="To"
            name="to"
            autoComplete="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="subject"
            label="Subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="body"
            label="Message"
            id="body"
            multiline
            rows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton color="inherit" aria-label="attach file">
              <AttachFileIcon />
            </IconButton>
            <Button
              type="submit"
              variant="contained"
              sx={{ 
                px: 4, 
                py: 1, 
                background: 'linear-gradient(45deg, #f39c12 30%, #f1c40f 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #e67e22 30%, #f39c12 90%)',
                },
              }}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ComposeEmail;

