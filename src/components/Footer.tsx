import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { GitHub } from "@material-ui/icons";
import { DarkMode, LightMode } from "@mui/icons-material";

const actions = [
  { icon: <GitHub />, name: "Github", link: "https://github.com/KaKino29" },
  { icon: <DarkMode />, name: "Dark Mode" },
  { icon: <LightMode />, name: "Light Mode" },
];

function Footer() {
  return (
    <SpeedDial
      ariaLabel="Dial"
      sx={{ position: "absolute", bottom: 25, right: 25 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          href={action.link}
          target="_blank"
        />
      ))}
    </SpeedDial>
  );
}

export default Footer;
