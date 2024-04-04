import "./Nav.css";
import React from "react";
import NavItem from "./NavItem";

const Nav = (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <NavItem icon="home" pageName="Início" />
      <NavItem icon="users" pageName="Usuários" link="users" />
    </nav>
  </aside>
);

export default Nav;
