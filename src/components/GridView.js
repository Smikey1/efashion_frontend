import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core'
import ProductView from './ProductView'
import axios from "axios";

class GridView extends Component {
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
            <Box bgcolor="white" my="10px" p="8px">
                <Typography variant="h5">Trending Items</Typography>
                <div className="productView">

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

                </div>
            </Box>
        )
    }
}

export default GridView