import React from 'react';
import Link from 'next/link';

function CarCard(props) {

    const imgname = props.car.imgname;

    const key = props.car.key;
    const make = props.car.make;
    const model = props.car.model;
    const premium = props.car.premium;
    const pplCapacity = props.car.pplCapacity;
    const fuel = props.car.fuel;
    const description = props.car.description;

    return (
        <section className='car-card h-100 card'>

            <div className='card-body'>

                <div className='row'>
                    <div className='col-12'>
                        <img src={"cars/" + imgname} className='car-img mx-auto' alt="Image of car" />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <h3>
                            {make} {model}
                        </h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <p>
                            <i className="bi bi-people"></i> {pplCapacity}
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <p>
                            <i className="bi bi-fuel-pump"></i> {fuel}
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <p>
                            {premium && <span className="badge rounded-pill  bg-secondary">Premium</span>}
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        {description && description}
                    </div>
                </div>

            </div>

            <div className="card-footer bg-white border-0">
                <div className='row pb-2'>
                    <div className='col-12'>
                        <Link
                            href={{
                                pathname: '/reserve',
                                query: {
                                    car: key,
                                },
                            }}
                        >
                            <button className='btn btn-outline-primary w-100'>
                                Reserve me
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default CarCard;