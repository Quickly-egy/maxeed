import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-5 col-lg-4">
                            <h1>MAXED</h1>
                            <p>Get started noew try our product</p>

                            <div className='inputWrapper position-relative'>
                                <input type="email"
                                    className=''
                                    placeholder='Enter your email here'

                                />
                                <i className='fa-solid  fa-arrow-right'></i>
                            </div>
                        </div>

                        <div className=" col-md-5 col-lg-3">
                            <ul className='list-unstyled ps-5 ms-5'>
                                <li> <Link className='text-decoration-none' to={''}> Contact Us </Link> </li>
                                <li> <Link className='text-decoration-none' to={''}> About Us </Link> </li>
                                <li> <Link className='text-decoration-none' to={''}> Our Products </Link> </li>
                                {/* <li><Link to={''}> Contact us </Link> </li> */}
                            </ul>
                        </div>

                        <div className="col-lg-2 align-self-start">
                            {/* <ul className='list-unstyled ps-4'>
                                <li>Talk to Us</li>
                                <li>Our products</li>
                                <li> Get in touch </li>
                                <li>Privacy</li>
                                <li>Terms & Conditions</li>
                            </ul> */}
                        </div>

                        <div className='privacy d-flex justify-content-between mt-4 w-100'>

                            <p>
                                © 2025 Quickly. Egypt . Copyright and rights reserved
                            </p>


                        </div>


                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer