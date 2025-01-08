import React from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  width: "100%",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: "10px",
  [theme.breakpoints.up("800px")]: {
    flexDirection: "row",
    gap: 0,
  },
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "0px 5px 5px 0px",
  width: "100%",
  maxWidth: "600px",
  marginLeft: theme.spacing(2),
}));

const Navigation = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  alignItems: "center",
}));

const NavButton = styled("div")(({ theme }) => ({
  color: "black",
  textTransform: "none",
  textDecoration: "underline",
  fontWeight: "bold",
  fontSize: "15px",
  cursor: "pointer",
  "&:hover": {
    color: "#428bca",
  },
}));

const HomeHeader = ({ toggleDrawer }) => {
  const isMobile = useMediaQuery("(max-width:800px)");

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <CustomToolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: isMobile ? "100%" : "auto",
            justifyContent: isMobile ? "space-between" : "flex-start",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: isMobile ? 0 : 10,
            }}
          >
            <img src="/logo.png" alt="Logo" style={{ height: "50px" }} />
          </Typography>

          {!isMobile && (
            <SearchContainer>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search for Anything"
                sx={{ width: "100%" }}
              />
              <Box
                sx={{
                  backgroundColor: "#d7d7d7",
                  width: "100px",
                  height: "42px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "0px 5px 5px 0px",
                }}
              >
                <SearchIcon />
              </Box>
            </SearchContainer>
          )}
        </Box>

        {!isMobile && (
          <Navigation>
            <NavButton>Cooling</NavButton>
            <NavButton>Brands</NavButton>
            <NavButton>Heating</NavButton>
            <NavButton>Shading</NavButton>
            <NavButton>Cooking</NavButton>
            <NavButton>Furniture & Entertainment</NavButton>
            <NavButton>Outdoor Lighting</NavButton>
            <NavButton>Learning Center</NavButton>
          </Navigation>
        )}
      </CustomToolbar>

      {isMobile && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            margin: "0px 40px 30px 40px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            size="large"
          >
            <MenuIcon sx={{ width: "35px", height: "35px" }} />
          </IconButton>
          <SearchContainer sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search for Anything"
              sx={{ width: "100%" }}
            />
            <Box
              sx={{
                backgroundColor: "#d7d7d7",
                width: "100px",
                height: "42px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0px 5px 5px 0px",
              }}
            >
              <SearchIcon />
            </Box>
          </SearchContainer>
        </div>
      )}
    </AppBar>
  );
};

export default HomeHeader;
