"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="navbar sticky-top navbar-expand-lg py-1 bg-white">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          <img
            src="logo2.png"
            alt="Logo"
            height="46"
            className="d-inline-block align-text-top"
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100">
            <li className="nav-item p-1">
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
              >
                Instant quote
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link
                href="/fleet"
                className={`nav-link ${pathname === "/fleet" ? "active" : ""}`}
              >
                Our fleet
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link
                href="/branches"
                className={`nav-link ${
                  pathname === "/branches" ? "active" : ""
                }`}
              >
                Branches
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link
                href="/contact"
                className={`nav-link ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item reserve-button p-1">
              <Link href="/reserve">
                <button className="btn btn-primary">Make reservation</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
