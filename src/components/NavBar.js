import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((title) => {
    return <a key={title} href={`#${title}`}>{title}</a>
  })}</nav>;
}

export default NavBar;
