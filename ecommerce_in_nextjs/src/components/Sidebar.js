import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const SidebarContent = styled(Box)(({ theme }) => ({
  width: 250,
  padding: theme.spacing(2),
}));

const Sidebar = ({ isDrawerOpen, toggleDrawer }) => {
  const navigationLinks = [
    "Login/Sign Up",
    "Order Status",
    "My Favorites",
    "CART (0)",
  ];

  const productLinks = [
    "Cooling",
    "Brands",
    "Heating",
    "Shading",
    "Cooking",
    "Furniture & Entertainment",
    "Outdoor Lighting",
    "Learning Center",
  ];

  return (
    <>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <SidebarContent>
          <Typography variant="h6" gutterBottom>
            Navigation
          </Typography>
          <List>
            {navigationLinks.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" gutterBottom>
            Products
          </Typography>
          <List>
            {productLinks.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </SidebarContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
