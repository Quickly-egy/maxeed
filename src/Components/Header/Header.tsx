import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='home_header'>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <h1>
                                Exporting agricultural
                                crops is our expertise.
                            </h1>

                            <h6 className='my-4 fs-4 fw-light'>
                                We have exported 100+ agricultural products to markets worldwide. Supplying premium crops and agricultural solutions to businesses globally. An award-winning company with 17+ years of experience in the industry.
                            </h6>

                            <div className='d-flex align-items-center'>
                                <button className='btn btn-dark px-4 me-4'
                                    style={{
                                        padding: ' 14px 28px'
                                    }}
                                >
                                    <Link
                                        className='text-white text-decoration-none'
                                        to={'/products'}>
                                        See Our Products
                                    </Link>

                                </button>
                                {/* <div className='d-flex align-items-center '>
                                    <i
                                        style={{
                                            width: '35px',
                                            height: '35px'
                                        }}
                                        className="fa-solid fa-play bg-white rounded-circle d-inline-flex text-black justify-content-center align-items-center"></i>

                                    <span
                                        style={{
                                            width: '120px',
                                            height: '2px',
                                            backgroundColor: 'white',
                                            display: 'inline-flex',
                                            margin: '0 10px'

                                        }}
                                    > </span>

                                    <p className='m-0'>

                                        Explore
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>


                </div>
            </header>
        </>
    )
}

export default Header