import React from "react";

const NavItem = (props) => (
  <a href={`#/${props?.link}`}>
    <i className={`fa fa-${props.icon}`}></i> {props.pageName}
  </a>
);

export default NavItem;
