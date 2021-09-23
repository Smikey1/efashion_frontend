import React, { useState } from 'react';
import logo from "../media/logo.png"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeFragment from '../Fragments/HomeFragment.js'
import {
    Public,
    Store,
    LocalMall,
    Redeem,
    ShoppingCart,
    Favorite,
    Person,
    ExitToApp
} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import AccountFragment from '../Fragments/AccountFragment';

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
                            <ListItemText primary="My Store" />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <LocalMall />
                            </ListItemIcon>
                            <ListItemText primary="My Orders" />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <Redeem />
                            </ListItemIcon>
                            <ListItemText primary="My Rewards" />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <ShoppingCart />
                            </ListItemIcon>
                            <ListItemText primary="My Cart" />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button>
                            <ListItemIcon><Favorite />
                            </ListItemIcon>
                            <ListItemText primary="My Wishlist" />
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
