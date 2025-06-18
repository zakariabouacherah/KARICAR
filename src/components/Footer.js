import React from "react";
import Link from "next/link";

import CopyrightLabel from "./CopyrightLabel";

const Footer = () => {
  return (
    <div className="container-fluid bg-white py-5">
      <div className="row mx-5">
        <div className="col-md-4">
          <h5>About</h5>

          <dl>
            <Link className="link" href="/branches">
              <dt>Branches</dt>
            </Link>
            <Link className="link" href="/fleet">
              <dt>Our fleet</dt>
            </Link>
          </dl>

          <h5>Businesses</h5>
          <dl>
            <Link className="link" href="/">
              <dt>Business solutions</dt>
            </Link>
            <Link className="link" href="/">
              <dt>Franchise</dt>
            </Link>
          </dl>
        </div>
        <div className="col-md-4">
          <h5>Company</h5>
          <dl>
            <Link className="link" href="/">
              <dt>Careers</dt>
            </Link>
            <Link className="link" href="/">
              <dt>Press</dt>
            </Link>
            <Link className="link" href="/">
              <dt>Reports and governance</dt>
            </Link>
            <Link className="link" href="/">
              <dt>Sustainability</dt>
            </Link>
          </dl>
        </div>
        <div className="col-md-4">
          <h5>Carmony</h5>
          <p>
            123 Made Up Street <br />
            Agadir <br />
            AB1 CD12
          </p>

          <CopyrightLabel />

          <p>
            <Link href="tel:123456789" className="link">
              <i className="bi bi-telephone"></i> 123 456789
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
