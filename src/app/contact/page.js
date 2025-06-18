"use client";

import Link from "next/link";
import React, { useState } from "react";

import branchData from "../../data/Branches.json";
import FaqAccordion from "../../components/FaqAccordion";

export default function Page() {
  const [branch, setBranch] = useState("London"); // Default branch is London

  // Function to get the branch details based on the selected branch name
  const getBranchDetails = (branchName) => {
    const selectedBranch = branchData.find((b) => b.name === branchName);
    return selectedBranch || null;
  };

  const selectedBranch = getBranchDetails(branch);

  return (
    <div className="container max-width-container">
      <div className="row mt-4 mb-3">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="text-center">Contact a branch</h2>

              <p>
                Contacting your local branch is the best way to find more
                information. Use the dropdown to get contact details for any of
                our branches.
              </p>

              <select
                name="start-loc"
                id="start-loc"
                className="form-select mb-3"
                onChange={(e) => setBranch(e.target.value)}
              >
                {branchData.map((branch, index) => (
                  <option key={index} value={branch.name || ""}>
                    {branch.name}
                  </option>
                ))}
              </select>

              {selectedBranch && (
                <div className="mt-3">
                  <p>
                    <i className="bi bi-telephone"></i>{" "}
                    <Link href={"tel:" + selectedBranch.phone} className="link">
                      {selectedBranch.phone}
                    </Link>
                  </p>
                  <p>
                    <i className="bi bi-envelope"></i>{" "}
                    <Link
                      href={"mailto:" + selectedBranch.email}
                      className="link"
                    >
                      {" "}
                      {selectedBranch.email}
                    </Link>
                  </p>
                </div>
              )}

              <Link href="/branches">
                <button className="btn btn-outline-primary">
                  See all branch info
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="text-center">Customer service</h2>

              <p>
                For any enquiries that can't be dealt with by your local branch,
                you can contact our customer service team at the following
                details.
              </p>

              <div className="mt-3">
                <p>
                  <strong>General enquiries:</strong>{" "}
                  <Link href="tel:123456789" className="link">
                    123 456789
                  </Link>
                </p>
                <p>
                  <strong>Roadside assistance (24hrs):</strong>{" "}
                  <Link href="tel:123456789" className="link">
                    123 456789
                  </Link>
                </p>
              </div>

              <button className="btn btn-outline-primary">
                <i className="bi bi-box-arrow-up-right"></i> Chat with us
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5">
        <div className="row my-3 ">
          <div className="col-12">
            <h2 className="text-center">Frequently Asked Questions (FAQ)</h2>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-12">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </div>
  );
}
