import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import React from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";

const Nav = styled(motion.nav)`
  display: grid;
  grid-template-columns: 10% 80% 10%;
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
  width: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 0 auto;
`;

const Item = styled(motion.li)`
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

const Logo = styled.div``;

const ToggleMode = styled.button`
  display: flex;
  justify-content: center;
  justify-self: end;
  width: 25px;
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
  const tdMatch = useMatch("ToDoList");
  const jsMatch = useMatch("JobScraper");
  const themeMode = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleThemeMode = () => setDarkAtom((prev) => !prev);
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
            {(tdMatch && (
              <Item style={{ scale: "1.2" }}>
                <Link to="/ToDoList">To Do List</Link>
              </Item>
            )) || (
              <Item variants={hoverVar} whileHover="hover" whileTap="clicked">
                <Link to="/ToDoList">To Do List</Link>
              </Item>
            )}
            {(jsMatch && (
              <Item style={{ scale: "1.2" }}>
                <Link to="/JobScraper">Job Scraper</Link>
              </Item>
            )) || (
              <Item variants={hoverVar} whileHover="hover" whileTap="clicked">
                <Link to="/JobScraper">Job Scraper</Link>
              </Item>
            )}
          </Items>
        </Col>
        <ToggleMode onClick={toggleThemeMode}>
          {themeMode ? <DarkMode /> : <LightMode />}
        </ToggleMode>
      </AnimatePresence>
    </Nav>
  );
}

export default Header;
