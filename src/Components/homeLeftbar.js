import React from 'react';
import "./Homebar.css"
import plcimg from '../images/placeholder.jpg'

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




function HomeLeftbar() {
    return (

        <div className="homebar col-sm-3">


            <List
                sx={{
                    width: '100%', bgcolor: 'background.paper', height: "1060px", overflow: 'auto',
                    maxHeight: 1060, '& button': { paddingTop: 2 },
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"  >


                <ListItem
                    secondaryAction={
                        <Badge color="primary" badgeContent={1}>
                        </Badge>
                    }
                >
                    <ListItemAvatar>
                        <span className="span">
                            <i className="circle fas fa-bookmark"></i>
                        </span>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Shortlisted Items"
                    />
                </ListItem>

                <Divider />

                <div className="group">

                <ListItem
                    secondaryAction={
                        <i className="fas fa-plus"></i>
                        // <Button variant="light"><i class="fas fa-plus"></i></Button> 
                    }
                >
                    <ListItemAvatar>
                        <span className="span">
                            <i className="circle1 fas fa-users"></i>
                        </span>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Contact Groups"
                    />
                </ListItem>
                </div>

                <div className="contactlist">

                    <Box
                        sx={{
                            flexGrow: 1,
                            maxWidth: 294,
                            backgroundColor: "#f5f5f5"
                        }}
                    >

                        <List>
                            <ListItem
                                secondaryAction={
                                    <Badge color="primary" badgeContent={1}>
                                    </Badge>
                                }
                            >
                                <ListItemAvatar>
                                    <i className="fas fa-user"></i>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Retailer"
                                />
                            </ListItem>

                            <ListItem
                                secondaryAction={
                                    <Badge color="primary" badgeContent={1}>
                                    </Badge>
                                }
                            >
                                <ListItemAvatar>
                                    <i className="fas fa-user"></i>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Wholesaler"
                                />
                            </ListItem>

                            <ListItem
                                secondaryAction={
                                    <Badge color="primary" badgeContent={1}>
                                    </Badge>
                                }
                            >
                                <ListItemAvatar>
                                    <i className="fas fa-user"></i>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Manufacturer"
                                />
                            </ListItem>

                            <ListItem
                                secondaryAction={
                                    <Badge color="primary" badgeContent={1}>
                                    </Badge>
                                }
                            >
                                <ListItemAvatar>
                                    <i className="fas fa-user"></i>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Ungrouped"
                                />
                            </ListItem>
                        </List>
                    </Box>

                </div>

                <div className="card">

                    <Card sx={{ maxWidth: 298 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={plcimg}
                        />
                        <CardContent>

                            <Typography variant="body2" color="text.secondary">
                                You don't have any top product yet
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Update Category</Button>
                        </CardActions>
                    </Card>
                </div>

            </List>

        </div>
    )
}

export default HomeLeftbar;