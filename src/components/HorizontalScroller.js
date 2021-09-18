import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core'
import ProductView from './ProductView'
import axios from "axios";

class HorizontalScroller extends Component {
    state = {
        myProduct: []
    }
    componentDidMount() {
        axios.get("http://localhost:90/product/get")
            .then((res) => {
                this.setState({
                    myProduct: res.data.data
                })
                console.log(res.data)
            })
    }
    render() {
        return (
            <Box bgcolor="white" p="8px">
                <Typography variant="h5">#Deals of the Day</Typography>
                <Box display="flex" overflow="auto">
                    {
                        this.state.myProduct.map(product => {
                            return (
                                <ProductView
                                    productImage={product.productImageUrlList[0]}
                                    productName={product.productName}
                                    productPrice={product.productPrice}
                                    productShortDescription={product.productShortDescription}
                                />
                            )
                        })
                    }
                </Box>
            </Box>
        )
    }
}

export default HorizontalScroller
