import React from "react";

const NavBarSidebar = (props) => {
  return (
    <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top sidebarNavigation">
      <button
        class="navbar-brand"
        onClick={() => {
          props.setPage("welcome");
        }}
        style={{ background: "none", border: "none", padding: "none" }}
      >
        <img src="./img/logo-1.png" height="36" alt="" />
      </button>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarSidebar;
