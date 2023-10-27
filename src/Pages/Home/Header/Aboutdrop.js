import React from "react";
// this is drop down
export default function Aboutdrop() {
  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          About Us
        </a>
        <ul className="dropdown-menu">
          <li className="nav-item dropend">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Who We Are
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Refund Policy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Editorial Policy
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </>
  );
}
