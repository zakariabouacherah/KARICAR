import Link from "next/link";

import Hero from "../components/Hero";
import ReviewCard from "../components/ReviewCard";
import ReviewData from "../data/ReviewData.json";

import ReservationForm from "../components/ReservationForm";

export default function Page() {
  // Initial values for the reservation form, there are none on this page but it is a required prop
  const initialValues = {
    start: null,
    end: null,
    pickup: null,
    drop: null,
    car: null,
  };

  return (
    <div>
      <Hero />

      <section className="container-fluid d-none d-lg-block py-5">
        <div className="row justify-content-between text-center">
          <div className="col-3 align-self-center">
            <img
              src="/brand-logos/mercedes.png"
              className="img-fluid brand-logo-img"
              alt="Mercedes logo"
            />
          </div>
          <div className="col-2 align-self-center">
            <img
              src="/brand-logos/ford.png"
              className="img-fluid brand-logo-img"
              alt="Ford logo"
            />
          </div>
          <div className="col-2 align-self-center">
            <img
              src="/brand-logos/toyota.png"
              className="img-fluid brand-logo-img"
              alt="Toyota logo"
            />
          </div>
          <div className="col-1 align-self-center">
            <img
              src="/brand-logos/bmw.png"
              className="img-fluid brand-logo-img"
              alt="BMW logo"
            />
          </div>
          <div className="col-2 align-self-center">
            <img
              src="/brand-logos/hyundai.png"
              className="img-fluid brand-logo-img"
              alt="Hyundai logo"
            />
          </div>
          <div className="col-2 align-self-center">
            <img
              src="/brand-logos/skoda.png"
              className="img-fluid brand-logo-img"
              alt="Skoda logo"
            />
          </div>
        </div>
      </section>

      <section className="container-fluid max-width-container py-5">
        <div className="row">
          <div className="col-md-5">
            <h1>Why do our customers love us?</h1>
          </div>

          <div className="col-md-7">
            <div className="row mb-3">
              <div className="col-12">
                {/* <img src="/icons/locations.png" className='img-fluid w-25 my-4' /> */}
                <h3>
                  <i className="bi bi-check-circle-fill text-success"></i>{" "}
                  Locations all over Morocco
                </h3>
                <p>
                  With{" "}
                  <Link href={"/branches"} className="link">
                    branches
                  </Link>{" "}
                  in most major cities, we'll never be too far away.
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                {/* <img src="/icons/car.png" className='img-fluid w-25 my-4' /> */}
                <h3>
                  <i className="bi bi-check-circle-fill text-success"></i>{" "}
                  Vehicles for everyone
                </h3>
                <p>
                  Our selection of cars offer something for every need and
                  budget. Explore our{" "}
                  <Link href={"/fleet"} className="link">
                    full fleet
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                {/* <img src="/icons/cust-service.png" className='img-fluid w-25 my-4' /> */}
                <h3>
                  <i className="bi bi-check-circle-fill text-success"></i>{" "}
                  Customer service
                </h3>
                <p>
                  We strive to make sure every customer receieves excellent
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid max-width-container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>See our latest reviews</h1>
          </div>
        </div>

        <div className="row">
          {ReviewData.map((review, index) => (
            <div className="col-sm-6 col-lg-3 mb-3" key={index}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </section>

      <section className="container-fluid max-width-container pt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <ReservationForm
              initialValues={initialValues}
              cardTitle={"Start your reservation online"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
