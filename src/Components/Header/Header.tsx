import './Header.css'
import { Link } from 'react-router-dom'
import 'animate.css';
import { useTranslation } from 'react-i18next';


const Header = () => {

    const { t, i18n } = useTranslation();


    return (
        <>
            <header
                style={{
                    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',

                    fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Poppins", serif'

                }}
                className='home_header '>
                <div className="container">

                    <div className="row">
                        <div className="col-md-8 col-lg-6 animate__animated animate__fadeIn">
                            <h1 className=''>
                                {t("HomeHeaderTile")}
                            </h1>


                            <h6 className='my-4 fs-4 fw-light'>
                                {t("HomeHeaderDesc")}

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
                                        {t("HomeHeaderBtn")}
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