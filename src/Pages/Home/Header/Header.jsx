import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../Images/logo.png";
import "./Header.css";
import "@reach/menu-button/styles.css";
import "@reach/combobox/styles.css";

import { Box, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Conditionsdrop from "./Conditionsdrop";
import Treatmentsdrop from "./Treatmentsdrop";
import Aboutdrop from "./Aboutdrop";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="head-bg">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="#">
            Go Health
          </a>
          <div className="d-flex ms-auto ">
            <div>
              {" "}
              {user.email ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={logout}
                >
                  Log Out
                </button>
              ) : (
                <Link to="/phone" className="">
                  <span className="d-flex icon-head d-lg-none mx-2">
                    {" "}
                    {/* <PhoneInTalkIcon sx={{ width: "25px" }} />{" "}
                     */}
                    <img width={"15px"} src="images/phone-call.png" alt="" />
                  </span>
                </Link>
              )}
            </div>
            <div>
              <span className="mx-2 d-flex icon-head d-lg-none">
                {" "}
                <img width={"15px"} src="images/whatsapp.png" alt="" />
              </span>
            </div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" style={{ width: "20px" }}></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Conditionsdrop />
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Treatmentsdrop />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Aboutdrop />
                </a>
              </li>
            </ul>
          </div>
          <div></div>
          {user.email ? (
            <button type="button" className="btn btn-danger" onClick={logout}>
              Log Out
            </button>
          ) : (
            <Link
              to="/phone"
              className="btn btn-danger d-flex justify-content-center align-items-center d-none d-md-none d-lg-flex"
            >
              <span className="d-none d-md-none d-lg-flex">
                {" "}
                <PhoneInTalkIcon sx={{ width: "25px" }} />{" "}
              </span>
              <span className="d-none d-md-none d-lg-flex">+918860688606</span>
            </Link>
          )}
          <button style={{borderRadius:"20px",padding:"7px"}} className="btn btn-primary whatsapp d-flex justify-content-center align-items-center d-none d-md-none d-lg-flex">
            <span className="d-none d-md-none d-lg-flex">
              {" "}
              <WhatsAppIcon sx={{ width: "25px" }} />
            </span>

            <span className="d-none d-md-none d-lg-flex">WhatsApp Expert</span>
          </button>
          {user.email && (
            <span className="navbar-text">
              <i className="bi bi-person" />{" "}
              <span className="userName">{user.displayName}</span>
            </span>
          )}
        </div>
      </nav>

      {/* <Navbar className="navbar" collapseOnSelect>
        <Container className="container-head">
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" />
            <h4 className="fw-bold">Go Health</h4>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={showMobileMenu ? "show" : ""}
          >
            <Nav
              className="ms-auto align-items-center fw-bold"
              style={{ fontSize: "18px" }}
            >
              <div>
                <Conditionsdrop />
              </div>
              <div className="ml-2">
                <Treatmentsdrop />
              </div>
              <div className="ml-2">
                <Aboutdrop />
              </div>
              {user.email ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={logout}
                >
                  Log Out
                </button>
              ) : (
                <Link to="/phone" type="button" className="btn btn-danger">
                  <PhoneInTalkIcon sx={{ mr: 0.5 }} /> +918860688606
                </Link>
              )}
              <Button className="whatsapp">
                <WhatsAppIcon sx={{ mr: 1 }} />
                whatsapp Expert
              </Button>
              {user.email && (
                <Navbar.Text>
                  <FontAwesomeIcon icon={faUser} />
                  <span className="userName">{user.displayName}</span>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  );
};

export default Header;
