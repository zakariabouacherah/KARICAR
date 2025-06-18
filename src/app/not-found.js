import Link from 'next/link'

export default function NotFound() {
    return (
        <section className='container-fluid max-width-container py-5'>
            <div className='row justify-content-center mb-5'>
                <div className='col-2 text-center'>
                    <img src="icons/not-found.png" className='img-fluid' alt="Page not found icon" />
                </div>
            </div>

            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>Page not found</h1>

                    <p>Sorry, we couldn't find the page you're looking for</p>

                    <Link href={'/'}>
                        <button className='btn btn-primary'>
                            Return home
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}