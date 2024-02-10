import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import ArticleIcon from "@mui/icons-material/Article";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SellIcon from "@mui/icons-material/Sell";
import { useState } from "react";

const SideBarList: React.FC = () => {
  const [contractItem, setContractItem] = useState<boolean>(false);

  const handleClick = () => {
    setContractItem((state) => !state);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <NavLink to="/home" style={{ textDecoration: "none" }}>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </NavLink>
      <NavLink to="/people" style={{ textDecoration: "none" }}>
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItemButton>
      </NavLink>
      <NavLink to="/estates" style={{ textDecoration: "none" }}>
        <ListItemButton>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Estates" />
        </ListItemButton>
      </NavLink>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Contracts" />
        {contractItem ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={contractItem} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink to="/contracts/rent" style={{ textDecoration: "none" }}>
            <ListItemButton  sx={{ pl: 4 }}>
              <ListItemIcon>
                <SellIcon />
              </ListItemIcon>
              <ListItemText primary="Sell Contracts" />
            </ListItemButton>
          </NavLink>
          <NavLink to="/contracts/sale" style={{ textDecoration: "none" }}>
            <ListItemButton  sx={{ pl: 4 }}>
              <ListItemIcon>
                <HandshakeIcon />
              </ListItemIcon>
              <ListItemText primary="Rent Contracts" />
            </ListItemButton>
          </NavLink>
        </List>
      </Collapse>
    </List>
  );
};

export default SideBarList;
