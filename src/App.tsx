import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Routes/Home";
import Intro from "./Routes/Intro";
import JobScraper from "./Routes/JobScraper";
import Tech from "./Routes/Tech";
import ToDoList from "./Routes/ToDoList";
import WishList from "./Routes/WishList";
import { DarkTheme, LightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color: #202020;
  line-height: 1.2;
  background-color: ${(props) => props.theme.bgColor};
  overflow-x: hidden;
}
a {
  text-decoration:none;
  color: inherit;
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/JobScraper" element={<JobScraper />} />
          <Route path="/ToDoList" element={<ToDoList />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
