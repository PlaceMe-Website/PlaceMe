'use client';
import React, { ReactNode } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Copyright from './Copyright';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import FeedIcon from '@mui/icons-material/Feed';
import Link from 'next/link';


const pages = [
  {
    title: "PlaceMe",
    icon: <TravelExploreIcon fontSize='large' />,
    link: "/dashboard/search"
  },
  {
    title: "News",
    icon: <FeedIcon fontSize='large'/>,
    link: "/"
  },
  {
    title: "About",
    icon: <Diversity1Icon fontSize='large'/>,
    link: "/"
  },
]

const GlobalHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar 
          disableGutters 
          sx={{
            '@media all': {
              maxHeight: "1em",
              height: "1em",
            },
          }}
        >
          <Box sx={{ flexGrow: 1, flexDirection: "row", display: "flex", justifyContent: "left", gap: 1}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                mt: "10px"
              }}
            >
              {pages.map((pageObj) => (
                  <MenuItem key={pageObj.title} onClick={handleCloseNavMenu}>
                    <Link href={pageObj.link} style={{textDecoration: "none", color: "inherit"}} >
                      <Box sx={{ flexGrow: 1, flexDirection: "row", display: "flex", alignItems: "center"}}>
                        <IconButton disabled>{pageObj.icon}</IconButton>
                        <Typography>{pageObj.title}</Typography>
                      </Box>
                    </Link>
                  </MenuItem>
              ))}
            </Menu>
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
    
                color: 'inherit',
                textDecoration: 'none',
                alignItems: "center",
              }}
              >
              PlaceMe
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
            {pages.map((pageObj) => (
              <Link key={pageObj.title} href={pageObj.link} style={{textDecoration: "none", color: "inherit"}}>
                <IconButton
                  key={pageObj.title}
                  onClick={handleCloseNavMenu}
                  sx={{ mr: "2rem", display: 'block'}}
                  color="inherit"
                >
                  {pageObj.icon}
              </IconButton>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const GlobalFooter = () => {
  return (
    <AppBar position="static" color="primary" sx={{top: "auto", bottom: 0}}>
      <Toolbar>
        <Copyright />
      </Toolbar>
    </AppBar>
  );
};

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalHeader />
      {children}
      <Toolbar />
      <GlobalFooter />
    </>
  )
}

export default PageWrapper
