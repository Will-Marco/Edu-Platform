import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";
import { NavbarProps } from "./navbar.props";
import { navItems } from "../../config/constants";
import { useRouter } from "next/router";

const Navbar = ({ window }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          px: "20px",
          display: "flex",
          justifyContent: "space-between  ",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <SchoolIcon />
          <Typography variant="h4" sx={{ my: 2 }} paddingLeft={'7px'}>
            Edu-P
          </Typography>
        </Box>
        <CloseIcon onClick={handleDrawerToggle} sx={{ cursor: "pointer" }} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton
              onClick={() => router.push(item.route)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box height={"9vh"} sx={{ display: "flex" }}>
      <AppBar
        sx={{ height: "9vh", backgroundColor: "#141414" }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            onClick={() => router.push("/")}
            sx={{
              my: 2,
              display: "flex",
              alignItems: "center",
              gap: "5px",
              flexGrow: 1,
              cursor: "pointer",
            }}
          >
            <SchoolIcon />
            <Typography variant="h4" paddingLeft={'7px'}>Edu-P</Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.route}
                sx={{ color: "#fff" }}
                onClick={() => router.push(item.route)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
