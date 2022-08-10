import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { GitHub, Mail, PhoneIphone } from "@material-ui/icons";
import { CloseSharp, Link } from "@mui/icons-material";
import Email from "./Email";

const actions = [
  {
    icon: <GitHub />,
    name: "Github",
    link: "https://github.com/KaKino29",
  },
  { icon: <Mail />, name: "Mail", link: <Email /> },
  { icon: <PhoneIphone />, name: "Contact", link: null },
];

function Footer() {
  return (
    <SpeedDial
      ariaLabel="Contact List"
      sx={{ position: "absolute", bottom: 25, right: 25 }}
      icon={<SpeedDialIcon icon={<Link />} openIcon={<CloseSharp />} />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          href={action.link}
        />
      ))}
    </SpeedDial>
  );
}

export default Footer;
