import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  marginLeft: "10%",
  marginRight: "10%",
  display: "flex",
  justifyContent: "space-around",
}));

const Navigation = styled("div")(({ theme }) => ({
  display: "flex",
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: "black",
  textTransform: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const PromoButton = styled("div")({
  color: "white",
  fontSize: "14px",
  borderRadius: "50px",
  backgroundColor: "#0B6B59",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  gap: "5px",
  "@media (max-width: 1080px)": {
    display: "none",
  },
});

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#ecf0f1" }}>
      <CustomToolbar>
        <Typography variant="body1" component="div" sx={{ color: "black" }}>
          📞 (855) 298-4922 | Call Center Hours
        </Typography>
        <Navigation>
          <PromoButton>
            <MailOutlineIcon fontSize="16px" /> <span>Save Up to 12%</span>
          </PromoButton>
          <NavButton>Login/Sign Up</NavButton>
          <NavButton>Order Status</NavButton>
          <NavButton>My Favorites</NavButton>
          <NavButton
            sx={{
              backgroundColor: "#001838",
              color: "white",
              borderRadius: "0px",
            }}
          >
            CART (0)
          </NavButton>
        </Navigation>
      </CustomToolbar>
    </AppBar>
  );
};

export default Header;
