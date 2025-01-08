import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Link, Divider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#F5F5F5",
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 30px",
  "@media (max-width: 800px)": {
    flexDirection: "column",
  },
}));

const StyledColumn = styled(Box)(({ theme }) => ({
  marginRight: "3rem",
}));

const LinksContainer = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  "@media (max-width: 800px)": {
    flexDirection: "row",
    gap: "10px",
  },
});

const StyledLink = styled(Link)(({ theme }) => ({
  display: "block",
  marginBottom: "0.5rem",
  color: "#000",
  fontSize: "12px",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const StyledHeader = styled("div")({
  fontSize: "14px",
  marginTop: "10px",
  marginBottom: "10px",
  color: "#1f3e60",
});

const FullWidthDivider = styled(Divider)({
  border: "1.5px solid #0b9fd4",
  marginTop: "40px",
});

const Footer = () => {
  return (
    <>
      <FullWidthDivider />
      <StyledFooter>
        <StyledColumn>
          <StyledHeader>Customer Service</StyledHeader>
          <LinksContainer>
            <StyledLink href="#">Help Center</StyledLink>
            <StyledLink href="#">Order Status</StyledLink>
            <StyledLink href="#">Returns & Replacements</StyledLink>
            <StyledLink href="#">Accessibility</StyledLink>
          </LinksContainer>
        </StyledColumn>
        <Divider />
        <StyledColumn>
          <StyledHeader>Shopping</StyledHeader>
          <LinksContainer>
            <StyledLink href="#">On Sale Items</StyledLink>
            <StyledLink href="#">Our Brands</StyledLink>
            <StyledLink href="#">Trade Customers</StyledLink>
            <StyledLink href="#">Preferred Customer Program</StyledLink>
            <StyledLink href="#">View Your Cart</StyledLink>
          </LinksContainer>
        </StyledColumn>
        <Divider />

        <StyledColumn>
          <StyledHeader>Company Info</StyledHeader>
          <LinksContainer>
            <StyledLink href="#">About Us</StyledLink>
            <StyledLink href="#">Privacy Policy</StyledLink>
            <StyledLink href="#">Terms of Use</StyledLink>
          </LinksContainer>
        </StyledColumn>
        <Divider />

        <StyledColumn>
          <StyledHeader>Customer Support</StyledHeader>
          <Typography variant="caption">Ref # R101438264</Typography>
          <Typography
            variant="caption"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <PhoneIcon /> (855) 298-4922
          </Typography>
          <Typography variant="caption">
            Ready to Order?
            <br />
            Monday-Friday: 6:00 am to 5:00 pm PST
            <br />
            Saturday & Sunday: 6:00 am to 3:00 pm PST
          </Typography>
          <Typography variant="caption">
            Already Ordered?
            <br />
            File a Return or Replacement <br />
            View Your Order Status
            <br />
            For anything else, visit us at our Help Desk
          </Typography>
        </StyledColumn>
      </StyledFooter>
    </>
  );
};

export default Footer;
