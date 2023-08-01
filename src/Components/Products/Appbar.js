import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import axios from "axios";
import SelectedSearchProduct from "../Product2/SelectedSearchProduct";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import { filter } from "lodash";
import { useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/v1/products");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.toLowerCase();

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
   
    // navigate("/search")
   console.log(filteredData);
   
  };

  const Logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  const cart = useSelector((state) => state.cart.cart)

  const navigateToCart = () => {
    navigate("/cart");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" },
            fontFamily: 'Lugrasimo',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none' }}
          >
             Eshop
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Search>
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleSearch(search)}
            style={{margin: 4}}
          >
            Search
          </Button>
          
          <div>
          <Button
            color="primary"
            variant="contained"
            style={{margin: 4, position: "relative"}}
            onClick={navigateToCart}
          >
            Cart
            
            <span
            style={
              {position: "absolute",
               left: 52,
              right:14,
             backgroundColor: "red",
            width:14, 
            height:20,
          borderRadius: 7,
          color:"#000",
        fontSize:12,
          fontWeight:400,
        textAlign:"center"}
            }>{cart.length}</span>
            </Button>
            </div>

          <Button variant="contained" onClick={Logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
