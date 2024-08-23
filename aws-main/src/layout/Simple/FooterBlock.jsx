import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn, YouTube } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

// ==============================|| CUSTOM STYLED FOOTER ||============================== //

const FooterBlock = ({ isFull }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogContent, setDialogContent] = useState('');

  const handleOpenDialog = (title, content) => {
    setDialogTitle(title);
    setDialogContent(content);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDialogTitle('');
    setDialogContent('');
  };

  return (
    <div>
      {/* Footer Section */}
      <footer style={{ backgroundColor: '#f0f0f0', padding: '20px 0' }}>
        <Container>
          <Grid container spacing={3} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  width: 320, // Set the width of the frame
                  height: 120,
                  overflow: 'hidden', // Ensure that the image doesn't overflow the frame
                  marginBottom: '10px', // Add some space below the image
                }}
              >
                <img
                  src={logo}
                  alt="Phoenixcoded"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain', // Ensure the logo fits within the frame without distortion
                  }}
                />
              </Box>
              <Typography variant="body2" color="textSecondary">
                2717 Western Blvd #402-D Raleigh NC 27606<br />
                +1 571 9347292
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="h4">Company</Typography>

              <Box mt={2}>
                <Link
                  className="header-link"
                  color="secondary.main"
                  component={RouterLink}
                  to="/about-us"
                  underline="none"
                >
                  About Us
                </Link>
              </Box>

              <Box mt={2}>
                <Link
                  className="header-link"
                  color="secondary.main"
                  component={RouterLink}
                  to="/contact-us"
                  underline="none"
                >
                  Contact Us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="h4">Resources</Typography>

              <Box mt={2}>
                <Link
                  className="header-link"
                  color="secondary.main"
                  component={RouterLink}
                  to="/Articles"
                  underline="none"
                >
                  Articles
                </Link>
              </Box>

              <Box mt={2}>
                <Link
                  className="header-link"
                  color="secondary.main"
                  component={RouterLink}
                  to="/course"
                  underline="none"
                >
                  Videos
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="h4">Legal</Typography>

              <Box mt={2}>
                <Link
                  className="header-link"
                  color="secondary.main"
                  component="button"
                  onClick={() => handleOpenDialog('Terms & Conditions', 'Here is the content for Terms & Conditions...')}
                  underline="none"
                >
                  Terms & Conditions
                </Link>
              </Box>

              <Box mt={2}>
                <Link
                  className="header-link"
                  color="secondary.main"
                  component="button"
                  onClick={() => handleOpenDialog('Privacy Policy', 'Here is the content for Privacy Policy...')}
                  underline="none"
                >
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box mt={3} textAlign="center">
            <IconButton href="https://www.youtube.com/@sridharnagulavancha" aria-label="YouTube" target="_blank">
              <YouTube />
            </IconButton>
            <IconButton href="https://www.instagram.com/sridharnagulavancha" aria-label="Instagram" target="_blank">
              <Instagram />
            </IconButton>
            <IconButton href="https://twitter.com/phoenixcoded" aria-label="Twitter" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/sridharnagulavancha" aria-label="LinkedIn" target="_blank">
              <LinkedIn />
            </IconButton>
          </Box>
        </Container>
      </footer>

      {/* Dialog for Terms & Conditions and Privacy Policy */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Typography variant="body2">{dialogContent}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

FooterBlock.propTypes = {
  isFull: PropTypes.bool,
};

export default FooterBlock;
