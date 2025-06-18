import React from 'react';

function ReviewCard(props) {

    const content = props.review.content;
    const name = props.review.name;
    const date = props.review.date;

    return (
        <section className='car-card h-100 card py-0'>
            <div className='card-body'>

                <div className='row mb-3'>
                    <div className='col-12'>
                        <p className='card-text'>
                            <i className="bi bi-quote"></i> {content}
                        </p>
                    </div>
                </div>

                <div className='row justify-content-between'>
                    <div className='col-md-7'>
                        <p className='text-muted mb-0'>
                            {name}
                        </p>
                    </div>
                    <div className='col-md-5'>
                        <p className='text-muted text-end mb-0'>
                            {date}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ReviewCard;