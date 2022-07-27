import React from 'react'
import Grid from '@mui/material/Grid';
import selfPic from '../../assets/images/selfpic.png'
import Avatar from '@mui/material/Avatar'

const About = () => {
  return (
    <>
      <Grid justifyContent="center" container padding={2} spacing={2}>
        <Grid item xs={12} md={3}>
          <Avatar alt="Derek Pic" src={selfPic} sx={{ width: 1, height: 1 }}></Avatar>
        </Grid>
        <Grid item md={1}></Grid>

        <Grid item xs={12} md={3}>
          <h1>Derek Shayne</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, est molestiae veniam eligendi aperiam voluptatum iste quibusdam corporis quae architecto incidunt quo dignissimos, possimus sunt dolor, tempora corrupti dolorum. Possimus!</p>
        </Grid>
      </Grid>

    </>
  );
}

export default About;