import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
    Category, Devices, ExitToApp, Person, Public, Settings, ShoppingCart, Store
} from '@material-ui/icons';
import React, { useState } from 'react';
import AccountFragment from '../Fragments/AccountFragment';
import CategoryFragment from '../Fragments/CategoryFragment';
import HomeFragment from '../Fragments/HomeFragment.js';
import OrderFragment from '../Fragments/OrderFragment';
import ProductFragment from '../Fragments/ProductFragment';
import SettingFragment from '../Fragments/SettingFragment';
import logo from "../media/logo.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerContainer: {
        overflow: 'auto'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

export default function ClippedDrawer() {
    const classes = useStyles();

    const [fragment, setFragment] = useState("HOME_FRAGMENT")

    const renderFragment = () => {
        switch (fragment) {
            case "HOME_FRAGMENT":
                return <HomeFragment />
            case "MANAGE_CATEGORY_FRAGMENT":
                return <CategoryFragment />
            case "MANAGE_PRODUCT_FRAGMENT":
                return <ProductFragment />
            case "MANAGE_ORDERS_FRAGMENT":
                return <OrderFragment />
            case "SETTING_FRAGMENT":
                return <SettingFragment />
            case "ACCOUNT_FRAGMENT":
                return <AccountFragment />

            default:
                break
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        <img src={logo} height="30px" />
                        <Typography varient="h4" color="white" display="inline">eFashion Store</Typography>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}>
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <a href="http://localhost:3000/" target="_blank">
                            <ListItem button>
                                <ListItemIcon>
                                    <Public />
                                </ListItemIcon>
                                <ListItemText primary="Visit Website" />
                            </ListItem>
                        </a>
                    </List>
                    <List>
                        <ListItem button onClick={e => setFragment("HOME_FRAGMENT")}>
                            <ListItemIcon>
                                <Store />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button onClick={e => setFragment("MANAGE_CATEGORY_FRAGMENT")}>
                            <ListItemIcon>
                                <Category />
                            </ListItemIcon>
                            <ListItemText primary="Categories" />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button onClick={e => setFragment("MANAGE_PRODUCT_FRAGMENT")}>
                            <ListItemIcon>
                                <Devices />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button onClick={e => setFragment("MANAGE_ORDERS_FRAGMENT")}>
                            <ListItemIcon>
                                <ShoppingCart />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItem>
                    </List>
                    <List>

                        <ListItem button onClick={e => setFragment("SETTING_FRAGMENT")}>
                            <ListItemIcon><Settings /></ListItemIcon>
                            <ListItemText primary="Setting" />
                        </ListItem>

                    </List>
                    <List>

                        <ListItem button onClick={e => setFragment("ACCOUNT_FRAGMENT")}>
                            <ListItemIcon><Person /></ListItemIcon>
                            <ListItemText primary="My Account" />
                        </ListItem>

                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <ExitToApp />
                            </ListItemIcon>
                            <ListItemText primary="Log out" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                {renderFragment()}
            </main>
        </div>
    );
}
