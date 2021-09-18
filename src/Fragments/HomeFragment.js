import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Component } from 'react'
import { Avatar, Box, Container, Typography } from '@material-ui/core';
import BannerSlider from '../components/BannerSlider';
import ProductView from '../components/ProductView';
import { Category, Store } from '@material-ui/icons';
import HorizontalScroller from '../components/HorizontalScroller';
import GridView from '../components/GridView';
import axios from "axios";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

 class HomeFragment extends Component {

   state = {
     value: 0,
     myCategory: [],
     myProduct:[]
   }

  componentDidMount() {
    axios.get("http://localhost:90/category/get")
      .then((res) => {

        this.setState({
          myCategory: res.data.data
        })
        console.log(res.data)
      })

    axios.get("http://localhost:90/product/get")
      .then((res) => {

        this.setState({
          myProduct: res.data.data
        })
        console.log(res.data)
      })

  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     value: 0,
  //     myCategory: []
  //   }
  // }
  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
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

            { 
          this.state.myCategory.map(category =>{
            return (
              <Tab icon={ <CatagoryTab 
                icon={category.categoryImageUrl}
                title={category.categoryName} />} />
            )
        })
      }
        
        </Tabs>
        </AppBar>
        <BannerSlider Images={[{ image: "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" }]}></BannerSlider>
        <HorizontalScroller />
        <GridView />

      </Container>
    );
  }
}

export const CatagoryTab = ({ icon, title }) => {
  return <Box textAlign="center">
    {icon ? (<Avatar alt="Remy Sharp" variant="square" src={icon} />) : (<Store />)}
    <Typography variant="body2">{title}</Typography>
  </Box>
}
export default HomeFragment