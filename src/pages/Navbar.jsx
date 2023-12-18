import { AppBar, Avatar, Box, Button, Fade, FormControl, Grid, IconButton, InputLabel, Menu, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { indigo, orange } from '@mui/material/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menulist, setMenulist] = useState()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <>
        <AppBar position="fixed" sx={{ backgroundColor: 'hsla(234, 38%, 18%, 0.8)', margin: 0 }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", marginY: "1vh" }}>
                <Typography variant="h6" sx={{}}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Box sx={{ display: "flex", alignContent: "center" }}>
                            <RestaurantIcon sx={{ color: orange[400], fontSize: "3rem", marginRight: "5px", cursor: "pointer" }} />
                            <Typography sx={{ fontWeight: "bold", color: orange[400], fontSize: "2rem", cursor: "pointer" }}>Restorant</Typography>
                        </Box>
                    </Link>
                </Typography>
                <IconButton onClick={e => (setMenulist(!menulist))}>
                    <MenuIcon sx={{ display: { md: "none" }, color: "gray", padding: "5px 10px", borderRadius: 1, border: '5px solid gray', }} />
                </IconButton>
                <Box sx={{ alignItems: "center", display: { lg: "flex", md: "flex", xs: 'none' } }}>
                    <Link to="/" style={{ color: "white", textDecoration: "none", }}><Typography sx={{ marginLeft: 3, fontSize: "1rem", fontWeight: "bold", cursor: "pointer", '&:hover': { color: orange[400] } }}>HOME</Typography></Link>
                    <Link to="/about" style={{ color: "white", textDecoration: "none", }}><Typography sx={{ marginLeft: 3, fontSize: "1rem", fontWeight: "bold", cursor: "pointer", '&:hover': { color: orange[400] } }}>ABOUT</Typography></Link>
                    <Link to="/services" style={{ color: "white", textDecoration: "none", }}><Typography sx={{ marginLeft: 3, fontSize: "1rem", fontWeight: "bold", cursor: "pointer", '&:hover': { color: orange[400] } }}>SERVICE</Typography></Link>
                    <Link to="/menu" style={{ color: "white", textDecoration: "none", }}><Typography sx={{ marginLeft: 3, fontSize: "1rem", fontWeight: "bold", cursor: "pointer", '&:hover': { color: orange[400] } }}>MENU</Typography></Link>
                    <Box >
                        <Button
                            sx={{ marginLeft: 3, fontSize: "1rem", fontWeight: "bold", color: "white", '&:hover': { color: orange[400] } }}
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"

                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            PAGES <KeyboardArrowDownIcon />
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <Link to="/booking" style={{ color: "gray", textDecoration: "none" }}><MenuItem sx={{ ":hover": { backgroundColor: orange[400], color: "white" } }}>Booking</MenuItem></Link>
                            <Link to="/ourteam" style={{ color: "gray", textDecoration: "none" }}><MenuItem sx={{ ":hover": { backgroundColor: orange[400], color: "white" } }}>Our Team</MenuItem></Link>
                            <Link to="/testimonial" style={{ color: "gray", textDecoration: "none" }}><MenuItem sx={{ ":hover": { backgroundColor: orange[400], color: "white" } }}>Testimonial</MenuItem></Link>
                        </Menu>
                    </Box>
                    <Link to="/contact" style={{ color: "white", textDecoration: "none" }}> <Typography sx={{ marginLeft: 3, fontSize: "1rem", fontWeight: "bold", cursor: "pointer", '&:hover': { color: orange[400] } }}>CONTACT</Typography></Link>
                    <Button sx={{ marginLeft: 3, backgroundColor: orange[400], "&:hover": { backgroundColor: orange[600] }, color: "white", padding: "10px 1.7vw" }}>BOOK A TABLE</Button>
                </Box>
            </Toolbar>
            {
                menulist && <Box sx={{ display: { md: "none" } }}> <hr />
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}><Typography sx={{ margin: "1rem 3rem", fontSize: "1rem", fontWeight: "bold", }}>HOME</Typography></Link>
                    <Link to="/about" style={{ textDecoration: "none", color: "white" }}><Typography sx={{ margin: "1rem 3rem", fontSize: "1rem", fontWeight: "bold", }}>ABOUT</Typography></Link>
                    <Link to="/services" style={{ textDecoration: "none", color: "white" }}><Typography sx={{ margin: "1rem 3rem", fontSize: "1rem", fontWeight: "bold", }}>SERVICE</Typography></Link>
                    <Link to="/menu" style={{ textDecoration: "none", color: "white" }}><Typography sx={{ margin: "1rem 3rem", fontSize: "1rem", fontWeight: "bold", }}>MENU</Typography></Link>

                    <Link to="/contact" style={{ textDecoration: "none", color: "white" }}><Typography sx={{ margin: "1rem 3rem", fontSize: "1rem", fontWeight: "bold", }}>CONTACT</Typography></Link>
                    <Button sx={{ margin: "0.4rem 1rem", backgroundColor: orange[400], "&:hover": { backgroundColor: orange[600] }, color: "white", padding: "10px 3vw" }}>BOOK A TABLE</Button>
                </Box>
            }
        </AppBar >

        {/* fix button */}
        <Button Button variant='contained' sx={{ position: "fixed", right: 0, marginRight: 3, bottom: 50, paddingY: 1, backgroundColor: orange[400], zIndex: 2, '&:hover': { backgroundColor: orange[400] } }
        }>
            <VerticalAlignTopOutlinedIcon />
        </Button >
        {/* fix button */}
    </>
}

export default Navbar