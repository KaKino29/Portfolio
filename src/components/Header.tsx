import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import React from "react";
import { DarkMode, LightMode } from "@mui/icons-material";

const Nav = styled(motion.nav)`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 20px;
  font-size: 14px;
  color: black;
  background-color: lightgray;
`;

const Col = styled.div``;

const Items = styled.ul`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
`;

const Item = styled(motion.li)`
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

const Logo = styled.div``;

const ToggleMode = styled.div`
  display: flex;
  justify-content: end;
`;

const hoverVar = {
  hover: { scale: 1.2 },
  clicked: { scale: 1.1 },
};

function Header() {
  const homeMatch = useMatch("");
  const introMatch = useMatch("intro");
  const techMatch = useMatch("tech");
  const wlMatch = useMatch("WishList");
  return (
    <Nav>
      <AnimatePresence>
        <Col>
          <Logo>Logo</Logo>
        </Col>
        <Col>
          <Items>
            {(homeMatch && (
              <Item style={{ scale: "1.2" }}>
                <Link to="/">Home</Link>
              </Item>
            )) || (
              <Item variants={hoverVar} whileHover="hover" whileTap="clicked">
                <Link to="/">Home</Link>
              </Item>
            )}
            {(introMatch && (
              <Item style={{ scale: "1.2" }}>
                <Link to="/intro">Introduce</Link>
              </Item>
            )) || (
              <Item variants={hoverVar} whileHover="hover" whileTap="clicked">
                <Link to="/intro">Introduce</Link>
              </Item>
            )}
            {(techMatch && (
              <Item style={{ scale: "1.2" }}>
                <Link to="/tech">Tech</Link>
              </Item>
            )) || (
              <Item variants={hoverVar} whileHover="hover" whileTap="clicked">
                <Link to="/tech">Tech</Link>
              </Item>
            )}
            {(wlMatch && (
              <Item style={{ scale: "1.2" }}>
                <Link to="/WishList">Wish List</Link>
              </Item>
            )) || (
              <Item variants={hoverVar} whileHover="hover" whileTap="clicked">
                <Link to="/WishList">Wish List</Link>
              </Item>
            )}
          </Items>
        </Col>
        <ToggleMode>
          <LightMode />
          <DarkMode />
        </ToggleMode>
      </AnimatePresence>
    </Nav>
  );
}

export default Header;
