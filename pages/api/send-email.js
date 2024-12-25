export default function handler(req, res) {
    if (req.method === 'POST') {
      // Here you would implement the actual email sending logic
      // For now, we'll just simulate some network stats
      const networkStats = {
        latency: Math.floor(Math.random() * 100),
        packetLoss: Math.floor(Math.random() * 5),
        bandwidth: Math.floor(Math.random() * 100) + 50,
      };
  
      // Simulate a delay to mimic network latency
      setTimeout(() => {
        res.status(200).json({ message: 'Email sent successfully', networkStats });
      }, 1000);
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
  