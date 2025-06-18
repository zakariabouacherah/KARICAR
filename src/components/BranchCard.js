import React from 'react';
import Link from 'next/link';

function BranchCard(props) {

    const imgName = props.branch.imgName;
    const name = props.branch.name;

    const phone = props.branch.phone;
    const email = props.branch.email;

    return (
        <section className='car-card h-100 card'>

            <img src={"branches/" + imgName} className="card-img-top branch-img" alt={"Image of " + name}></img>

            <div className='card-body'>

                <div className='row'>
                    <div className='col-12'>
                        <h3>{name}</h3>
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-md-7'>
                        <i className="bi bi-envelope"></i> <Link href={'mailto:' + email} className='link'> {email}</Link>
                    </div>
                    <div className='col-md-5'>
                        <i className="bi bi-telephone"></i> <Link href={'tel:' + phone} className='link'> {phone}</Link>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12'>
                        <Link
                            href={{
                                pathname: '/reserve',
                                query: {
                                    start: name,
                                },
                            }}
                        >
                            <button className='btn btn-outline-primary'>
                                Make reservation
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default BranchCard;