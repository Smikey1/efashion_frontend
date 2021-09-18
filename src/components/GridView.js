import { Box, Typography } from '@material-ui/core'
import React from 'react'
import ProductView from './ProductView'

const GridView = () => {
    return (
        <Box width="400px" p="15px" bgcolor="white" mx="auto">
            <Typography variant="h5">Title</Typography>
            <Box display="flex" p="15px" justifyContent="center">
                <ProductView />
                <ProductView />
            </Box>

            <Box display="flex" p="15px" justifyContent="center">
                <ProductView />
                <ProductView />
            </Box>
            
            
        </Box>
    )
}

export default GridView
