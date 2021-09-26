import { Box, Typography } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'
import React from 'react'

const ProductView = ({ productImage, productName, productShortDescription, productPrice }) => {
    return (
        <div className="myproductitem">
            <img src={productImage} style={{ height: "120px", width: "120px", backgroundColor: grey[50] }} />
            <Typography variant="subtitle1">{productName}</Typography>
            <Typography variant="subtitle2"><span style={{ color: green.A700 }}>{productShortDescription}</span></Typography>
            <Typography variant="h6">Rs. {productPrice}</Typography>
        </div >
    )
}

export default ProductView
