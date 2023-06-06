import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import qrcode from "../src/assets/qrcode.png"
import './App.css'

function App() {

  return (
    <>
      <Card
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              height: '100%',
              boxShadow: 0,
              backgroundColor: 'aliceBlue',
            }}
          >
            <Card sx={{ maxWidth: 500, marginBottom: 10, marginTop: 10, boxShadow: 5, borderRadius: 3 }}>
              <CardMedia
                sx={{ height: 250, width:250, margin: '0 auto', marginTop: 1, borderRadius: 5}}
                image={qrcode}
                />
            <CardContent
              sx={{ maxHeight: 500, maxWidth: 230 }}
            >
              <Typography gutterBottom variant="h5" component="div">
                Improve your front-end skills by building projects
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
              </Typography>
              
            </CardContent>
            </Card>
    </Card>
    </>
  )
}

export default App
