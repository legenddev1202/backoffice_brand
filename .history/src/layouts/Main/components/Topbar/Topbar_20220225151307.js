import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../../imgs/logo.png';
import { NavItem } from './components';
import { Link } from 'react-scroll';
import Typography from '@mui/material/Typography';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={mode === 'light' && !colorInvert ? logo : logo}
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Link
          activeClass="active"
          className="pointer"
          style={{ padding: '10px 15px' }}
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          style={{ padding: '10px 15px' }}
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
        >
          <Box marginLeft={4}>
            <Typography fontWeight={400} color={linkColor}>
              About Us
            </Typography>
          </Box>
        </Link>
        <Box marginLeft={4}>
          <Typography fontWeight={400} color={linkColor}>
            Contact Us
          </Typography>
        </Box>

        {/* <Box marginLeft={4}>
          <NavItem
            title={'Account'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        <Box marginLeft={4}>
          <NavItem
            title={'Sign In'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://agent-backoffice-agency.web.app/register/admin/hteII4dlBZO23fW2lClhLVwUPAPya1T6/0"
            size="large"
          >
            Register
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
