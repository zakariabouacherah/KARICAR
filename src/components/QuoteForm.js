"use client";

import React, { useState } from "react";
import Link from "next/link";

import branchData from "../data/Branches.json";

export default function QuoteForm() {
  const [startLocation, setStartLocation] = useState("London");
  const [duration, setDuration] = useState(1);
  const [endLocation, setEndLocation] = useState("London");
  const [carType, setCarType] = useState("1"); // 1 = regular
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    const calculatedPrice = (100 + duration * 50) * carType;

    setPrice(calculatedPrice);
  };

  const newQuote = () => {
    setPrice(null);
  };

  return (
    <div className="card hero-card my-5 py-2 mx-5">
      <div className="card-body">
        <div>
          {price == null ? (
            <div>
              <div className="row">
                <div className="col-12 text-center mb-3">
                  <h1>Find your next rental</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mt-2">
                  <label htmlFor="start-loc">Pickup location</label>
                  <select
                    name="start-loc"
                    id="start-loc"
                    className="form-select"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                  >
                    {branchData.map((branch, index) => (
                      <option key={index} value={branch.name || ""}>
                        {branch.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-6 mt-2">
                  <label htmlFor="end-loc">Drop-off location</label>
                  <select
                    name="end-loc"
                    id="end-loc"
                    className="form-select"
                    value={endLocation}
                    onChange={(e) => setEndLocation(e.target.value)}
                  >
                    {branchData.map((branch, index) => (
                      <option key={index} value={branch.name || ""}>
                        {branch.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mt-2">
                  <label htmlFor="duration">Duration (days)</label>
                  <input
                    name="duration"
                    id="duration"
                    className="form-control"
                    type="number"
                    value={duration || ""}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>

                <div className="col-lg-6 mt-2">
                  <label htmlFor="car-type">Car type</label>
                  <select
                    name="car-type"
                    id="car-type"
                    className="form-select"
                    value={carType || ""}
                    onChange={(e) => setCarType(e.target.value)}
                  >
                    <option value="0.8" key="1">
                      Value
                    </option>
                    <option value="1" key="2">
                      Regular
                    </option>
                    <option value="1.2" key="3">
                      Premium
                    </option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <button
                    className="btn btn-primary w-100 mt-4"
                    onClick={calculatePrice}
                  >
                    Get Price
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="row text-center">
              <div className="col-12">
                <h2>
                  <i className="bi bi-check2-circle"></i> Your {duration} day
                  trip from {startLocation}{" "}
                  {startLocation != endLocation && "to " + endLocation}
                </h2>

                <p>Estimated cost is only £{price}</p>

                <button
                  className="btn btn-outline-primary me-2"
                  onClick={newQuote}
                >
                  Edit estimate
                </button>

                <Link
                  href={{
                    pathname: "/reserve",
                    query: {
                      start: startLocation,
                      end: endLocation,
                    },
                  }}
                >
                  <button className="btn btn-primary">Begin reservation</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
