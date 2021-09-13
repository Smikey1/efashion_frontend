import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Component } from 'react'
import { Avatar, Box, Container, Typography } from '@material-ui/core';
import BannerSlider from '../components/BannerSlider';

export class HomeFragment extends Component {
    constructor(props){
        super(props)
        this.state={
            value:0
        }
    }
    handleChange = (event, newValue) => {
    this.setState({
        value:newValue
    });
  };
    render() {
        return (
    <Container maxWidth="md" fixed>
      <AppBar position="static" color="default">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        <Tab icon={<CatagoryTab/>}/>
        <Tab icon={<CatagoryTab/>}/>
        <Tab icon={<CatagoryTab/>}/>
        <Tab icon={<CatagoryTab/>}/>
        <Tab icon={<CatagoryTab/>}/>
        <Tab icon={<CatagoryTab/>}/>
        <Tab icon={<CatagoryTab/>}/>
        </Tabs>
      </AppBar>
      {/* <BannerSlider Images={[]}></BannerSlider> */}
    </Container>
  );
    }
}

export const CatagoryTab=()=>{
    return <Box>
        <Avatar alt="Remy Sharp" variant="square" src="/static/images/avatar/1.jpg" />
        <Typography variant="body2">Title</Typography>
    </Box>
}
export default HomeFragment