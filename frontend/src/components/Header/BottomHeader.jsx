import { useTheme } from "@emotion/react";
import {
  Close,
  ElectricBikeOutlined,
  ExpandMore,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
  Window,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Stack,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./Links";

const BottomHeader = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 200,
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <Window />
          <Typography sx={{ p: 0, textTransform: "capitalize", mx: 1 }}>
            Categories
          </Typography>

          <Box flexGrow={1} />

          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiList-root": {
              width: 202,
              bgcolor: theme.palette.myColor.main,
            },
            ".MuiPaper-root": { marginTop: 1 },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: 444, pt: 10, mx: "auto", mt: 6, position: "relative" }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              "&:hover": { rotate: "180deg", color: "red", transition: "0.3s" },
            }}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
            { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "full screen menu",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
            { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "user account",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
            {
              mainLink: "vendor account",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
          ].map((item) => (
            <Accordion
              key={item.mainLink}
              elevation={0}
              sx={{ bgcolor: "initial" }}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>{item.mainLink}</Typography>
              </AccordionSummary>

              <List sx={{ py: 0, my: 0 }}>
                {item.subLinks.map((subLink, index) => (
                  <ListItem sx={{ py: 0, my: 0 }} key={index}>
                    <ListItemButton>
                      <ListItemText primary={subLink} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Accordion>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
};
export default BottomHeader;
