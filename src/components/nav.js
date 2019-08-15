import React from "react";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-light justify-content-between">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Blog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
