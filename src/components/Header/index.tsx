import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Menu from '../../assets/menu.svg';
import AddMobile from '../../assets/add-mobile.svg';
import Notification from '../../assets/notif.svg';

const Header: React.FC = () => {
  return (
    <Box
      component={'header'}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        px: [1, 1, 10],
        height: [70, 70, 80],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        background: 'linear-gradient(#000, transparent)'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 6,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: ['100%', '100%', 'auto']
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'bebas-neue-pro',
            fontSize: [28, 28, 34],
            fontWeight: 600,
            lineHeight: '34px',
            letterSpacing: '4px',
            textAlign: 'left',
            color: '#64EEBC',
            textTransform: 'uppercase',
            textShadow: '0 0 40px #000',
            position: ['absolute', 'absolute', 'static'],
            left: 'calc(50% - 55px)'
          }}
        >
          Lite
          <Typography
            component="span"
            sx={{
              fontFamily: 'bebas-neue-pro',
              fontWeight: 400,
              fontSize: [28, 28, 34],
              lineHeight: '34px',
              letterSpacing: '4px'
            }}
          >
            flix
          </Typography>
        </Typography>

        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{
            display: ['none', 'none', 'flex'],
            color: '#fff',
            border: 'none',
            fontFamily: 'bebas-neue-pro',
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: '18px',
            letterSpacing: '4px'
          }}
        >
          Agregar Pelicula
        </Button>
        <IconButton
          aria-label="Menu"
          sx={{
            display: ['block', 'block', 'none'],
            height: 42,
            width: 42,
            p: 0,
            color: 'white'
          }}
        >
          <img src={AddMobile} />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <IconButton
          aria-label="Menu"
          sx={{
            display: ['none', 'none', 'block'],
            height: 42,
            '&:hover': {
              backgroundColor: 'rgba(100, 238, 188, 0.4)',
              animation: 'pulse 2s infinite'
            }
          }}
        >
          <img src={Menu} />
        </IconButton>
        <IconButton
          aria-label="Notifications"
          sx={{
            display: ['none', 'none', 'block'],
            '&:hover': {
              backgroundColor: 'rgba(100, 238, 188, 0.4)',
              animation: 'pulse 2s infinite'
            }
          }}
        >
          <img src={Notification} />
        </IconButton>

        <Avatar
          src="https://github.com/user-attachments/assets/fe658aa8-b74a-46c8-98ef-6063378638d1"
          sx={{
            position: ['absolute', 'absolute', 'static'],
            right: 16
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
